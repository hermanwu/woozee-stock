import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const mrk: StockAnalysis = {
  logo: '',
  name: { English: 'Merck & Co., Inc.' },
  description: [],
  ticker: 'MRK',

  // Earnings Report:
  earnings: {
    website: 'https://www.merck.com/investor-relations/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0000064978/4b66a8e8-a34a-46dc-9f20-61b6ea11caed.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 206 * 1e9,
        totalRevenue: 11402 * 1e6,
        operatingIncome: 1717 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 9353 * 1e6,
        operatingIncome: 2741 * 1e6,
      },
    },
  },
};
