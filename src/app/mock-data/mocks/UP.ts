import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const up: StockAnalysis = {
  logo: '',
  name: { English: 'WHEELS UP EXPERIENCE INC.' },
  description: [],
  ticker: 'UP',

  // Earnings Report:
  earnings: {
    website: 'https://investors.wheelsup.com/overview/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001819516/4d719851-9f86-433c-b78d-dc0c3b13aa2f.pdf',
        presentation: null,
        press:
          'https://s27.q4cdn.com/682800059/files/doc_financials/2021/q2/UP-2Q-2021-Earnings-Release-FINAL.pdf',
        webcast: null,
        marketCap: 1.86 * 1e9,
        totalRevenue: 285.58 * 1e6,
        operatingIncome: -28.954 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 134.331 * 1e6,
        operatingIncome: -27.366 * 1e6,
      },
    },
  },
};
