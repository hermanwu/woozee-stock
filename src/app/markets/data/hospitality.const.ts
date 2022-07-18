import { IndustryType } from 'src/app/facts/data/area.enum';
import { Market } from 'src/app/stock/models/market.models';

export const hospitalityMarket: Market = {
  type: IndustryType.hospitality,
  tickers: new Set(['MAR', 'ABNB']),
};
