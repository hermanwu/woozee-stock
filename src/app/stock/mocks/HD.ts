import { StockAnalysis } from '../models/stock-analysis.model';

export const HD: StockAnalysis = {
  name: {
    English: 'Home Depot',
    Chinese: '',
  },
  description: [],
  trends: [],
  logo: '',
  ticker: 'HD',
  ceoQuote: [],
  advantage: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    website: 'https://ir.homedepot.com/',
    latestReportQuarter: ['2021', '3'],
    2021: {
      3: {
        '10q10k': '',
        press:
          'https://ir.homedepot.com/~/media/Files/H/HomeDepot-IR/reports-and-presentations/quarterly-earnings/2021/q2-2021-press-release.pdf',
        webcast: '',
        marketCap: 356.24 * 1e9,
        revenue: 41118 * 1e6,
        operatingIncome: 6639 * 1e6,
      },
    },
    2020: {
      3: {
        revenue: 38053 * 1e6,
        operatingIncome: 6067 * 1e6,
      },
    },
  },
};
