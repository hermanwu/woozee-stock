import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const twtr: StockAnalysis = {
  marketCap: 26.71 * BILLION,
  logo: '',
  name: 'Twitter, Inc.',
  description: [],
  ticker: 'twtr',
  shortName: 'Twitter',
  irAddress: 'https://investor.twitterinc.com/home/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 1567.22 * MILLION,
      operatingIncome: 191.18 * MILLION,
      sellingGeneralAdministrative: 512.87 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1283.82 * MILLION,
      operatingIncome: -717.65 * MILLION,
      sellingGeneralAdministrative: 451.93 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 1190.43 * MILLION,
      operatingIncome: 82.15 * MILLION,
      sellingGeneralAdministrative: 443.38 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 1036.02 * MILLION,
      operatingIncome: 52.18 * MILLION,
      sellingGeneralAdministrative: 352.12 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 1289.04 * MILLION,
      operatingIncome: 251.92 * MILLION,
      sellingGeneralAdministrative: 356.25 * MILLION,
    },
  ],
};
