import { MarketType } from 'src/app/facts/data/area.enum';
import { Source } from 'src/app/shared/data/source.enum';
import { FactType } from '../../models/fact-type.enum';
import { RiskLevel } from '../../models/risk-level.model';

export const fedRate = {
  name: 'Fed rate increases',
  level: RiskLevel.high,
  type: FactType.macro,
  market: MarketType.us,
  notes: [
    {
      content:
        'Latest Federal Reserve meeting showed officials were laser focused on tamping down inflation.',
      source: Source.bloomberg,
      createdDate: new Date('2022-04-06'),
      notes: [
        {
          content:
            'forecast showed 12 out of 18 FOMC members expect at least three rate raises next year.',
        },
      ],
    },
    // {
    //   content: 'reasons',
    //   notes: [
    //     {
    //       content: 'Fed have to control the inflation.',
    //     },
    //   ],
    // },
    // {
    //   content: 'impacts',
    //   notes: [
    //     {
    //       content: 'High rate causes people to borrow less and spend less.',
    //     },
    //     {
    //       content:
    //         'High rate causes people has to pay more interests, which decreases their purchasing power.',
    //     },
    //   ],
    // },
    // {
    //   content: 'actions',
    //   notes: [
    //     { content: 'Trim stock that does not have income.' },
    //     { content: 'Sell stock that has high valuation.' },
    //   ],
    // },
    // {
    //   content: 'optimism',
    //   notes: [],
    // },
    // {
    //   content: 'pessimism',
    //   notes: ['During '],
    // },
  ],
  updatedTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
};
