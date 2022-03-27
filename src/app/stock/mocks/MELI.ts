import { StockAnalysis } from '../models/stock-analysis.model';

export const meli: StockAnalysis = {
  logo: '',
  name: { English: 'Mercadolibre Inc' },
  description: [],
  ticker: 'MELI',

  // Earnings Report:
  earnings: {
    website: 'https://investor.mercadolibre.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://investor.mercadolibre.com/static-files/f7df2670-1296-4dfa-bff3-980c37ad79a6',
        webcast: null,
        marketCap: 90.51 * 1e9,
        totalRevenue: 3081 * 1e6,
        operatingIncome: 257 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1530 * 1e6,
        operatingIncome: 69.744 * 1e6,
      },
    },
  },
};
