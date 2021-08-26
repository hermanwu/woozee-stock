import { StockAnalysis } from '../models/stock-analysis.model';

export const ZS: StockAnalysis = {
  logo: '',
  name: { English: 'Zscaler' },
  description: [],
  ticker: 'ZS',

  // Earnings Report:
  earnings: {
    website: 'https://ir.zscaler.com/',
    latestReportQuarter: ['2021', '1'],
    2021: {
      1: {
        '10q':
          'https://ir.zscaler.com/static-files/787a652d-599b-4b2f-a010-ffd90234f0d3',
        presentation: '',
        webcast: '',
        marketCap: 35.81 * 1e9,
        revenue: 176404 * 1e3,
        operatingIncome: -43850 * 1e3,
      },
    },
    2020: {
      1: {
        revenue: 110524 * 1e3,
        operatingIncome: -20514 * 1e3,
      },
    },
  },
};
