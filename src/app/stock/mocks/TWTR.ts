import { StockAnalysis } from '../models/stock-analysis.model';

export const TWTR: StockAnalysis = {
  logo: '',
  name: { English: 'Twitter, Inc.' },
  description: [],
  ticker: 'TWTR',

  // Earnings Report:
  earnings: {
    website: 'https://investor.twitterinc.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001418091/a5875e90-7427-43dd-b0b4-eca71642f595.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 51.6 * 1e9,
        revenue: 1190.427 * 1e6,
        operatingIncome: 30.252 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 683.438 * 1e6,
        operatingIncome: -273.93 * 1e6,
      },
    },
  },
};
