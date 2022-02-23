import { StockAnalysis } from '../models/stock-analysis.model';

export const etsy: StockAnalysis = {
  logo: '',
  name: { English: 'etsy' },
  description: [],
  ticker: 'etsy',
  lastUpdated: new Date('2021-08-23'),
  irAddress: 'https://investors.etsy.com/home/default.aspx',
  marketCap: 16.76 * 1e9,

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      revenue: 532.43 * 1e6,
      operatingIncome: 83.74 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 528.9 * 1e6,
      operatingIncome: 89.11 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 550.65 * 1e6,
      operatingIncome: 150.64 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 617.36 * 1e6,
      operatingIncome: 161.34 * 1e6,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 451.48 * 1e6,
      operatingIncome: 101.31 * 1e6,
    },
  ],
};
