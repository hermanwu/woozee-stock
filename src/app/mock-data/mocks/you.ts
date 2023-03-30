import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const you: StockAnalysis = {
  name: { English: 'CLEAR SECURE, INC.' },
  description: [],
  ticker: 'YOU',

  // Earnings Report:
  earnings: {
    website: 'https://ir.clearme.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.clearme.com/sec-filings/all-sec-filings/content/0001856314-21-000006/0001856314-21-000006.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 6.08 * 1e9,
        totalRevenue: 55.178 * 1e6,
        operatingIncome: -37.746 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 59.978 * 1e6,
        operatingIncome: 22.277 * 1e6,
      },
    },
  },
};
