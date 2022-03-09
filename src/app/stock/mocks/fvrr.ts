import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const fvrr: StockAnalysis = {
  marketCap: 2.71 * BILLION,
  logo: '',
  name: 'Fiverr International Ltd',
  description: [],
  ticker: 'fvrr',
  shortName: 'Fiverr',
  irAddress: 'https://investors.fiverr.com/investor-overview/default.aspx',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 79.75 * MILLION,
      operatingIncome: -13.88 * MILLION,
      sellingGeneraAdministrative: 56.59 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 74.32 * MILLION,
      operatingIncome: -9.29 * MILLION,
      sellingGeneraAdministrative: 49.88 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 75.26 * MILLION,
      operatingIncome: -8.34 * MILLION,
      sellingGeneraAdministrative: 49.03 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 68.32 * MILLION,
      operatingIncome: -13.82 * MILLION,
      sellingGeneraAdministrative: 51.71 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 55.88 * MILLION,
      operatingIncome: -3.77 * MILLION,
      sellingGeneraAdministrative: 36.39 * MILLION,
    },
  ],
};
