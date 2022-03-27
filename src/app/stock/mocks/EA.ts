import { StockAnalysis } from '../models/stock-analysis.model';

export const EA: StockAnalysis = {
  logo: '',
  name: { English: 'ELECTRONIC ARTS INC.' },
  description: [],
  ticker: 'EA',

  // Earnings Report:
  earnings: {
    website: 'https://ir.ea.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://s22.q4cdn.com/894350492/files/doc_financials/2022/q1/6fdb9eb8-91e1-4bd9-97c0-a6ff07c66bd8.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 41.3 * 1e9,
        totalRevenue: 1551 * 1e6,
        operatingIncome: 322 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1459 * 1e6,
        operatingIncome: 471 * 1e6,
      },
    },
  },
};
