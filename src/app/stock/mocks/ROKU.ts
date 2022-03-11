import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const roku: StockAnalysis = {
  marketCap: 16.74 * BILLION,
  logo: '',
  name: 'roku, INC.',
  description: [],
  ticker: 'roku',
  shortName: 'Roku',
  irAddress: 'https://www.roku.com/investor',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 865.33 * MILLION,
      operatingIncome: 21.36 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 679.95 * MILLION,
      operatingIncome: 68.85 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 645.12 * MILLION,
      operatingIncome: 69.08 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 574.18 * MILLION,
      operatingIncome: 75.81 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 649.89 * MILLION,
      operatingIncome: 65.15 * MILLION,
    },
  ],
};
