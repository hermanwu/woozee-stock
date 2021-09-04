import { StockAnalysis } from '../models/stock-analysis.model';

export const RH: StockAnalysis = {
  logo: '',
  name: { English: 'Restoration Hardware' },
  description: [],
  ticker: 'RH',

  // Earnings Report:
  earnings: {
    website: 'https://ir.restorationhardware.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.restorationhardware.com/static-files/a0a51f7a-f49a-4266-b061-9a2e609276f3',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 14.74 * 1e9,
        revenue: 860.792 * 1e6,
        operatingIncome: 174.475 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 482.895 * 1e6,
        operatingIncome: -4.635 * 1e6,
      },
    },
  },
};
