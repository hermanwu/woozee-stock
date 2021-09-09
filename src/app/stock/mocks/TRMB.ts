import { StockAnalysis } from '../models/stock-analysis.model';

export const TRMB: StockAnalysis = {
  logo: '',
  name: { English: 'TRIMBLE INC.' },
  description: [],
  ticker: 'TRMB',

  // Earnings Report:
  earnings: {
    website: 'https://investor.trimble.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.trimble.com/static-files/d6ce5488-6625-4614-bb57-eb8d3218fc28',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 23.87 * 1e9,
        revenue: 945.2 * 1e6,
        operatingIncome: 144.8 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 733.6 * 1e6,
        operatingIncome: 97.6 * 1e6,
      },
    },
  },
};
