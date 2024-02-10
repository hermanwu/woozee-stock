import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const LZ: StockAnalysis = {
  logo: '',
  name: { English: 'LegalZoom.com Inc.' },
  description: [],
  ticker: 'LZ',

  // Earnings Report:
  earnings: {
    website: 'https://investors.legalzoom.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investors.legalzoom.com/static-files/8ad8e1db-82bc-4e4f-8726-96627c607d02',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 7.02 * 1e9,
        totalRevenue: 150.432 * 1e6,
        operatingIncome: -27.508 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 111.007 * 1e6,
        operatingIncome: 10.534 * 1e6,
      },
    },
  },
};
