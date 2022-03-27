import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const pypl: StockAnalysis = {
  marketCap: 126 * BILLION,
  logo: '',
  name: 'Paypal',
  description: [],
  ticker: 'pypl',
  lastUpdated: new Date('2021-08-22'),

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 6918.0 * MILLION,
      grossProfit: 3084.0 * MILLION,
      operatingIncome: 1050.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 6182.0 * MILLION,
      grossProfit: 2846.0 * MILLION,
      operatingIncome: 1043.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 6238.0 * MILLION,
      grossProfit: 3024.0 * MILLION,
      operatingIncome: 1127 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 6033.0 * MILLION,
      grossProfit: 2967.0 * MILLION,
      operatingIncome: 1042.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 6116.0 * MILLION,
      grossProfit: 2913.0 * MILLION,
      operatingIncome: 963.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 5459.0 * MILLION,
      grossProfit: 2644.0 * MILLION,
      operatingIncome: 977.0 * MILLION,
    },

    {
      year: 2020,
      quarter: 2,
      totalRevenue: 5261.0 * MILLION,
      grossProfit: 2555.0 * MILLION,
      operatingIncome: 951.0 * MILLION,
    },

    {
      year: 2020,
      quarter: 1,
      totalRevenue: 4618.0 * MILLION,
      grossProfit: 1889.0 * MILLION,
      operatingIncome: 398 * MILLION,
    },
  ],
};
