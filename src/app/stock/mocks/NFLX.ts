import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const nflx: StockAnalysis = {
  marketCap: 154.39 * BILLION,
  logo: '',
  name: 'Netflix',
  description: [],
  ticker: 'NFLX',
  shortName: 'Netflix',
  irAddress: 'https://ir.netflix.net/ir-overview/profile/default.aspx',
  competitors: ['dis'],
  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 7709.32 * MILLION,
      operatingIncome: 631.77 * MILLION,
      sellingGeneraAdministrative: 1190.5 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 7483.47 * MILLION,
      operatingIncome: 1755.25 * MILLION,
      sellingGeneraAdministrative: 957.74 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 7341.78 * MILLION,
      operatingIncome: 1847.63 * MILLION,
      sellingGeneraAdministrative: 938.82 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 7163.28 * MILLION,
      operatingIncome: 1959.86 * MILLION,
      sellingGeneraAdministrative: 809.71 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 6644.44 * MILLION,
      operatingIncome: 954.24 * MILLION,
      sellingGeneraAdministrative: 1038.1 * MILLION,
    },
  ],

  risks: [
    {
      name: 'slow revenue growth',
    },
    {
      name: 'slow paid user growth',
    },
    {
      name: 'margin decrease',
    },
  ],
};
