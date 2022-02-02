import { RiskLevel } from '../../models/risk-level.model';

export const laborShortage = {
  name: 'Labor Shortage',
  level: RiskLevel.medium,
  notes: [
    {
      content: 'facts',
      notes: [],
    },
  ],
  startTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
};
