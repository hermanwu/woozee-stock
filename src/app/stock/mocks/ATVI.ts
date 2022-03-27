import { StockAnalysis } from '../models/stock-analysis.model';

export const ATVI: StockAnalysis = {
  logo: '',
  name: { English: 'ACTIVISION BLIZZARD, INC.' },
  description: [],
  ticker: 'ATVI',

  // Earnings Report:
  earnings: {
    website: 'https://investor.activision.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.activision.com/static-files/b4b48cc7-cab4-43cb-9327-661f0d0b2d8b',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 61.98 * 1e9,
        totalRevenue: 2296 * 1e6,
        operatingIncome: 959 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1932 * 1e6,
        operatingIncome: 749 * 1e6,
      },
    },
  },
};
