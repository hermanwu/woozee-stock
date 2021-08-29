import { StockAnalysis } from '../models/stock-analysis.model';

export const PINS: StockAnalysis = {
  logo: '',
  name: { English: 'Pinterest' },
  description: [],
  ticker: 'PINS',

  // Earnings Report:
  earnings: {
    website: 'https://investor.pinterestinc.com/investor-overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://s23.q4cdn.com/958601754/files/doc_financials/2021/q2/Q2-21-Form-10-Q-Filed-(1).pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 36.89 * 1e9,
        revenue: 613210 * 1e3,
        operatingIncome: 71198 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 272485 * 1e3,
        operatingIncome: -104530 * 1e3,
      },
    },
  },
};
