import { yenToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ntdoy: StockAnalysis = {
  logo: '',
  name: { English: 'Nintendo 8 ADR Representing Ord Shs' },
  description: [],
  ticker: 'NTDOY',

  // Earnings Report:
  earnings: {
    website: 'https://www.nintendo.co.jp/ir/en/index.html',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press: 'https://www.nintendo.co.jp/ir/pdf/2021/210805e.pdf',
        webcast: null,
        marketCap: 6.99 * 1e12 * yenToDollar,
        totalRevenue: 322647 * 1e6 * yenToDollar,
        operatingIncome: 119752 * 1e6 * yenToDollar,
      },
    },
    2020: {
      2: {
        totalRevenue: 358106 * 1e6 * yenToDollar,
        operatingIncome: 144737 * 1e6 * yenToDollar,
      },
    },
  },
};
