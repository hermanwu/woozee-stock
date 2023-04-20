import { OpinionEnum } from '../../stock/models/opinion-type.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const ADSK: StockAnalysis = {
  logo: '',
  name: { English: 'AUTODESK, INC.' },
  description: [],
  ticker: 'ADSK',
  myRating: OpinionEnum.Neutral,

  // Earnings Report:
  earnings: {
    website: 'https://investors.autodesk.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.autodesk.com/static-files/2297909d-41df-49ec-958a-2d78930fa7a2',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 63.25 * 1e9,
        totalRevenue: 1059.7 * 1e6,
        operatingIncome: 148.1 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 913.1 * 1e6,
        operatingIncome: 146.1 * 1e6,
      },
    },
  },
};
