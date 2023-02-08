import { Rating } from '../../stock/models/rating.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const PENN: StockAnalysis = {
  logo: '',
  name: { English: 'PENN NATIONAL GAMING, INC.' },
  description: [],
  ticker: 'PENN',
  myRating: Rating.Bullish,

  // Earnings Report:
  earnings: {
    website: 'https://pennnationalgaming.gcs-web.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://pennnationalgaming.gcs-web.com/static-files/c0d81669-c1be-4eb7-8dc7-024f3bc3ce1c',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 12.39 * 1e9,
        totalRevenue: 1545.8 * 1e6,
        operatingIncome: 377.9 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 305.5 * 1e6,
        operatingIncome: -165.4 * 1e6,
      },
    },
  },
};
