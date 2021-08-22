import { StockAnalysis } from '../models/stock-analysis.model';

export const SNAP: StockAnalysis = {
  logo: '',
  name: { English: 'Snap' },
  description: [],
  ticker: 'SNAP',
  lastUpdated: new Date('2021-08-22'),

  // Demand
  painPoint: [''],

  // Earnings Report:
  earnings: {
    website: 'https://investor.snap.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001564408/551465a0-093c-47a1-ad2f-21aa85f68ca1.pdf',
        press:
          'https://s25.q4cdn.com/442043304/files/doc_financials/2021/q2/Q2%E2%80%9921-Earnings-Release-Final_7.22.21.pdf',
        marketCap: 112.04 * 1e9,
        revenue: 982108 * 1e3,
        operatingIncome: -192512 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 454158 * 1e3,
        operatingIncome: -310608 * 1e3,
      },
    },
  },
};
