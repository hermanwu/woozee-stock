import { StockAnalysis } from '../models/stock-analysis.model';

export const NFLX: StockAnalysis = {
  logo: '',
  name: { English: 'Netflix' },
  description: [],
  ticker: 'NFLX',

  // Earnings Report:
  earnings: {
    website: 'https://ir.netflix.net/ir-overview/profile/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001065280/743c309d-666a-4933-8183-eb43fb8a461b.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 240.64 * 1e9,
        revenue: 7341777 * 1e3,
        operatingIncome: 1847630 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 6148286 * 1e3,
        operatingIncome: 1357928 * 1e3,
      },
    },
  },
};
