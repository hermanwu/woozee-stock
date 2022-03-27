import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const net: StockAnalysis = {
  marketCap: 33.7 * BILLION,

  predications: [
    {
      price: 30,
      days: 60,
      start: new Date('2022-3-7'),
    },
  ],
  logo: '',
  name: 'Cloudflare, Inc.',
  description: [],
  ticker: 'net',
  irAddress: 'https://www.cloudflare.net/home/default.aspx',
  shortName: 'Cloudflare',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 193.6 * MILLION,
      operatingIncome: -41.06 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 172.35 * MILLION,
      operatingIncome: -98.73 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 152.43 * MILLION,
      operatingIncome: -28.87 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 138.06 * MILLION,
      operatingIncome: -31.25 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 125.93 * MILLION,
      operatingIncome: -24.74 * MILLION,
    },
  ],
};
