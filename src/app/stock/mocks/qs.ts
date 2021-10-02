import { StockAnalysis } from '../models/stock-analysis.model';

export const qs: StockAnalysis = {
  logo: '',
  name: { English: 'Quantumscape Corp' },
  description: [],
  ticker: 'QS',

  // Earnings Report:
  earnings: {
    website: 'https://ir.quantumscape.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001811414/7fc4c591-7cb2-4c55-b7ea-06cd88286b17.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 10.16 * 1e9,
        revenue: 0 * 1e6,
        operatingIncome: -49.622 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 0 * 1e6,
        operatingIncome: -14.227 * 1e6,
      },
    },
  },
};
