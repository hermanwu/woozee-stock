import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const empty: StockAnalysis = {
  logo: '',
  name: { English: null },
  description: [],
  ticker: null,

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
        marketCap: 1 * 1e9,
        totalRevenue: 1 * 1e6,
        operatingIncome: 1 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1 * 1e6,
        operatingIncome: 1 * 1e6,
      },
    },
  },
};
