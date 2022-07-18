import { IndustryType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';

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
