import { StockAnalysis } from '../models/stock-analysis.model';

export const OPEN: StockAnalysis = {
  logo: '',
  name: { English: 'Opendoor' },
  description: [],
  ticker: 'OPEN',
  lastUpdated: new Date('2021-08-22'),

  // Earnings Report:
  earnings: {
    website: 'https://investor.opendoor.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.opendoor.com/static-files/e1fbd4d1-be43-4492-a392-d95bd2769656',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 9.02 * 1e9,
        revenue: 1185386 * 1e3,
        operatingIncome: -152753 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 739827 * 1e3,
        operatingIncome: -38852 * 1e3,
      },
    },
  },
};
