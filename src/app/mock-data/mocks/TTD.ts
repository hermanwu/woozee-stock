import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const TTD: StockAnalysis = {
  logo: '',
  name: { English: 'THE TRADE DESK, INC.' },
  description: [],
  ticker: 'TTD',
  displayName: 'The Trade Desk',
  logoLink: 'https://i.ibb.co/N2HZGG9/i-Z5-He-FNX-400x400.jpg',

  // Earnings Report:
  earnings: {
    website: 'https://investors.thetradedesk.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.thetradedesk.com/static-files/c6f646f8-ee9a-4349-ba4d-bca94f627d6d',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 36.43 * 1e9,
        totalRevenue: 279.967 * 1e6,
        operatingIncome: 61.948 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 139.355 * 1e6,
        operatingIncome: -15.772 * 1e6,
      },
    },
  },
};
