import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const etsy: StockAnalysis = {
  logo: '',
  name: 'Etsy',
  description: [],
  ticker: 'etsy',
  lastUpdated: new Date('2021-08-23'),
  irAddress: 'https://investors.etsy.com/home/default.aspx',
  marketCap: 15.725 * BILLION,

  competitors: ['amzn'],

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 717.14 * 1e6,
      operatingIncome: 142.25 * 1e6,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 532.43 * 1e6,
      operatingIncome: 83.74 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 528.9 * 1e6,
      operatingIncome: 89.11 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 550.65 * 1e6,
      operatingIncome: 150.64 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 617.36 * 1e6,
      operatingIncome: 161.34 * 1e6,
    },
  ],

  business: {
    markets: [
      {
        type: MarketType.ecommerce,
      },
    ],
  },
};
