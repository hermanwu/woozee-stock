import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const PTON: StockAnalysis = {
  logo: '',
  name: { English: 'Peloton' },
  description: [],
  ticker: 'PTON',
  myRating: Rating.Sell,

  // Earnings Report:
  earnings: {
    website: 'https://investor.onepeloton.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://investor.onepeloton.com/static-files/d84f3085-8c04-45d0-b6ab-0550de50c7ad',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 31.12 * 1e9,
        revenue: 936.9 * 1e6,
        operatingIncome: -301.7 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 607.1 * 1e6,
        operatingIncome: 90 * 1e6,
      },
    },
  },
};
