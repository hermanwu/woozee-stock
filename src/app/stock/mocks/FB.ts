import { StockAnalysis } from '../models/stock-analysis.model';

export const FB: StockAnalysis = {
  logo: '',
  name: { English: 'Facebook' },
  description: [],
  ticker: 'FB',
  lastUpdated: new Date('2021-08-23'),

  // Earnings Report:
  earnings: {
    website: 'https://investor.fb.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001326801/dcf20641-cba6-4b5c-b60e-4b40b52811a4.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 1.02 * 1e12,
        revenue: 29077 * 1e6,
        operatingIncome: 12367 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 18687 * 1e6,
        operatingIncome: 5963 * 1e6,
      },
    },
  },
};
