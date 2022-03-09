import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ftnt: StockAnalysis = {
  logo: '',
  name: 'Fortinet',
  description: [],
  ticker: 'ftnt',
  marketCap: 44.64 * BILLION,

  competitors: [],

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 963.6 * MILLION,
      operatingIncome: 214.9 * MILLION,
      sellingGeneraAdministrative: 409.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 867.2 * MILLION,
      operatingIncome: 166.4 * MILLION,
      sellingGeneraAdministrative: 382.9 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 801.1 * MILLION,
      operatingIncome: 147.5 * MILLION,
      sellingGeneraAdministrative: 361.3 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 710.3 * MILLION,
      operatingIncome: 121.6 * MILLION,
      sellingGeneraAdministrative: 336.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 748.0 * MILLION,
      operatingIncome: 169.4 * MILLION,
      sellingGeneraAdministrative: 323.8 * MILLION,
    },
  ],
};
