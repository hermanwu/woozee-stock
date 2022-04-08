import { FactType } from '../../models/fact-type.enum';
import { RiskLevel } from '../../models/risk-level.model';

export const laborShortage = {
  name: 'Labor Shortage',
  level: RiskLevel.medium,
  type: FactType.macro,
  notes: [
    {
      content: 'facts',
      notes: [],
    },
  ],
  updatedTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
};
