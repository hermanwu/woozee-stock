import { StockAnalysis } from '../models/stock-analysis.model';

export const orcl: StockAnalysis = {
  logo: '',
  name: { English: 'ORACLE CORPORATION' },
  description: [],
  ticker: 'ORCL',

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
        revenue: 9728 * 1e6,
        operatingIncome: 3427 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 9367 * 1e6,
        operatingIncome: 3211 * 1e6,
      },
    },
  },
};
