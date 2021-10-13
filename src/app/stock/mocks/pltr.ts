import { StockAnalysis } from '../models/stock-analysis.model';

export const pltr: StockAnalysis = {
  logo: '',
  name: { English: 'Palantir Technologies Inc' },
  description: [],
  ticker: 'PLTR',

  // Earnings Report:
  earnings: {
    website: 'https://investors.palantir.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001321655/55ab4b3e-dc8c-4c4a-bc0f-980d82d17d20.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 46.25 * 1e9,
        revenue: 375.642 * 1e6,
        operatingIncome: -146.148 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 251.889 * 1e6,
        operatingIncome: -99.145 * 1e6,
      },
    },
  },
};
