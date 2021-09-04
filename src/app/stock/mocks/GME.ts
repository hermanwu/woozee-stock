import { StockAnalysis } from '../models/stock-analysis.model';

export const GME: StockAnalysis = {
  logo: '',
  name: { English: 'GameStop Corp.' },
  description: [],
  ticker: 'GME',

  // Earnings Report:
  earnings: {
    website: 'https://investor.gamestop.com/home',
    latestReportQuarter: ['2021', '1'],
    2021: {
      1: {
        '10q10k': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 15.29 * 1e9,
        revenue: 1276.8 * 1e6,
        operatingIncome: -40.8 * 1e6,
      },
    },
    2020: {
      1: {
        revenue: 1021 * 1e6,
        operatingIncome: -108 * 1e6,
      },
    },
  },
};
