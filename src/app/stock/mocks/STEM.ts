import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const STEM: StockAnalysis = {
  logo: '',
  name: { English: 'Stem' },
  description: [],
  ticker: 'STEM',
  myRating: Rating.Buy,

  // Earnings Report:
  earnings: {
    website: 'https://investors.stem.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 3.32 * 1e9,
        revenue: 19.337 * 1e6,
        operatingIncome: -23.881 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 4.379 * 1e6,
        operatingIncome: -12.01 * 1e6,
      },
    },
  },
};
