import { StockAnalysis } from '../models/stock-analysis.model';

export const GS: StockAnalysis = {
  logo: '',
  name: { English: 'The Goldman Sachs Group, Inc.' },
  description: [],
  ticker: 'GS',

  // Earnings Report:
  earnings: {
    website: 'https://www.goldmansachs.com/investor-relations/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://www.goldmansachs.com/investor-relations/financials/10q/2021/second-quarter-2021-10-q.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 138.32 * 1e9,
        revenue: 13759 * 1e6,
        operatingIncome: 6840 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 12351 * 1e6,
        operatingIncome: 1291 * 1e6,
      },
    },
  },
};
