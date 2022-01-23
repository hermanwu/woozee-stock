import { Source } from 'src/app/shared/data/source.enum';

export const fedRate = {
  name: 'Fed Rate',
  notes: [
    {
      content: 'facts',
      notes: [
        {
          content:
            'forecast showed 12 out of 18 FOMC members expect at least three rate raises next year.',
          source: Source.cnbc,
        },
      ],
    },
    {
      content: 'reasons',
      notes: [
        {
          content: 'Fed have to control the inflation.',
        },
      ],
    },
    {
      content: 'impacts',
      notes: [
        {
          content: 'High rate causes people to borrow less and spend less.',
        },
        {
          content:
            'High rate causes people has to pay more interests, which decreases their purchasing power.',
        },
      ],
    },
    {
      content: 'actions',
      notes: [
        { content: 'Trim stock that does not have income.' },
        { content: 'Sell stock that has high valuation.' },
      ],
    },
    {
      content: 'optimism',
      notes: [],
    },
    {
      content: 'pessimism',
      notes: [],
    },
  ],
  startTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
};
