import { StockAnalysis } from '../models/stock-analysis.model';

export const lrcx: StockAnalysis = {
  logo: '',
  name: { English: 'Lam Research Corporation' },
  description: [],
  ticker: 'LRCX',

  // Earnings Report:
  earnings: {
    website: 'https://investor.lamresearch.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.lamresearch.com/static-files/f4a15872-031a-4c63-8777-1859cf0445a9',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 80.14 * 1e9,
        revenue: 14626 * 1e6,
        operatingIncome: 4370.804 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 10044 * 1e6,
        operatingIncome: 2574.978 * 1e6,
      },
    },
  },
};
