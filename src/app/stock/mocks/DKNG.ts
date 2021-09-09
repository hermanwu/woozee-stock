import { StockAnalysis } from '../models/stock-analysis.model';

export const DKNG: StockAnalysis = {
  logo: '',
  name: { English: 'DRAFTKINGS INC' },
  description: [],
  ticker: 'DKNG',

  // Earnings Report:
  earnings: {
    website: 'https://draftkings.gcs-web.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://draftkings.gcs-web.com/static-files/96044254-8d7c-4d5d-b98e-256bbdc10684',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 25.57 * 1e9,
        revenue: 297.605 * 1e6,
        operatingIncome: -321.554 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 70.931 * 1e6,
        operatingIncome: -160.444 * 1e6,
      },
    },
  },
};
