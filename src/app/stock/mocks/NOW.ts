import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const now: StockAnalysis = {
  marketCap: 104 * BILLION,
  logo: '',
  name: 'ServiceNow',
  description: [],
  ticker: 'now',

  // Earnings Report:

  risks: [
    {
      name: 'PE is high (482)',
    },
  ],

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1614.0 * MILLION,
      operatingIncome: 35.0 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1512 * MILLION,
      operatingIncome: 74.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1409.0 * MILLION,
      operatingIncome: 51.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1360.0 * MILLION,
      operatingIncome: 97.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 1250.33 * MILLION,
      operatingIncome: 12.97 * MILLION,
    },
  ],
  business: {
    markets: [MarketType.saas],
  },
};
