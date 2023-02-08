import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const noc: StockAnalysis = {
  logo: '',
  name: { English: 'Northrop Grumman Corporation' },
  description: [],
  ticker: 'NOC',

  // Earnings Report:
  earnings: {
    website: 'https://investor.northropgrumman.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.northropgrumman.com/static-files/4da75618-72e9-4cff-8d9a-afddc8fd3c60',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 56.95 * 1e9,
        totalRevenue: 9151 * 1e6,
        operatingIncome: 1037 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 8884 * 1e6,
        operatingIncome: 1005 * 1e6,
      },
    },
  },
};
