import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const gs: StockAnalysis = {
  marketCap: 109.83 * BILLION,
  logo: '',
  name: 'The Goldman Sachs Group, Inc.',
  description: [],
  ticker: 'gs',
  shortName: 'Goldman Sachs',
  irAddress: 'https://www.goldmansachs.com/investor-relations/',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 13854.0 * MILLION,
      operatingIncome: 5025.0 * MILLION,
      sellingGeneralAdministrative: 4634.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 15161.0 * MILLION,
      operatingIncome: 6842.0 * MILLION,
      sellingGeneralAdministrative: 4401.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 16698.0 * MILLION,
      operatingIncome: 6840.0 * MILLION,
      sellingGeneralAdministrative: 6334.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 19276.0 * MILLION,
      operatingIncome: 8337.0 * MILLION,
      sellingGeneralAdministrative: 7105.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 13304.0 * MILLION,
      operatingIncome: 5541.0 * MILLION,
      sellingGeneralAdministrative: 3513.0 * MILLION,
    },
  ],
};
