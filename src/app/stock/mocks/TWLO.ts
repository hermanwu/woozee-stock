import { StockAnalysis } from '../models/stock-analysis.model';

export const TWLO: StockAnalysis = {
  logo: '',
  name: { English: 'Twilio' },
  description: [],
  ticker: 'TWLO',
  lastUpdated: new Date('2021-08-23'),

  // Earnings Report:
  earnings: {
    website: 'https://investors.twilio.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001447669/58fb24a6-da6d-40aa-bd56-2b4fd16ecb9e.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 61.85 * 1e9,
        revenue: 668931 * 1e3,
        operatingIncome: -202274 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 400849 * 1e3,
        operatingIncome: -102644 * 1e3,
      },
    },
  },
};
