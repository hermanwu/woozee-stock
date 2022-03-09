import { StockAnalysis } from '../models/stock-analysis.model';

export const roku: StockAnalysis = {
  logo: '',
  name: { English: 'roku, INC.' },
  description: [],
  ticker: 'roku',

  // Earnings Report:
  earnings: {
    website: 'https://www.roku.com/investor',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 42.17 * 1e9,
        revenue: 645.119 * 1e6,
        operatingIncome: 69.084 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 356.073 * 1e6,
        operatingIncome: 42.209 * 1e6,
      },
    },
  },
};
