import { StockAnalysis } from '../models/stock-analysis.model';

export const MRNA: StockAnalysis = {
  logo: '',
  name: { English: 'Moderna, Inc.' },
  description: [],
  ticker: 'MRNA',

  // Earnings Report:
  earnings: {
    website: 'https://investors.modernatx.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://investors.modernatx.com/static-files/6df1980f-ded2-4a57-a525-42b5d717d383',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 157.04 * 1e9,
        revenue: 4354 * 1e6,
        operatingIncome: 3062 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 67 * 1e6,
        operatingIncome: -122 * 1e6,
      },
    },
  },
};
