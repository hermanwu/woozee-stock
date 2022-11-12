import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';
import { StockAnalysis } from '../models/stock-analysis.model';

export const upst: StockAnalysis = {
  logo: '',
  name: { English: 'Upstart Holdings Inc' },
  description: [
    {
      content: 'Our mission is to enable effortless credit based on true risk.',
    },
    {
      content:
        'We leverage the power of AI to more accurately quantify the true risk of a loan.',
    },
    {
      content:
        'Our AI models are provided to bank partners within a consumer-facing cloud application that streamlines the end-to-end process of originating and servicing a loan.',
    },
    {
      content:
        'Consumers can discover Upstart-powered loans in one of two ways: either via Upstart.com or through a bank-branded product on our bank partners’ own websites.',
    },
  ],
  ticker: 'UPST',
  irAddress: 'https://ir.upstart.com/',

  // Earnings Report:
  earnings: [
    {
      year: 2022,
      quarter: 3,
      date: getUtcDate(2022, 11, 8),
      links: [
        {
          name: 'Earnings Release',
          value:
            'https://ir.upstart.com/static-files/3fe3702b-410d-4696-a0eb-c8d45cedb51b',
        },
      ],
    },
  ],
};
