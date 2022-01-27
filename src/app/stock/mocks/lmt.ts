import { StockAnalysis } from '../models/stock-analysis.model';

export const lmt: StockAnalysis = {
  logo: '',
  name: { English: 'LOCKHEED MARTIN CORPORATION' },
  description: [],
  ticker: 'LMT',
  irAddress: 'https://investors.lockheedmartin.com/',
  secFilings:
    'https://investors.lockheedmartin.com/financial-information/sec-filings',

  // Earnings Report:
  earnings: {
    website: 'https://investors.lockheedmartin.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.lockheedmartin.com/static-files/1ca69821-0aa8-4c6f-aa39-5a691124cafd',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 94.42 * 1e9,
        revenue: 17029 * 1e6,
        operatingIncome: 2192 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 16220 * 1e6,
        operatingIncome: 2213 * 1e6,
      },
    },
  },
};
