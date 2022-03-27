import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const pins: StockAnalysis = {
  marketCap: 17.14 * BILLION,
  logo: '',
  name: 'Pinterest',
  description: [],
  ticker: 'pins',
  irAddress: 'https://investor.pinterestinc.com/investor-overview/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 846.65 * MILLION,
      operatingIncome: 179.45 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 632.93 * MILLION,
      operatingIncome: 98.45 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 613.21 * MILLION,
      operatingIncome: 71.2 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 485.23 * MILLION,
      operatingIncome: -22.91 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 705.62 * MILLION,
      operatingIncome: 205.15 * MILLION,
    },
  ],
};
