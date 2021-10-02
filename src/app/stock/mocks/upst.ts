import { StockAnalysis } from '../models/stock-analysis.model';

export const upst: StockAnalysis = {
  logo: '',
  name: { English: 'Upstart Holdings Inc' },
  description: [],
  ticker: 'UPST',

  // Earnings Report:
  earnings: {
    website: 'https://ir.upstart.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 23.23 * 1e9,
        revenue: 193.946 * 1e6,
        operatingIncome: 36.294 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 17.353 * 1e6,
        operatingIncome: -11.388 * 1e6,
      },
    },
  },
};
