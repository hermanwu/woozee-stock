import { StockAnalysis } from '../models/stock-analysis.model';

export const SOFI: StockAnalysis = {
  logo: '',
  name: { English: 'SoFi' },
  description: [],
  ticker: 'SOFI',

  // Earnings Report:
  earnings: {
    website: 'https://investors.sofi.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001818874/1dcc94cc-37c2-4e6a-b885-96ee37575a6e.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 11.62 * 1e9,
        revenue: 231274 * 1e3,
        operatingIncome: -165392 * 1e3,
        date: new Date('2021-08-06'),
      },
    },
    2020: {
      2: {
        revenue: 114952 * 1e3,
        operatingIncome: -91960 * 1e3,
      },
    },
  },
};
