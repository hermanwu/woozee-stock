import { StockAnalysis } from '../models/stock-analysis.model';

export const PYPL: StockAnalysis = {
  logo: '',
  name: { English: 'Paypal' },
  description: [],
  ticker: 'PYPL',
  lastUpdated: new Date('2021-08-22'),

  // Earnings Report:
  earnings: {
    website: 'https://investor.pypl.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001633917/305aa206-319d-4543-af10-0359a0b491c8.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 317.94 * 1e9,
        revenue: 6238 * 1e6,
        operatingIncome: 1127 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 5261 * 1e6,
        operatingIncome: 951 * 1e6,
      },
    },
  },
};
