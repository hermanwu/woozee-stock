import { StockAnalysis } from '../models/stock-analysis.model';

export const sbux: StockAnalysis = {
  logo: '',
  name: { English: 'Starbucks Corporation' },
  description: [],
  ticker: 'SBUX',

  // Earnings Report:
  earnings: {
    website: 'https://investor.starbucks.com/ir-home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0000829224/1759ec29-8eea-4e94-a897-c6b77480a1ca.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 135.21 * 1e9,
        totalRevenue: 7496.5 * 1e6,
        operatingIncome: 1488.7 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 4222.1 * 1e6,
        operatingIncome: -703.9 * 1e6,
      },
    },
  },
};
