import { StockAnalysis } from '../models/stock-analysis.model';

export const API: StockAnalysis = {
  logo: '',
  name: { English: 'Agora, Inc.' },
  description: [],
  ticker: 'API',

  // Earnings Report:
  earnings: {
    website: 'https://investor.agora.io/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://investor.agora.io/static-files/72c11c9f-cefd-42d0-ae0d-9c01707c12f5',
        webcast: null,
        marketCap: 3.62 * 1e9,
        revenue: 42.333 * 1e6,
        operatingIncome: -19.082 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 33.904 * 1e6,
        operatingIncome: 3.069 * 1e6,
      },
    },
  },
};
