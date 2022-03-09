import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const dash: StockAnalysis = {
  marketCap: 31 * BILLION,
  logo: '',
  name: 'Doordash',
  description: [],
  ticker: 'dash',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 1300.0 * MILLION,
      operatingIncome: -195.36 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1275.0 * MILLION,
      operatingIncome: -154.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 1236.0 * MILLION,
      operatingIncome: -99.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 1077.0 * MILLION,
      operatingIncome: -99.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 970.0 * MILLION,
      operatingIncome: -305.0 * MILLION,
    },
  ],
};
