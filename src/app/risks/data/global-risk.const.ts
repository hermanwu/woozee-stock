import { Source } from 'src/app/shared/data/source.enum';
import { Risk } from '../models/risk.model';

export const risks: Risk[] = [
  {
    name: 'Inflation',
    arguments: [
      {
        content:
          'The consumer price index jumped 6.8% in the 12 months ending in November—the highest since 1982. ... It’s not even clear that those higher inflation readings have peaked',
        source: Source.marketWatch,
      },
      {
        content: 'Supply chain issue causes that supply is bigger than demand.',
      },
      {
        content: 'Wages are record high.',
      },
    ],
    counterArguments: [
      {
        content: 'Inflation ',
      },
    ],
    solutions: [
      { content: 'Monitor CPI' },
      { content: 'Buy company has pricing power', notes: [] },
      { content: 'Buy company will grow and can scale', notes: [] },
      { content: 'Sell covered calls' },
    ],
    startTime: new Date('2020-01-01'),
    endTime: new Date('2022-12-31'),
  },
  {
    name: 'Fed Rate',
    arguments: [
      {
        content:
          'forecast showed 12 out of 18 FOMC members expect at least three rate raises next year.',
        source: Source.cnbc,
      },
      {
        content: 'High rate causes people to borrow less and spend less.',
      },
      {
        content:
          'High rate causes people has to pay more interests, which decreases their purchasing power.',
      },
    ],
    counterArguments: [
      {
        content:
          'Current interest is really low, so increase a little will not hurt',
      },
    ],
    solutions: [
      { content: 'Trim stock that does not have income.' },
      { content: 'Sell stock that has high valuation.' },
    ],
    startTime: new Date('2022-01-01'),
    endTime: new Date('2022-12-31'),
  },

  {
    name: 'COVID',
    arguments: [
      {
        content: '',
      },
    ],
    counterArguments: [
      {
        content:
          'Current interest is really low, so increase a little will not hurt',
      },
    ],
    solutions: [
      { content: 'Trim stock that does not have income.' },
      { content: 'Sell stock that has high valuation.' },
    ],
    startTime: new Date('2022-01-01'),
    endTime: new Date('2022-12-31'),
  },

  {
    name: 'Worker Shortage',
    arguments: [
      {
        content: '',
      },
    ],
    counterArguments: [
      {
        content:
          'Current interest is really low, so increase a little will not hurt',
      },
    ],
    solutions: [
      { content: 'Trim stock that does not have income.' },
      { content: 'Sell stock that has high valuation.' },
    ],
    startTime: new Date('2022-01-01'),
    endTime: new Date('2022-12-31'),
  },

  {
    name: 'Geopolitcal Risk',
    arguments: [
      {
        content: '',
      },
    ],
    counterArguments: [
      {
        content:
          'Current interest is really low, so increase a little will not hurt',
      },
    ],
    solutions: [
      { content: 'Trim stock that does not have income.' },
      { content: 'Sell stock that has high valuation.' },
    ],
    startTime: new Date('2022-01-01'),
    endTime: new Date('2022-12-31'),
  },
];
