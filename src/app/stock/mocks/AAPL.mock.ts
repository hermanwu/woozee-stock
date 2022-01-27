import { StockAnalysis } from '../models/stock-analysis.model';

export const AAPL: StockAnalysis = {
  name: {
    English: 'Apple',
    Chinese: '苹果',
  },
  description: [''],
  trends: [],
  logo: '',
  ticker: 'AAPL',
  ceoQuote: [],
  advantage: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    website: 'https://investor.apple.com/investor-relations/default.aspx',
    latestReportQuarter: ['2021', '3'],
    2021: {
      3: {
        '10q10k':
          'https://s2.q4cdn.com/470004039/files/doc_financials/2021/q3/_10-Q-Q3-2021-(As-Filed).pdf',
        marketCap: 2.46 * 1e12,
        revenue: 81434e6,
        operatingIncome: 24126e6,
      },
    },
    2020: {
      3: {
        revenue: 59685e6,
        operatingIncome: 13091e6,
      },
    },
  },
};
