import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const uber: StockAnalysis = {
  marketCap: 59.38 * BILLION,
  logo: '',
  name: 'Uber',
  description: [],
  ticker: 'uber',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 842.74 * MILLION,
      operatingIncome: -283.63 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 740.18 * MILLION,
      operatingIncome: -232.34 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 668.93 * MILLION,
      operatingIncome: -202.27 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 589.99 * MILLION,
      operatingIncome: -197.34 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 548.09 * MILLION,
      operatingIncome: -185.29 * MILLION,
    },
  ],
};
