import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const u: StockAnalysis = {
  marketCap: 26.18 * BILLION,
  logo: '',
  name: 'Unity',
  ticker: 'u',
  ceoQuote: [],
  advantage: [],
  shortName: 'Unity',
  irAddress: 'https://investors.unity.com/overview/default.aspx',
  competitors: ['mdb', 'rblx'],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 315.86 * MILLION,
      operatingIncome: -144.83 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 286.33 * MILLION,
      operatingIncome: -126.75 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 273.56 * MILLION,
      operatingIncome: -149.18 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 234.77 * MILLION,
      operatingIncome: -110.9 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 220.34 * MILLION,
      operatingIncome: -80.85 * MILLION,
    },
  ],
};
