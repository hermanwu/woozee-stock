import { Risk } from 'src/app/risks/models/risk.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

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
