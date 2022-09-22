import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const bynd: StockAnalysis = {
  marketCap: 2.89 * BILLION,
  logo: '',
  name: 'Beyond Meat, Inc.',
  description: [],
  ticker: 'bynd',
  shortName: 'Beyond Meat',
  irAddress: 'https://investors.beyondmeat.com/',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 100.68 * MILLION,
      operatingIncome: -77.69 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 106.43 * MILLION,
      operatingIncome: -54.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 149.43 * MILLION,
      operatingIncome: -18.6 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 108.16 * MILLION,
      operatingIncome: -25.64 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 101.94 * MILLION,
      operatingIncome: -24.53 * MILLION,
    },
  ],
};
