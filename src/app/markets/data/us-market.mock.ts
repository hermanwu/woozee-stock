import { MarketType } from 'src/app/facts/data/area.enum';
import { fedRate } from 'src/app/risks/data/risks/fed-rate.model';
import { laborShortage } from 'src/app/risks/data/risks/labor-shortage.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { Market } from 'src/app/stock/models/market.models';

export const usMarketRisks: Risk[] = [
  fedRate,
  laborShortage,
  {
    uuid: 'usr13',
    content: 'US Consumer spending decreases.',
    updatedTime: new Date('2022-04-27'),
  },
];

export const usMarket: Market = {
  type: MarketType.us,
  riskUuids: usMarketRisks.map((r) => r.uuid),
};
