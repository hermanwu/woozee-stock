import { OpinionEnum } from '../../stock/models/opinion-type.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const DUOL: StockAnalysis = {
  logo: '',
  displayName: 'Duolingo',
  description: [],
  ticker: 'DUOL',
  uuid: 'duol',
  logoLink: 'https://i.ibb.co/7Rf2B2c/y-EWm1-BEl-400x400.jpg',
  myRating: OpinionEnum.Bearish,

  // Earnings Report:
  earnings: {
    website: 'https://investors.duolingo.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.duolingo.com/static-files/27cffd31-ae44-4663-a49d-3ed98419ea50',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 6.1 * 1e9,
        totalRevenue: 58.803 * 1e6,
        operatingIncome: -478 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 40.011 * 1e6,
        operatingIncome: 82 * 1e6,
      },
    },
  },
};
