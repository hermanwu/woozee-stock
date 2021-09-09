import { StockAnalysis } from '../models/stock-analysis.model';

export const NET: StockAnalysis = {
  logo: '',
  name: { English: 'Cloudflare, Inc.' },
  description: [],
  ticker: 'NET',

  // Earnings Report:
  earnings: {
    website: 'https://www.cloudflare.net/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001477333/3fdedeee-8816-4eac-a7aa-9d0e45b5290d.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 40.05 * 1e9,
        revenue: 152.428 * 1e6,
        operatingIncome: -28.872 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 99.721 * 1e6,
        operatingIncome: -24.704 * 1e6,
      },
    },
  },
};
