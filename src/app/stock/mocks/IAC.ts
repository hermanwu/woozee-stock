import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const iac: StockAnalysis = {
  logo: '',
  name: 'IAC/INTERACTIVECORP',
  description: [],
  ticker: 'iac',
  shortName: 'IAC',
  irAddress: 'https://ir.iac.com/',
  marketCap: 9.62 * BILLION,

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 1159.44 * MILLION,
      operatingIncome: -66.25 * MILLION,
      sellingGeneraAdministrative: 636.82 * MILLION,
      notes: [],
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 924.07 * MILLION,
      operatingIncome: -32.07 * MILLION,
      sellingGeneraAdministrative: 531.49 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 829.55 * MILLION,
      operatingIncome: -29.53 * MILLION,
      sellingGeneraAdministrative: 515.75 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 786.57 * MILLION,
      operatingIncome: -7.23 * MILLION,
      sellingGeneraAdministrative: 475.7 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 765.04 * MILLION,
      operatingIncome: -81.1 * MILLION,
      sellingGeneraAdministrative: 477.95 * MILLION,
    },
  ],
};
