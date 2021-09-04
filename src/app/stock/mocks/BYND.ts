import { StockAnalysis } from '../models/stock-analysis.model';

export const BYND: StockAnalysis = {
  logo: '',
  name: { English: 'BEYOND MEAT, Inc.' },
  description: [],
  ticker: 'BYND',

  // Earnings Report:
  earnings: {
    website: 'https://investors.beyondmeat.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.beyondmeat.com/static-files/2426ef01-6fe2-454e-b7f8-417b78484d53',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 7.21 * 1e9,
        revenue: 149.426 * 1e6,
        operatingIncome: -18.601 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 113.338 * 1e6,
        operatingIncome: -8.166 * 1e6,
      },
    },
  },
};
