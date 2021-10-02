import { StockAnalysis } from '../models/stock-analysis.model';

export const upwk: StockAnalysis = {
  logo: '',
  name: { English: 'Upwork Inc' },
  description: [],
  ticker: 'UPWK',

  // Earnings Report:
  earnings: {
    website: 'https://investors.upwork.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.upwork.com/static-files/d69761e7-64c7-4184-855b-de216c7bdf30',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 6.12 * 1e9,
        revenue: 124.181 * 1e6,
        operatingIncome: -16.395 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 87.531 * 1e6,
        operatingIncome: -10.984 * 1e6,
      },
    },
  },
};
