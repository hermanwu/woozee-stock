import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const AFRM: StockAnalysis = {
  logo: '',
  name: { English: 'Affirm' },
  description: [],
  ticker: 'AFRM',
  myRating: Rating.Hold,

  // Earnings Report:
  earnings: {
    website: 'https://investors.affirm.com/',
    latestReportQuarter: ['2021', '4'],
    2021: {
      4: {
        marketCap: 30 * 1e9,
        revenue: 261780 * 1e3,
        operatingIncome: -124690 * 1e3,
        date: '09-09-2021',
      },
      3: {
        '10q10k':
          'https://investors.affirm.com/static-files/4210c60b-e256-4d7b-808d-ea90329e657a',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 24.824 * 1e9,
        revenue: 230665 * 1e3,
        operatingIncome: -169456 * 1e3,
        date: '05-17-2021',
      },
    },
    2020: {
      4: {
        revenue: 153332 * 1e3,
        operatingIncome: 39320 * 1e3,
      },
      3: {
        revenue: 138273 * 1e3,
        operatingIncome: -81505 * 1e3,
      },
    },
  },
};
