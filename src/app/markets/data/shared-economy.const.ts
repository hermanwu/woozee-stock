import { Risk } from 'src/app/risks/models/risk.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

export const sharedEconomyRisks: Risk[] = [
  {
    uuid: 'mrse-1',
    content: 'Labor shortage in shared economy.',
  },
];

export const sharedEconomyMarket = {
  type: IndustryType.shared_economy,
  riskUuids: ['mrse-1'],
};
