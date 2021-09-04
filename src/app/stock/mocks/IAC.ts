import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const IAC: StockAnalysis = {
  logo: '',
  name: { English: 'IAC/INTERACTIVECORP' },
  description: [],
  ticker: 'IAC',
  myRating: Rating.Buy,

  // Earnings Report:
  earnings: {
    website: 'https://ir.iac.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.iac.com/static-files/acb86483-2c55-4874-b171-8a04d5d5d7a7',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 11.65 * 1e9,
        revenue: 829.547 * 1e6,
        operatingIncome: -28.42 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 659.027 * 1e6,
        operatingIncome: -97.445 * 1e6,
      },
    },
  },
};
