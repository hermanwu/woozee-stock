import { StockAnalysis } from '../models/stock-analysis.model';

export const AVGO: StockAnalysis = {
  logo: '',
  name: { English: 'BROADCOM INC.' },
  description: [],
  ticker: 'AVGO',

  // Earnings Report:
  earnings: {
    website: 'https://investors.broadcom.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.broadcom.com/static-files/42b8d775-d3c7-4cda-868e-925fd9fc612c',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 204.37 * 1e9,
        revenue: 6778 * 1e6,
        operatingIncome: 2126 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 5821 * 1e6,
        operatingIncome: 1008 * 1e6,
      },
    },
  },
};
