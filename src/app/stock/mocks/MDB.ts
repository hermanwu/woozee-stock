import { StockAnalysis } from '../models/stock-analysis.model';

export const mdb: StockAnalysis = {
  logo: '',
  name: { English: 'Mongodb Inc' },
  description: [],
  ticker: 'MDB',

  // Earnings Report:
  earnings: {
    website: 'https://investors.mongodb.com/corporate-profile/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001441816/01f4de89-fbb5-4313-8c9d-a61af15139ec.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 31.4 * 1e9,
        revenue: 590.38 * 1e6,
        operatingIncome: -209.304 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 421.72 * 1e6,
        operatingIncome: -147.866 * 1e6,
      },
    },
  },
};
