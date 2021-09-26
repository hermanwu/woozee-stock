import { StockAnalysis } from '../models/stock-analysis.model';

export const tost: StockAnalysis = {
  logo: '',
  name: { English: 'Toast Inc' },
  description: [],
  ticker: 'TOST',

  // Earnings Report:
  earnings: {
    website: null,
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 27.85 * 1e9,
        revenue: 1 * 1e6,
        operatingIncome: 1 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 1 * 1e6,
        operatingIncome: 1 * 1e6,
      },
    },
  },
};