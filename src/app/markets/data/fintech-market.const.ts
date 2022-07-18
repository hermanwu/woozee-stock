import { IndustryType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';

export const fintechRisks: Risk[] = [
  {
    uuid: 'fintechRisks-1',
    name: 'Weak network effect',
  },
  {
    uuid: 'fintechRisks-2',
    name: 'Consumer spending decrease will cause Fintech revenue decrease.',
  },
];

export const fintechMarket = {
  type: IndustryType.fintech,
  riskUuids: fintechRisks.map((c) => c.uuid),
};
