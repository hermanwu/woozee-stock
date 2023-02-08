import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const CLOV: StockAnalysis = {
  logo: '',
  name: { English: 'Clover Health' },
  description: [],
  ticker: 'CLOV',

  // Earnings Report:
  earnings: {
    website: 'https://investors.cloverhealth.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001679788/dcec079b-3237-4ae0-a54d-479ded972ab8.pdf',
        presentation: '',
        press:
          'https://investors.cloverhealth.com/static-files/a0aaca9f-4318-4205-b56e-98c66195db8b',
        webcast: '',
        marketCap: 3.18 * 1e9,
        totalRevenue: 412472 * 1e3,
        operatingIncome: -181862 * 1e3,
        date: '08-11-2021',
      },
    },
    2020: {
      2: {
        totalRevenue: 170315 * 1e3,
        operatingIncome: 23170 * 1e3,
      },
    },
  },
};
