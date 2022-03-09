import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const dkng: StockAnalysis = {
  marketCap: 14.62 * BILLION,
  logo: '',
  name: 'DRAFTKINGS INC',
  description: [],
  ticker: 'dkng',
  shortName: 'DraftKings',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 473.32 * MILLION,
      operatingIncome: -368.76 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 212.82 * MILLION,
      operatingIncome: -546.52 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 297.61 * MILLION,
      operatingIncome: -321.55 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 312.28 * MILLION,
      operatingIncome: -324.79 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 322.22 * MILLION,
      operatingIncome: -268.34 * MILLION,
    },
  ],
};
