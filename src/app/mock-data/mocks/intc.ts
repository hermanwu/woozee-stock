import { OpinionEnum } from '../../stock/models/opinion-type.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const intc: StockAnalysis = {
  logo: '',
  name: { English: 'Intel' },
  description: [],
  displayName: 'Intel',
  ticker: 'intc',
  uuid: 'intc',
  myRating: OpinionEnum.Bullish,

  // Earnings Report:
  earnings: {
    website: 'https://www.investors.intuit.com',
    latestReportQuarter: ['2021', '1'],
  },
  logoLink: 'https://i.ibb.co/Lr2Sqmw/7d-Pe-X1g-K-400x400.png',
};
