import { rmbToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const techy: StockAnalysis = {
  logo: '',
  name: { English: 'Tencent Holding' },
  description: [],
  ticker: 'TCEHY',

  // Earnings Report:
  earnings: {
    website: 'https://www.tencent.com/en-us/investors.html',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://static.www.tencent.com/uploads/2021/08/31/7276c2279348d70e0b0f74f6c470f92e.pdf',
        webcast: null,
        marketCap: 596.927 * 1e9,
        revenue: 138259 * 1e6 * rmbToDollar,
        operatingIncome: 52487 * 1e6 * rmbToDollar,
      },
    },
    2020: {
      2: {
        revenue: 114883 * 1e6 * rmbToDollar,
        operatingIncome: 39311 * 1e6 * rmbToDollar,
      },
    },
  },
};
