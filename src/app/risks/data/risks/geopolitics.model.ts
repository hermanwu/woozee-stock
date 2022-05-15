import { FactType } from '../../models/fact-type.enum';
import { RiskLevel } from '../../models/risk-level.model';

export const geopolitics = {
  uuid: '4',
  name: 'Russian-Ukraine war',
  type: FactType.event,
  level: RiskLevel.shortTerm,
  notes: [
    {
      content:
        'Yellen warns that war in Ukraine will have ‘enormous’ global economic impact',
    },
  ],
  updatedTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
  actions: [
    { content: 'Trim stock that does not have income.' },
    { content: 'Sell stock that has high valuation.' },
  ],
};
