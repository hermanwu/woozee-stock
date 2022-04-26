import { Risk } from 'src/app/risks/models/risk.model';

export const portfolioRisks: Risk[] = [
  {
    uuid: 'r1000',
    content: 'Too many puts without covered cash',
    notes: [
      {
        content: 'Only sell one put at a time.',
      },
      {
        content: 'ITM call could be rolled with 10% loss',
      },
    ],
  },
  {
    uuid: 'r2000',
    content: 'Sold put are deep in the money',
    notes: [
      {
        content: 'Only sell puts of stock that does not have risks',
      },
    ],
  },
  {
    content: 'Own out of the money call when a stock might get acquired',
  },
];
