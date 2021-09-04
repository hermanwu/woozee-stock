import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const TDOC: StockAnalysis = {
  logo: '',
  name: { English: 'Teladoc Health' },
  description: [],
  ticker: 'TDOC',
  myRating: Rating.Buy,

  // Earnings Report:
  earnings: {
    website: 'https://ir.teladochealth.com/investors/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://s21.q4cdn.com/672268105/files/doc_financials/2021/q2/TDOC-2Q-21-10-Q.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 22.75 * 1e9,
        revenue: 503.139 * 1e6,
        operatingIncome: -78.948 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 241.03 * 1e6,
        operatingIncome: -7.179 * 1e6,
      },
    },
  },
};
