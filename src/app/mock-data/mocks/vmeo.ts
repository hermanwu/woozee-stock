import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const VMEO: StockAnalysis = {
  logo: '',
  name: { English: 'VIMEO, INC.' },
  description: [],
  ticker: 'VMEO',

  // Earnings Report:
  earnings: {
    website: 'https://investors.vimeo.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.vimeo.com/static-files/85beffc9-15c1-4c76-b629-0c6c2b1c54be',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 6.24 * 1e9,
        totalRevenue: 96.046 * 1e6,
        operatingIncome: -20.312 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 67.334 * 1e6,
        operatingIncome: -12.346 * 1e6,
      },
    },
  },
};
