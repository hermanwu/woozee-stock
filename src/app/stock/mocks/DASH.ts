import { StockAnalysis } from '../models/stock-analysis.model';

export const DASH: StockAnalysis = {
  logo: '',
  name: { English: 'Doordash' },
  description: [],
  ticker: 'DASH',

  // Earnings Report:
  earnings: {
    website: null,
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001792789/efccd043-c8de-45f0-b1cd-2c10d83dadf5.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 63.51 * 1e9,
        revenue: 1236 * 1e6,
        operatingIncome: -99 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 675 * 1e6,
        operatingIncome: 27 * 1e6,
      },
    },
  },
};
