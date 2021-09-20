import { StockAnalysis } from '../models/stock-analysis.model';

export const logi: StockAnalysis = {
  logo: '',
  name: {
    English: 'Logitech International SA',
  },
  description: [],
  ticker: 'LOGI',

  // Earnings Report:
  earnings: {
    website: 'https://ir.logitech.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001032975/d1c28ef6-b9ef-4a9a-974e-f23b941b1689.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 16.39 * 1e9,
        revenue: 1312.058 * 1e6,
        operatingIncome: 203.081 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 791.894 * 1e6,
        operatingIncome: 83.427 * 1e6,
      },
    },
  },
};
