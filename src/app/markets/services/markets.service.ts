import { Injectable } from '@angular/core';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { calculateIncreasePercentage } from 'src/app/shared/functions/math.function';
import { Market } from 'src/app/stock/models/market.models';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { ObjectiveDataService } from 'src/app/stock/services/objective-data.service';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { allMarkets } from '../data/all-markets.const';

@Injectable({
  providedIn: 'root',
})
export class MarketsService {
  markets: Market[] = allMarkets;
  marketTypeToMarketMap: Map<IndustryType, Market> = new Map();
  marketTypeToStocksMap: Map<IndustryType, StockAnalysis[]> = new Map();
  allStocks: StockData[];

  constructor(private objectiveDataService: ObjectiveDataService) {
    this.allStocks = objectiveDataService.getAllStockData();
  }

  /**
   * Calculate data average
   * @param types
   * @returns
   */
  populateIndustryData(marketType: IndustryType): Market {
    // total revenue divide by previous revenue;
    let currentTotal = 0;
    let previousTotal = 0;
    let stocks = this.getStocksByIndustryType(marketType);

    for (let stock of stocks) {
      if (stock.previousQuarterRevenue && stock.quarterRevenue) {
        currentTotal += stock.quarterRevenue;
        previousTotal += stock.previousQuarterRevenue;
      }
    }

    return {
      type: marketType,
      growthRate: calculateIncreasePercentage(previousTotal, currentTotal),
    } as Market;
  }

  getMarketsByTypes(types: IndustryType[]): Market[] {
    if (types && types.length > 0) {
      return cloneDeep(
        this.markets.filter((market) => types.indexOf(market.type) >= 0)
      );
    }
  }

  /**
   * Get average revenue growth of a market.
   */
  getIndustry(type: IndustryType): Market {
    if (this.marketTypeToMarketMap.has(type) === false) {
      this.marketTypeToMarketMap.set(type, this.populateIndustryData(type));
    }
    return this.marketTypeToMarketMap.get(type);
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
          if (stock?.business?.markets) {
            const markets = stock.business.markets;

            if (markets.filter((market) => market === type).length > 0) {
              return true;
            }
          }
          return false;
        })
    );
  }

  sortMarketsByRiskCount(markets: Market[]): Market[] {
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
