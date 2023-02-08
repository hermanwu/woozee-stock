import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const unh: StockAnalysis = {
  logo: '',
  name: { English: 'UnitedHealth Group Incorporated' },
  description: [],
  ticker: 'UNH',

  // Earnings Report:
  earnings: {
    website: 'https://www.unitedhealthgroup.com/investors.html',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://www.unitedhealthgroup.com/viewer.html?file=/content/dam/UHG/PDF/investors/2021/UNH-Q2-2021-Form-10-Q.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 396.18 * 1e9,
        totalRevenue: 71321 * 1e6,
        operatingIncome: 5978 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 62138 * 1e6,
        operatingIncome: 9241 * 1e6,
      },
    },
  },
};
