import { Injectable } from '@angular/core';
import { MarketType } from 'src/app/facts/data/area.enum';
import { news } from 'src/app/media/news/news.const';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Market } from 'src/app/stock/models/market.models';
import { News } from 'src/app/stock/models/news.model';

@Injectable({
  providedIn: 'root',
})
export class MarketsService {
  allNews: News[] = news;

  constructor() {}

  getMarketsByTypes(types: MarketType[]): Market[] {
    if (types && types.length > 0) {
      return cloneDeep(
        this.markets.filter((market) => types.indexOf(market.type) >= 0)
      );
    }
  }
}
