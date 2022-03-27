import { StockAnalysis } from '../models/stock-analysis.model';

export const jnj: StockAnalysis = {
  logo: '',
  name: { English: 'Johnson & Johnson' },
  description: [],
  ticker: 'JNJ',

  // Earnings Report:
  earnings: {
    website: 'https://www.investor.jnj.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://johnsonandjohnson.gcs-web.com/static-files/df3c7e07-e815-4c6d-843e-ff06c72b41e5',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 433.7 * 1e9,
        totalRevenue: 23312 * 1e6,
        operatingIncome: 6278 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 18336 * 1e6,
        operatingIncome: 3626 * 1e6,
      },
    },
  },
};
