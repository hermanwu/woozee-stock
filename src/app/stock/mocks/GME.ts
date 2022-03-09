import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const gme: StockAnalysis = {
  marketCap: 9.04 * BILLION,
  logo: '',
  name: 'GameStop Corp.',
  description: [],
  ticker: 'gme',
  shortName: 'GameStop',
  irAddress: 'https://investor.gamestop.com/home',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      revenue: 1296.6 * MILLION,
      operatingIncome: -102.9 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 1183.4 * MILLION,
      operatingIncome: -58.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 1276.8 * MILLION,
      operatingIncome: -40.8 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 2122.1 * MILLION,
      operatingIncome: 18.8 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 1004.7 * MILLION,
      operatingIncome: -63.0 * MILLION,
    },
  ],
  competitors: ['amzn', 'baba'],
};
