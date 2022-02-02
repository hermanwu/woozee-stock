import { RiskLevel } from '../../models/risk-level.model';

export const geopolitics = {
  name: 'Geopolitics',
  level: RiskLevel.medium,
  notes: [
    {
      content: 'facts',
      notes: [],
    },
  ],
  startTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
  actions: [
    { content: 'Trim stock that does not have income.' },
    { content: 'Sell stock that has high valuation.' },
  ],
};
