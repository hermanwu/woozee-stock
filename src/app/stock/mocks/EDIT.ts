import { StockAnalysis } from '../models/stock-analysis.model';

export const EDIT: StockAnalysis = {
  logo: '',
  name: { English: 'EDITAS MEDICINE, INC.' },
  description: [],
  ticker: 'EDIT',

  // Earnings Report:
  earnings: {
    website: 'https://ir.editasmedicine.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.editasmedicine.com/static-files/08f5af6e-5eb6-412e-8c5c-6a974fcdfbbd',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 4.51 * 1e9,
        revenue: 0.379 * 1e6,
        operatingIncome: -55.401 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 10.749 * 1e6,
        operatingIncome: -31.339 * 1e6,
      },
    },
  },
};
