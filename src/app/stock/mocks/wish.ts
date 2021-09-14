import { StockAnalysis } from '../models/stock-analysis.model';

export const wish: StockAnalysis = {
  logo: '',
  name: { English: 'ContextLogic Inc.' },
  description: [],
  ticker: 'WISH',

  // Earnings Report:
  earnings: {
    website: 'https://ir.wish.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.wish.com/static-files/b562fbae-cdc2-47d5-a05a-881f03515586',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 1 * 1e9,
        revenue: 656 * 1e6,
        operatingIncome: -114 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 701 * 1e6,
        operatingIncome: 12 * 1e6,
      },
    },
  },
};
