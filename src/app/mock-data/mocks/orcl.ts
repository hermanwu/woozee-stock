import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const orcl: StockAnalysis = {
  logo: '',
  name: { English: 'ORACLE CORPORATION' },
  description: [],
  ticker: 'ORCL',
  displayName: 'Oracle',
  logoLink: 'https://i.ibb.co/YDHyyPw/z11b-Dhy-400x400.jpg',

  // Earnings Report:
  earnings: {
    website: 'https://investor.oracle.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://s23.q4cdn.com/440135859/files/doc_financials/2022/q1/1q22-pressrelease-September.pdf',
        webcast: null,
        marketCap: 250.39 * 1e9,
        totalRevenue: 9728 * 1e6,
        operatingIncome: 3427 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 9367 * 1e6,
        operatingIncome: 3211 * 1e6,
      },
    },
  },
};
