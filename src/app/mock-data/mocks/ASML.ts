import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const asml: StockAnalysis = {
  marketCap: 259.15 * BILLION,
  logo: '',
  name: 'ASML',
  description: [],
  ticker: 'asml',
  irAddress: 'https://www.asml.com/en/investors',
  predications: [
    {
      price: 400,
      start: new Date('2022-3-6'),
      days: 60,
    },
  ],

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 4985.6 * MILLION,
      operatingIncome: 2031.2 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 5241.3 * MILLION,
      operatingIncome: 1919.3 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 4020.2,
      operatingIncome: 1239.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 4363.9 * MILLION,
      operatingIncome: 1560.6 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 4254.2 * MILLION,
      operatingIncome: 1503.8 * MILLION,
    },
  ],
};
