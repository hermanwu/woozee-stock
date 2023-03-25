import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const pton: StockAnalysis = {
  logo: '',
  name: 'Peloton',
  displayName: 'Peloton',
  description: [],
  ticker: 'pton',
  irAddress: 'https://investor.onepeloton.com/',

  // Earnings Report:
  earnings: {
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.onepeloton.com/static-files/d84f3085-8c04-45d0-b6ab-0550de50c7ad',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 31.12 * 1e9,
        totalRevenue: 936.9 * 1e6,
        operatingIncome: -301.7 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 607.1 * 1e6,
        operatingIncome: 90 * 1e6,
      },
    },
  },
};
