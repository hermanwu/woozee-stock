import { Injectable } from '@angular/core';
import { MarketType } from 'src/app/facts/data/area.enum';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Market } from 'src/app/stock/models/market.models';
import { allMarkets } from '../data/all-markets.const';

@Injectable({
  providedIn: 'root',
})
export class MarketsService {
  markets: Market[] = allMarkets;

  constructor() {}

  getMarketsByTypes(types: MarketType[]): Market[] {
    if (types && types.length > 0) {
      return cloneDeep(
        this.markets.filter((market) => types.indexOf(market.type) >= 0)
      );
    }
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

  sortByCatalystRiskDifference(items: Market[]) {
    const itemCopy = cloneDeep(items);

    return itemCopy.sort((a, b) => {
      const aRiskCount = a?.riskUuids?.length > 0 ? a.riskUuids.length : 0;
      const aCatalystCount =
        a?.catalystUuids?.length > 0 ? a.catalystUuids.length : 0;
      const aDiff = aCatalystCount - aRiskCount;

      const bRiskCount = b?.riskUuids?.length > 0 ? b.riskUuids.length : 0;
      const bCatalystCount =
        b?.catalystUuids?.length > 0 ? b.catalystUuids.length : 0;
      const bDiff = bCatalystCount - bRiskCount;

      return bDiff - aDiff;
    });
  }
}
