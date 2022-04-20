import { MarketType } from 'src/app/facts/data/area.enum';
import { Market } from 'src/app/stock/models/market.models';

export const hospitalityMarket: Market = {
  type: MarketType.hospitality,
  tickers: ['MAR', 'ABNB'],
};
