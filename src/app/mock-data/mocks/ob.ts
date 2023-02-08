import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const ob: StockAnalysis = {
  logo: '',
  name: { English: 'Outbrain Inc' },
  description: [],
  ticker: 'OB',

  // Earnings Report:
  earnings: {
    website: 'https://investors.outbrain.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.outbrain.com/static-files/20f6fe92-dfa6-457c-ac2c-1da1179d8196',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 0.897 * 1e9,
        totalRevenue: 247.153 * 1e6,
        operatingIncome: 17.155 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 31.775 * 1e6,
        operatingIncome: 0.299 * 1e6,
      },
    },
  },
};
