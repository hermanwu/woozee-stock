import { StockAnalysis } from '../models/stock-analysis.model';

export const ZM: StockAnalysis = {
  logo: '',
  name: { English: 'Zoom Video Communications, Inc.' },
  description: [],
  ticker: 'ZM',

  // Earnings Report:
  earnings: {
    website: 'https://investors.zoom.us/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://investors.zoom.us/static-files/fed57f87-c16b-4a7f-a03d-9fbb894f2a5a',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 86.42 * 1e9,
        revenue: 1021.495 * 1e6,
        operatingIncome: 294.603 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 663.52 * 1e6,
        operatingIncome: 188.104 * 1e6,
      },
    },
  },
};
