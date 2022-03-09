import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const intu: StockAnalysis = {
  marketCap: 133.69 * BILLION,
  logo: '',
  name: 'Intuit',
  description: [],
  ticker: 'intu',
  shortName: 'Intuit',
  irAddress: 'https://www.investors.intuit.com',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 2673.0 * MILLION,
      operatingIncome: 56.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 2007.0 * MILLION,
      operatingIncome: 195.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 2561.0 * MILLION,
      operatingIncome: 402.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 4173.0 * MILLION,
      operatingIncome: 1914.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 1576 * MILLION,
      operatingIncome: -25 * MILLION,
    },
  ],
};
