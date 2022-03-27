import { StockAnalysis } from '../models/stock-analysis.model';

export const AXP: StockAnalysis = {
  logo: '',
  name: { English: 'American Express Company' },
  description: [],
  ticker: 'AXP',
  irAddress: 'https://ir.americanexpress.com/investor-relations/default.aspx',

  // Earnings Report:
  earnings: {
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://s26.q4cdn.com/747928648/files/doc_financials/2021/q2/3f1cda3a-bca0-4b81-8bb1-d8313b0a8dc3.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 124.2 * 1e9,
        totalRevenue: 10243 * 1e6,
        operatingIncome: 2940 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 7675 * 1e6,
        operatingIncome: 622 * 1e6,
      },
    },
  },
  risks: [
    {
      name: 'Relatively high RSI',
    },
  ],
};
