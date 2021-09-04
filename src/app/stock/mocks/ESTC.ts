import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ESTC: StockAnalysis = {
  logo: '',
  name: { English: 'Elastic N.V.' },
  description: [],
  ticker: 'ESTC',

  // Earnings Report:
  earnings: {
    website: 'https://ir.elastic.co/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001707753/5d1c5a3e-ce52-4e62-ae8b-86461962d989.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 15.52 * 1e9,
        revenue: 193.095 * 1e6,
        operatingIncome: -31.034 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 128.87 * 1e6,
        operatingIncome: -29.519 * 1e6,
      },
    },
  },
  myRating: Rating.Buy,
};
