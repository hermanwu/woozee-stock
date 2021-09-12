import { StockAnalysis } from '../models/stock-analysis.model';

export const CHWY: StockAnalysis = {
  logo: '',
  name: { English: 'CHEWY, INC.' },
  description: [],
  ticker: 'CHWY',

  // Earnings Report:
  earnings: {
    website: 'https://investor.chewy.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001766502%20/77c30637-7b22-4a30-9ba1-c2e0c061ab1d.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 31.33 * 1e9,
        revenue: 2155.036 * 1e6,
        operatingIncome: -16.186 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 1699.859 * 1e6,
        operatingIncome: -32.271 * 1e6,
      },
    },
  },
};
