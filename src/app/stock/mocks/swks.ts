import { StockAnalysis } from '../models/stock-analysis.model';

export const swks: StockAnalysis = {
  logo: '',
  name: { English: 'Skyworks Solutions, Inc.' },
  description: [],
  ticker: 'SWKS',

  // Earnings Report:
  earnings: {
    website: 'https://investors.skyworksinc.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.skyworksinc.com/static-files/10eb2009-90bb-4f68-9954-3328dc743616',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 28.56 * 1e9,
        revenue: 1116.4 * 1e6,
        operatingIncome: 339.8 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 736.8 * 1e6,
        operatingIncome: 147.5 * 1e6,
      },
    },
  },
};
