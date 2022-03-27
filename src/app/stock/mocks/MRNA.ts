import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const mrna: StockAnalysis = {
  marketCap: 52 * BILLION,
  logo: '',
  name: 'Moderna, Inc.',
  description: [],
  ticker: 'mrna',
  shortName: 'Moderna',
  irAddress: 'https://investors.modernatx.com/',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 7211.0 * MILLION,
      operatingIncome: 5410.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 4969.0 * MILLION,
      operatingIncome: 3558.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 4354.0 * MILLION,
      operatingIncome: 3062.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1937.0 * MILLION,
      operatingIncome: 1266.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 570.75 * MILLION,
      operatingIncome: -275.04 * MILLION,
    },
  ],
};
