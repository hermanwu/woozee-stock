import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const intc: StockAnalysis = {
  logo: '',
  name: { English: 'Intel' },
  description: [],
  ticker: 'INTC',
  myRating: Rating.Buy,

  // Earnings Report:
  earnings: {
    website: 'https://www.investors.intuit.com',
    latestReportQuarter: ['2021', '1'],
  },

  risks: [
    {
      name: 'slow revenue growth',
    },
  ],
};
