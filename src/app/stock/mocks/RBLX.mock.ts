import { StockAnalysis } from '../models/stock-analysis.model';

export const RBLX: StockAnalysis = {
  name: {
    English: 'Roblox',
    Chinese: '',
  },
  description: [''],
  trend: [],
  logo: '',
  ticker: 'RBLX',
  ceoQuote: [],
  advantage: [],
  risk: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    website: 'https://ir.roblox.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001315098/b80ee630-5ce5-4b4c-8b84-d0141f383f25.pdf',
        press:
          "https://s27.q4cdn.com/984876518/files/doc_financials/2021/q2/Q2-'21-Earnings-Release-FULL-FINAL.pdf",
        marketCap: 44.83 * 1e9,
        revenue: 454100e3,
        operatingIncome: 142946e3,
      },
    },
    2020: {
      2: {
        revenue: 200392e3,
        operatingIncome: 73046e3,
      },
    },
  },
};
