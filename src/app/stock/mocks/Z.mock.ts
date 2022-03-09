import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const z: StockAnalysis = {
  marketCap: 9 * BILLION,
  logo: '',
  name: 'Zillow',
  ticker: 'z',
  ceoQuote: [],

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 3882.31 * MILLION,
      operatingIncome: -195.36 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1736.64 * MILLION,
      operatingIncome: -296.41 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 1309.98 * MILLION,
      operatingIncome: 60.79 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 1218.44 * MILLION,
      operatingIncome: 86.19 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 788.95 * MILLION,
      operatingIncome: 84.41 * MILLION,
    },
  ],
};
