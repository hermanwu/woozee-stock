import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const RDFN: StockAnalysis = {
  logo: '',
  name: { English: 'Redfin' },
  description: [],
  ticker: 'RDFN',
  marketCap: 5.28 * 1e9,
  myRating: Rating.Bullish,

  // Earnings Report:
  earnings: {
    website: 'https://investors.redfin.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.redfin.com/static-files/cb2ec57b-cff8-4ed9-8eac-48a9b3a8961c',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 5.28 * 1e9,
        totalRevenue: 471.315 * 1e6,
        operatingIncome: -30.317 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 213.665 * 1e6,
        operatingIncome: -4.426 * 1e6,
      },
    },
  },
};
