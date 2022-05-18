import { MarketType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { Market } from 'src/app/stock/models/market.models';

export const travelMarketRisks: Risk[] = [
  {
    uuid: 'travel-market',
    content: '10% annual growth rate is relatively slow',
  },
];

export const travelMarket: Market = {
  uuid: 'travel-market',
  type: MarketType.travel,
  growthRate: 0.1,
  size: 638 * BILLION,
  riskUuids: travelMarketRisks.map((r) => r.uuid),
};
