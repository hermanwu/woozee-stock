import { IndustryType } from 'src/app/facts/data/area.enum';
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
  {
    uuid: 'usr14',
    content: 'Companies start to cut spending.',
    notes: [
      {
        content:
          'Netflix lays off 150 employees as the streaming service contends with big subscriber losses',
      },
      {
        content:
          'Coinbase would temper hiring and instead focus on integrating the employees it has already hired.',
      },
    ],
  },
];

export const usMarket: Market = {
  type: IndustryType.us,
  riskUuids: usMarketRisks.map((r) => r.uuid),
};
