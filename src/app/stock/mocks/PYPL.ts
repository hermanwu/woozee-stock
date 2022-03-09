import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const pypl: StockAnalysis = {
  marketCap: 118.06 * BILLION,
  logo: '',
  name: 'Paypal',
  description: [],
  ticker: 'pypl',
  lastUpdated: new Date('2021-08-22'),

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 6918.0 * MILLION,
      operatingIncome: 1050.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 6182.0 * MILLION,
      operatingIncome: 1043.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 6238.0 * MILLION,
      operatingIncome: 1127 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 6033.0 * MILLION,
      operatingIncome: 1042.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 6116.0 * MILLION,
      operatingIncome: 963.0 * MILLION,
    },
  ],
};
