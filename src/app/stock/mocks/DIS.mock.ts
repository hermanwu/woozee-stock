import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const dis: StockAnalysis = {
  marketCap: 265 * BILLION,
  name: 'Disney',
  description: [],
  trends: [],
  logo: '',
  ticker: 'dis',
  ceoQuote: [],
  advantage: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 21819 * MILLION,
      operatingIncome: 2192.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 18534.0 * MILLION,
      operatingIncome: 607.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 17022.0 * MILLION,
      operatingIncome: 1446.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 15613.0 * MILLION,
      operatingIncome: 1032.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 16249.0 * MILLION,
      operatingIncome: 146.0 * MILLION,
    },
  ],
};
