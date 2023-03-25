import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const isrg: StockAnalysis = {
  marketCap: 95 * BILLION,
  logo: '',
  name: 'Intuitive Surgical, Inc',
  displayName: 'Intuitive Surgical',
  description: [],
  ticker: 'isrg',
  irAddress: 'https://isrg.intuitive.com/',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1550.7 * MILLION,
      operatingIncome: 450.4 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1403.3 * MILLION,
      operatingIncome: 442.6 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1464.0 * MILLION,
      operatingIncome: 511.2 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1292.1 * MILLION,
      operatingIncome: 416.8 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 1329.1 * MILLION,
      operatingIncome: 415.8 * MILLION,
    },
  ],
};
