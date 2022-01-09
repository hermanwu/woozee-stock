import { StockAnalysis } from '../models/stock-analysis.model';

export const rtx: StockAnalysis = {
  logo: '',
  name: { English: 'Raytheon Technologies Corp' },
  description: [],
  ticker: 'RTX',

  // Earnings Report:
  earnings: {
    website: 'http://investors.rtx.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'http://investors.rtx.com/static-files/b2c67bf8-79fb-4cd2-8122-24bbf3083332',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 131.91 * 1e9,
        revenue: 15880 * 1e6,
        operatingIncome: 1282 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 14061 * 1e6,
        operatingIncome: -3760 * 1e6,
      },
    },
  },
};