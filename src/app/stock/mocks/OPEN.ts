import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const open: StockAnalysis = {
  marketCap: 5.36 * BILLION,
  logo: '',
  name: 'Opendoor',
  description: [],
  ticker: 'open',
  lastUpdated: new Date('2021-08-22'),
  irAddress: 'https://investor.opendoor.com/',
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 3821.99 * MILLION,
      operatingIncome: -102.14 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 2266.35 * MILLION,
      operatingIncome: -68.41 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 1185.39 * MILLION,
      operatingIncome: -152.75 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 747.27 * MILLION,
      operatingIncome: -244.69 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 248.76 * MILLION,
      operatingIncome: -77.26 * MILLION,
    },
  ],
};
