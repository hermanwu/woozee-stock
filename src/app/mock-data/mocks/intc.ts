import { Rating } from '../../stock/models/rating.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const intc: StockAnalysis = {
  logo: '',
  name: { English: 'Intel' },
  description: [],
  displayName: 'Intel',
  ticker: 'INTC',
  myRating: Rating.Bullish,

  // Earnings Report:
  earnings: {
    website: 'https://www.investors.intuit.com',
    latestReportQuarter: ['2021', '1'],
  },
};
