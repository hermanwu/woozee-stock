import { StockAnalysis } from '../models/stock-analysis.model';

export const ETSY: StockAnalysis = {
  logo: '',
  name: { English: 'Etsy' },
  description: [],
  ticker: 'ETSY',
  lastUpdated: new Date('2021-08-23'),

  // Earnings Report:
  earnings: {
    website: 'https://investors.etsy.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001370637/673e5ce5-839c-48a3-911a-a9e68e855677.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 24.88 * 1e9,
        revenue: 528900 * 1e3,
        operatingIncome: 89105 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 428737 * 1e3,
        operatingIncome: 119140 * 1e3,
      },
    },
  },
};
