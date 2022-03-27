import { StockAnalysis } from '../models/stock-analysis.model';

export const SKLZ: StockAnalysis = {
  logo: '',
  name: { English: 'SKILLZ INC.' },
  description: [],
  ticker: 'SKLZ',

  // Earnings Report:
  earnings: {
    website: 'https://investors.skillz.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001801661/b205aa9d-db8c-4e32-b9df-3534a6200170.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 4.7 * 1e9,
        totalRevenue: 89.491 * 1e6,
        operatingIncome: -49.99 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 58.878 * 1e6,
        operatingIncome: -12.588 * 1e6,
      },
    },
  },
};
