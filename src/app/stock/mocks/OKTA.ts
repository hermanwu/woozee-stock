import { StockAnalysis } from '../models/stock-analysis.model';

export const OKTA: StockAnalysis = {
  logo: '',
  name: { English: 'Okta' },
  description: [],
  ticker: 'OKTA',

  // Earnings Report:
  earnings: {
    website: 'https://investor.okta.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': '',
        presentation: '',
        press:
          'https://investor.okta.com/news-releases/news-release-details/okta-announces-strong-first-quarter-results-0',
        webcast: '',
        marketCap: 34.56 * 1e9,
        totalRevenue: 251006 * 1e3,
        operatingIncome: -90681 * 1e3,
      },
    },
    2020: {
      2: {
        totalRevenue: 182859 * 1e3,
        operatingIncome: -52199 * 1e3,
      },
    },
  },
};
