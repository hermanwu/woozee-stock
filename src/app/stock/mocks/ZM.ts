import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const zm: StockAnalysis = {
  marketCap: 33 * BILLION,
  logo: '',
  name: 'Zoom Video Communications, Inc.',
  description: [],
  ticker: 'zm',
  shortName: 'Zoom Video',
  irAddress: 'https://investors.zoom.us/',

  // Earnings Report:
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 860 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      revenue: 1071.38 * MILLION,
      operatingIncome: 251.82 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1050.76 * MILLION,
      operatingIncome: 290.86 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 1021.5 * MILLION,
      operatingIncome: 294.6 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 956.24 * MILLION,
      operatingIncome: 226.31 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 882.49 * MILLION,
      operatingIncome: 256.12 * MILLION,
    },
  ],
};
