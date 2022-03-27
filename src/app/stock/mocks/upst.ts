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
  earnings: {
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 23.23 * 1e9,
        totalRevenue: 193.946 * 1e6,
        operatingIncome: 36.294 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 17.353 * 1e6,
        operatingIncome: -11.388 * 1e6,
      },
    },
  },
};
