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
}
