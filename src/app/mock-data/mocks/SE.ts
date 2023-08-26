import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const se: StockAnalysis = {
  marketCap: 57.65 * BILLION,
  logo: '',
  name: 'Sea Limited',
  description: [],
  ticker: 'se',
  irAddress: 'https://www.sea.com/investor',
  displayName: 'Sea Limited',
  logoLink: 'https://i.ibb.co/tmwKCM6/c61-TLz-Y-400x400.jpg',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 3222.11 * MILLION,
      operatingIncome: 631.77 * MILLION,
      sellingGeneralAndAdministrative: 1190.5 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 2688.88 * MILLION,
      operatingIncome: 1755.25 * MILLION,
      sellingGeneralAndAdministrative: 957.74 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 2280.55 * MILLION,
      operatingIncome: 1847.63 * MILLION,
      sellingGeneralAndAdministrative: 938.82 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1763.64 * MILLION,
      operatingIncome: 1959.86 * MILLION,
      sellingGeneralAndAdministrative: 809.71 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 1566.55 * MILLION,
      operatingIncome: 954.24 * MILLION,
      sellingGeneralAndAdministrative: 1038.1 * MILLION,
    },
  ],
};
