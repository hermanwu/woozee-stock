import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const se: StockAnalysis = {
  marketCap: 57.65 * BILLION,
  logo: '',
  name: 'Sea Limited',
  description: [],
  ticker: 'se',
  irAddress: 'https://www.sea.com/investor',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 3222.11 * MILLION,
      operatingIncome: 631.77 * MILLION,
      sellingGeneraAdministrative: 1190.5 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 2688.88 * MILLION,
      operatingIncome: 1755.25 * MILLION,
      sellingGeneraAdministrative: 957.74 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 2280.55 * MILLION,
      operatingIncome: 1847.63 * MILLION,
      sellingGeneraAdministrative: 938.82 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 1763.64 * MILLION,
      operatingIncome: 1959.86 * MILLION,
      sellingGeneraAdministrative: 809.71 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 1566.55 * MILLION,
      operatingIncome: 954.24 * MILLION,
      sellingGeneraAdministrative: 1038.1 * MILLION,
    },
  ],
};
