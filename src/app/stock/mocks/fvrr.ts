import { StockAnalysis } from '../models/stock-analysis.model';

export const fvrr: StockAnalysis = {
  logo: '',
  name: { English: 'Fiverr International Ltd' },
  description: [],
  ticker: 'FVRR',

  // Earnings Report:
  earnings: {
    website: 'https://investors.fiverr.com/investor-overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://investors.fiverr.com/press-releases/press-releases-details/2021/Fiverr-Announces-Second-Quarter-2021-Results/default.aspx',
        webcast: null,
        marketCap: 7.42 * 1e9,
        revenue: 75.263 * 1e6,
        operatingIncome: -8.344 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 47.13 * 1e6,
        operatingIncome: -0.598 * 1e6,
      },
    },
  },
};
