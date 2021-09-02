import { StockAnalysis } from '../models/stock-analysis.model';

export const ISRG: StockAnalysis = {
  logo: '',
  name: { English: 'Intuitive Surgical, Inc' },
  description: [],
  ticker: 'ISRG',

  // Earnings Report:
  earnings: {
    website: 'https://isrg.intuitive.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://isrg.intuitive.com/static-files/fb21705e-3b2c-4af8-8585-705454290dda',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 125.335 * 1e9,
        revenue: 1464 * 1e6,
        operatingIncome: 511.2 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 852.1 * 1e6,
        operatingIncome: 80.6 * 1e6,
      },
    },
  },
};
