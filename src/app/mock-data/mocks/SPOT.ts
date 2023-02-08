import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const spot: StockAnalysis = {
  marketCap: 26 * BILLION,
  logo: '',
  name: 'Spotify Technology S.A.',
  description: [],
  ticker: 'spot',
  shortName: 'Spotify',
  irAddress: 'https://investors.spotify.com/home/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 2689.0 * MILLION,
      operatingIncome: -7.0 * MILLION,
      sellingGeneralAndAdministrative: 463.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 2501.0 * MILLION,
      operatingIncome: 75.0 * MILLION,
      sellingGeneralAndAdministrative: 385.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 2331.0 * MILLION,
      operatingIncome: 12.0 * MILLION,
      sellingGeneralAndAdministrative: 396.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 2147.0 * MILLION,
      operatingIncome: 14.0 * MILLION,
      sellingGeneralAndAdministrative: 338.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 2168.0 * MILLION,
      operatingIncome: -69.0 * MILLION,
      sellingGeneralAndAdministrative: 410.0 * MILLION,
    },
  ],
};
