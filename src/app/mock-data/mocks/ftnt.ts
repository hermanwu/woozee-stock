import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const ftnt: StockAnalysis = {
  logo: '',
  name: 'Fortinet',
  description: [],
  ticker: 'ftnt',
  marketCap: 44.64 * BILLION,

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 963.6 * MILLION,
      operatingIncome: 214.9 * MILLION,
      sellingGeneralAndAdministrative: 409.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 867.2 * MILLION,
      operatingIncome: 166.4 * MILLION,
      sellingGeneralAndAdministrative: 382.9 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 801.1 * MILLION,
      operatingIncome: 147.5 * MILLION,
      sellingGeneralAndAdministrative: 361.3 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 710.3 * MILLION,
      operatingIncome: 121.6 * MILLION,
      sellingGeneralAndAdministrative: 336.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 748.0 * MILLION,
      operatingIncome: 169.4 * MILLION,
      sellingGeneralAndAdministrative: 323.8 * MILLION,
    },
  ],
};
