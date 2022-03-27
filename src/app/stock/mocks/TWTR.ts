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
      totalRevenue: 1567.22 * MILLION,
      operatingIncome: 191.18 * MILLION,
      sellingGeneralAndAdministrative: 512.87 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1283.82 * MILLION,
      operatingIncome: -717.65 * MILLION,
      sellingGeneralAndAdministrative: 451.93 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1190.43 * MILLION,
      operatingIncome: 82.15 * MILLION,
      sellingGeneralAndAdministrative: 443.38 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1036.02 * MILLION,
      operatingIncome: 52.18 * MILLION,
      sellingGeneralAndAdministrative: 352.12 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 1289.04 * MILLION,
      operatingIncome: 251.92 * MILLION,
      sellingGeneralAndAdministrative: 356.25 * MILLION,
    },
  ],
};
