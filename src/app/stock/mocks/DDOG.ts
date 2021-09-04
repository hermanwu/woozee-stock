import { StockAnalysis } from '../models/stock-analysis.model';

export const DDOG: StockAnalysis = {
  logo: '',
  name: { English: 'Datadog' },
  description: [],
  ticker: 'DDOG',

  // Earnings Report:
  earnings: {
    website: 'https://investors.datadoghq.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.datadoghq.com/static-files/69c6fd93-3308-491b-be81-9b642728a091',
        presentation: '',
        press:
          'https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-second-quarter-2021-financial-results',
        webcast: '',
        marketCap: 41.05 * 1e9,
        revenue: 233549 * 1e3,
        operatingIncome: -9886 * 1e3,
        date: new Date('2021-08-06'),
      },
    },
    2020: {
      2: {
        revenue: 140012 * 1e3,
        operatingIncome: 654 * 1e3,
      },
    },
  },
};
