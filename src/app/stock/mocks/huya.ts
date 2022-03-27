import { rmbToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const huya: StockAnalysis = {
  logo: '',
  name: { English: 'HUYA Inc - ADR' },
  description: [],
  ticker: 'HUYA',

  // Earnings Report:
  earnings: {
    website: 'http://ir.huya.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press: 'http://ir.huya.com/index.php?s=121',
        webcast: null,
        marketCap: 1.88 * 1e9,
        totalRevenue: 2962 * 1e6 * rmbToDollar,
        operatingIncome: 181.9 * 1e6 * rmbToDollar,
      },
    },
    2020: {
      2: {
        totalRevenue: 2697 * 1e6 * rmbToDollar,
        operatingIncome: 181.4 * 1e6 * rmbToDollar,
      },
    },
  },
};
