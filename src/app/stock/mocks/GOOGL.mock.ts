import { StockAnalysis } from '../models/stock-analysis.model';

export const GOOGL: StockAnalysis = {
  logo: '',
  name: { English: 'Google' },
  ticker: 'GOOGL',
  ceoQuote: [],
  advantage: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        revenue: 61880e6,
        marketCap: 1.93 * 1e12,
        operatingIncome: 18525e6,
      },
    },
    2020: {
      2: {
        revenue: 38297e6,
        operatingIncome: 6383e6,
      },
    },
  },
};
