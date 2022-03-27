import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const twlo: StockAnalysis = {
  marketCap: 25.1 * BILLION,

  predications: [
    {
      price: 100,
      start: new Date('2022-3-7'),
      days: 60,
    },
  ],

  logo: '',
  name: 'Twilio',
  description: [],
  ticker: 'twlo',
  irAddress: 'https://investors.twilio.com/overview/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 860 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 842.74 * MILLION,
      operatingIncome: -283.63 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 740.18 * MILLION,
      operatingIncome: -232.34 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 668.93 * MILLION,
      operatingIncome: -202.27 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 589.99 * MILLION,
      operatingIncome: -197.34 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 548.09 * MILLION,
      operatingIncome: -185.29 * MILLION,
    },
  ],
};
