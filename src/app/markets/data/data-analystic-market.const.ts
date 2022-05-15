import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { Market } from 'src/app/stock/models/market.models';

export const dataAnalyticMarket: Market = {
  size: 44 * BILLION,
  type: MarketType.dataAnalytics,
};
