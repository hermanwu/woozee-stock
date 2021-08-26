import { StockAnalysis } from '../models/stock-analysis.model';

export const INTU: StockAnalysis = {
  logo: '',
  name: { English: 'Intuit' },
  description: [],
  ticker: 'INTU',

  // Earnings Report:
  earnings: {
    website: 'https://www.investors.intuit.com',
    latestReportQuarter: ['2021', '1'],
    2021: {
      1: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0000896878/0a2bbb52-8b13-46fc-a681-63fae6bdf982.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 151.31 * 1e9,
        revenue: 4173 * 1e6,
        operatingIncome: 1914 * 1e6,
        date: new Date('2021-04-01'),
      },
    },
    2020: {
      1: {
        revenue: 3002 * 1e6,
        operatingIncome: 1413 * 1e6,
      },
    },
  },
};
