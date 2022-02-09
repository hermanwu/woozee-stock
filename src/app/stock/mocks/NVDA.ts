import { StockAnalysis } from '../models/stock-analysis.model';

export const NVDA: StockAnalysis = {
  logo: '',
  name: { English: 'Nvidia' },
  description: [],
  ticker: 'NVDA',

  // Earnings Report:
  earnings: {
    website: 'https://investor.nvidia.com/home/default.aspx',
    latestReportQuarter: ['2022', '2'],
    2022: {
      2: {
        '10q10k': '',
        presentation:
          'https://s22.q4cdn.com/364334381/files/doc_financials/2022/q1/NVDA-F1Q22-Investor-Presentation-FINAL.pdf',
        press:
          'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2022',
        marketCap: 474.48 * 1e9,
        revenue: 6507 * 1e6,
        operatingIncome: 2444 * 1e6,
      },
    },
    2021: {
      2: {
        revenue: 3866 * 1e6,
        operatingIncome: 651 * 1e6,
      },
    },
  },
};
