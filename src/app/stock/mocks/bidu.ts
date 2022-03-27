import { rmbToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const bidu: StockAnalysis = {
  logo: '',
  name: { English: 'Baidu' },
  description: [],
  ticker: 'BIDU',

  // Earnings Report:
  earnings: {
    website: 'https://ir.baidu.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://ir.baidu.com/static-files/042ba909-c13c-4b61-89cc-17def3b02501',
        webcast: null,
        marketCap: 54.5 * 1e9,
        totalRevenue: 31359 * 1e6 * rmbToDollar,
        operatingIncome: 3463 * 1e6 * rmbToDollar,
      },
    },
    2020: {
      2: {
        totalRevenue: 26034 * 1e6 * rmbToDollar,
        operatingIncome: 3644 * 1e6 * rmbToDollar,
      },
    },
  },
};
