import { Injectable } from '@angular/core';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { calculateIncreasePercentage } from 'src/app/shared/functions/math.function';
import { Industry } from 'src/app/stock/models/industry.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { StockServices } from 'src/app/stock/services/objective-data.service';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { allMarkets } from '../data/all-markets.const';

@Injectable({
  providedIn: 'root',
})
export class IndustriesService {
  markets: Industry[] = allMarkets;
  marketTypeToMarketMap: Map<IndustryType, Industry> = new Map();
  marketTypeToStocksMap: Map<IndustryType, StockAnalysis[]> = new Map();
  allStocks: StockData[];

  constructor(private objectiveDataService: StockServices) {
    this.allStocks = objectiveDataService.getAllStockData();
  }

  /**
   * Calculate data average
   * @param types
   * @returns
   */
  populateIndustryData(marketType: IndustryType): Industry {
    // total revenue divide by previous revenue;
    let currentQuarterRevenueTotal = 0;
    let previousQuarterRevenueTotal = 0;
    let currentTtmRevenue = 0;
    let previousTtmRevenue = 0;
    let stocks = this.getStocksByIndustryType(marketType);

    for (let stock of stocks) {
      if (stock.previousQuarterRevenue && stock.quarterRevenue) {
        currentQuarterRevenueTotal += stock.quarterRevenue;
        previousQuarterRevenueTotal += stock.previousQuarterRevenue;
      }

      if (stock.ttmRevenue && stock.previousTtmRevenue) {
        currentTtmRevenue += stock.ttmRevenue;
        previousTtmRevenue += stock.previousTtmRevenue;
      }
    }

    return {
      type: marketType,
      quarterRevenueGrowth: calculateIncreasePercentage(
        previousQuarterRevenueTotal,
        currentQuarterRevenueTotal
      ),

      yearOverYearRevenueGrowth: calculateIncreasePercentage(
        previousTtmRevenue,
        currentTtmRevenue
      ),
    } as Industry;
  }

  getMarketsByTypes(types: IndustryType[]): Industry[] {
    if (types && types.length > 0) {
      return cloneDeep(
        this.markets.filter((market) => types.indexOf(market.type) >= 0)
      );
    }
  }

  /**
   * Get average revenue growth of a market.
   */
  getIndustryByTypes(types: IndustryType[]): Industry[] {
    const result = [];

    for (let type of types) {
      if (this.marketTypeToMarketMap.has(type) === false) {
        this.marketTypeToMarketMap.set(type, this.populateIndustryData(type));
      }
      result.push(this.marketTypeToMarketMap.get(type));
    }

    return result;
  }

  getAllIndustries(): Industry[] {
    const map = {};

    for (let industry of allMarkets) {
      if (!map[industry.type]) {
        map[industry.type] = industry;
      }
    }

    for (let industryType of Object.values(IndustryType)) {
      if (!map[industryType]) {
        map[industryType] = {
          type: industryType,
        };
      }
    }

    return Object.values(map) as Industry[];
  }

  getStocksByIndustryType(
    type: IndustryType,
    stocks: StockData[] = this.allStocks
  ): StockData[] {
    if (this.marketTypeToStocksMap.has(type)) {
      return this.marketTypeToStocksMap.get(type);
    }

    return (
      stocks
        // filter out the stock that is in this market.
        .filter((stock) => {
          if (stock?.industries) {
            if (
              stock.industries.filter((market) => market === type).length > 0
            ) {
              return true;
            }
          } else if (stock?.business?.markets) {
            const markets = stock.business.markets;

            if (markets.filter((market) => market === type).length > 0) {
              return true;
            }
          }

          return false;
        })
    );
  }

  sortMarketsByRiskCount(markets: Industry[]): Industry[] {
    const marketsClone = cloneDeep(markets);

    return marketsClone.sort((a, b) => {
      if (!a['riskUuids'] && !b['riskUuids']) {
        return 0;
      }

      if (!a['riskUuids']) {
        return 1;
      }

      if (!b['riskUuids']) {
        return -1;
      }

      const isAscending = false;
      if (isAscending === false) {
        [a, b] = [b, a];
      }

      // switch (this.sortOrder.column) {
      //   case StockListTableColumn.ticker:
      //     return a[StockListTableColumn.ticker].localeCompare(
      //       b[StockListTableColumn.ticker]
      //     );
      // }

      return a['riskUuids'].length - b['riskUuids'].length;
    });
  }
}
