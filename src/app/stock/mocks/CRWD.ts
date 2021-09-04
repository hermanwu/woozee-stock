import { StockAnalysis } from '../models/stock-analysis.model';

export const CRWD: StockAnalysis = {
  logo: '',
  name: { English: 'Crowdstrike' },
  description: [],
  ticker: 'CRWD',

  // Earnings Report:
  earnings: {
    website: 'https://ir.crowdstrike.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': '',
        presentation: '',
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
