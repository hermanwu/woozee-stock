import { StockAnalysis } from '../models/stock-analysis.model';

export const AFRM: StockAnalysis = {
  logo: '',
  name: { English: 'Affirm' },
  description: [],
  ticker: 'AFRM',

  // Earnings Report:
  earnings: {
    website: 'https://investors.affirm.com/',
    latestReportQuarter: ['2021', '3'],
    2021: {
      3: {
        '10q10k':
          'https://investors.affirm.com/static-files/4210c60b-e256-4d7b-808d-ea90329e657a',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 24.824 * 1e9,
        revenue: 230665 * 1e3,
        operatingIncome: -169456 * 1e3,
        date: '05-17-2021',
      },
    },
    2020: {
      3: {
        revenue: 138273 * 1e3,
        operatingIncome: -81505 * 1e3,
      },
    },
  },
};
