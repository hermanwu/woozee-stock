import { StockAnalysis } from '../models/stock-analysis.model';

export const blde: StockAnalysis = {
  logo: '',
  name: { English: 'BLADE AIR MOBILITY, INC.' },
  description: [],
  ticker: 'BLDE',

  // Earnings Report:
  earnings: {
    website: 'https://ir.blade.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.blade.com/sec-filings/quarterly-reports/content/0001104659-21-105544/0001104659-21-105544.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 0.66998 * 1e9,
        revenue: 12.951 * 1e6,
        operatingIncome: -7.771 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 3.438 * 1e6,
        operatingIncome: -1.476 * 1e6,
      },
    },
  },
};
