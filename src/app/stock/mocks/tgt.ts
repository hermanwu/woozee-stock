import { StockAnalysis } from '../models/stock-analysis.model';

export const tgt: StockAnalysis = {
  logo: '',
  name: { English: 'TARGET CORPORATION' },
  description: [],
  ticker: 'TGT',

  // Earnings Report:
  earnings: {
    website: 'https://investors.target.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.target.com/static-files/c0bafbb2-f0ab-4bb4-8437-58db6c07db76',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 117.99 * 1e9,
        revenue: 25160 * 1e6,
        operatingIncome: 2467 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 22975 * 1e6,
        operatingIncome: 2300 * 1e6,
      },
    },
  },
};
