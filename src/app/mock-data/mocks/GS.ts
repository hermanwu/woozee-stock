import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const gs: StockAnalysis = {
  marketCap: 109.83 * BILLION,
  logo: '',
  name: 'The Goldman Sachs Group Inc.',
  description: [],
  ticker: 'gs',
  displayName: 'Goldman Sachs',
  irAddress: 'https://www.goldmansachs.com/investor-relations/',
  uuid: 'gs',
  logoLink: 'https://i.ibb.co/Kbp830y/a-Vc-RRQWG-400x400.jpg',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 13854.0 * MILLION,
      operatingIncome: 5025.0 * MILLION,
      sellingGeneralAndAdministrative: 4634.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 15161.0 * MILLION,
      operatingIncome: 6842.0 * MILLION,
      sellingGeneralAndAdministrative: 4401.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 16698.0 * MILLION,
      operatingIncome: 6840.0 * MILLION,
      sellingGeneralAndAdministrative: 6334.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 19276.0 * MILLION,
      operatingIncome: 8337.0 * MILLION,
      sellingGeneralAndAdministrative: 7105.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 13304.0 * MILLION,
      operatingIncome: 5541.0 * MILLION,
      sellingGeneralAndAdministrative: 3513.0 * MILLION,
    },
  ],
};
