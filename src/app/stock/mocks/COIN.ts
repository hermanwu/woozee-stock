import { StockAnalysis } from '../models/stock-analysis.model';

export const COIN: StockAnalysis = {
  logo: '',
  name: { English: 'Coinbase' },
  description: [],
  ticker: 'COIN',

  // Earnings Report:
  earnings: {
    website: 'https://investor.coinbase.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001679788/dcec079b-3237-4ae0-a54d-479ded972ab8.pdf',
        presentation: '',
        press:
          'https://investor.coinbase.com/news/news-details/2021/Coinbase-Releases-Second-Quarter-2021-Shareholder-Letter/',
        webcast: '',
        marketCap: 51.41 * 1e9,
        revenue: 2227962 * 1e3,
        operatingIncome: 874725 * 1e3,
        date: '06-30-2021',
      },
    },
    2020: {
      2: {
        revenue: 186382 * 1e3,
        operatingIncome: 144296 * 1e3,
      },
    },
  },
};
