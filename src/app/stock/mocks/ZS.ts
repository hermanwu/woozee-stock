import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ZS: StockAnalysis = {
  logo: '',
  name: { English: 'Zscaler' },
  description: [],
  ticker: 'ZS',
  myRating: Rating.Hold,

  // Earnings Report:
  earnings: {
    website: 'https://ir.zscaler.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        press:
          'https://ir.zscaler.com/static-files/a2010b38-31e9-47bc-960b-d9b712d061e5',

        marketCap: 38.39 * 1e9,
        totalRevenue: 197074 * 1e3,
        operatingIncome: -67397 * 1e3,
      },
      1: {
        '10q10k':
          'https://ir.zscaler.com/static-files/787a652d-599b-4b2f-a010-ffd90234f0d3',
        presentation: '',
        webcast: '',
        marketCap: 35.81 * 1e9,
        totalRevenue: 176404 * 1e3,
        operatingIncome: -43850 * 1e3,
      },
    },
    2020: {
      2: {
        totalRevenue: 125887 * 1e3,
        operatingIncome: -44887 * 1e3,
      },
      1: {
        totalRevenue: 110524 * 1e3,
        operatingIncome: -20514 * 1e3,
      },
    },
  },
};
