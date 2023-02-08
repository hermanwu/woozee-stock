import { Risk } from '../../risks/models/risk.model';
import { Note } from '../../shared/data/note.interface';

export const action: Note = [
  {
    content: 'sell a call',
    isQuestion: true,
    notes: [
      {
        content: 'Is it stock covered?',
        notes: [
          {
            content: 'Yes',
            notes: [
              {
                content: 'Go Head',
              },
            ],
          },
          {
            content: 'No',
            notes: [
              {
                content: 'What is the winning rate?',
                notes: [
                  {
                    content: 'Is the target price lower than target price?',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const optionRiskManagementStrategy: Risk[] = [
  {
    name: '30%+ correction might come.',
    notes: [],
    solutions: [
      {
        content: 'Use put to hedge',
      },
    ],
    actions: [
      {
        content: 'buy puts',
      },
      {
        content: 'high liquidity puts',
      },
      {
        content: '30% out of money',
      },
      {
        content: 'Expires in 2+ months ',
      },
      {
        content: 'Roll when expiration is less than 2 months ',
      },
    ],
  },
  {
    name: 'Has too much cash but no good investment opportunity',
    solutions: [
      {
        content: 'Use money wisely',
      },
    ],
    actions: [
      {
        content: 'Sell 30 days+ expiration put with secured cash. ',
      },
    ],
  },
  {
    name: 'Owned stock is not growing in a fast pace or stagering.',
    notes: [],
    solutions: [
      {
        content: 'Use leverage',
      },
    ],
    actions: [
      {
        content: 'Sell slightly in the money covered calls',
      },
    ],
  },
];
