import { euroToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const asml: StockAnalysis = {
  logo: '',
  name: { English: 'ASML' },
  description: [],
  ticker: 'ASML',

  // Earnings Report:
  earnings: {
    website: 'https://www.asml.com/en/investors',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': 'https://www.asml.com/en/investors/financial-results/q2-2021',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 353.34 * 1e9,
        revenue: 4020.2 * 1e6 * euroToDollar,
        operatingIncome: 1239.0 * 1e6 * euroToDollar,
      },
    },
    2020: {
      2: {
        revenue: 3325.7 * 1e6 * euroToDollar,
        operatingIncome: 905.1 * 1e6 * euroToDollar,
      },
    },
  },
};
