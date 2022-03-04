import { StockAnalysis } from '../models/stock-analysis.model';

export const twlo: StockAnalysis = {
  logo: '',
  name: 'Twilio',
  description: [],
  ticker: 'twlo',
  irAddress: 'https://investors.twilio.com/overview/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 2,
      revenue: 668931 * 1e3,
      operatingIncome: -202274 * 1e3,
    },
    {
      year: 2022,
      quarter: 2,
      revenue: 400849 * 1e3,
      operatingIncome: -102644 * 1e3,
    },
  ],
};
