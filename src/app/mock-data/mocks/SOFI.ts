import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const sofi: StockAnalysis = {
  logo: '',
  name: 'SoFi',
  description: [],
  ticker: 'sofi',
  displayName: 'SoFi',

  // Earnings Report:
  earnings: {
    website: 'https://investors.sofi.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001818874/1dcc94cc-37c2-4e6a-b885-96ee37575a6e.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 11.62 * 1e9,
        totalRevenue: 231274 * 1e3,
        operatingIncome: -165392 * 1e3,
        createdDate: new Date('2021-08-06'),
      },
    },
    2020: {
      2: {
        totalRevenue: 114952 * 1e3,
        operatingIncome: -91960 * 1e3,
      },
    },
  },
};
