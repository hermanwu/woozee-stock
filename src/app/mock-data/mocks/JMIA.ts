import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const JMIA: StockAnalysis = {
  logo: '',
  name: { English: 'Jumia' },
  description: [],
  ticker: 'JMIA',

  // Earnings Report:
  earnings: {
    website: 'https://investor.jumia.com/investor-relations/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': '',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 1.78 * 1e9,
        totalRevenue: 223.5 * 1e6,
        operatingIncome: -51.6 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 251 * 1e6,
        operatingIncome: -41.3 * 1e6,
      },
    },
  },
};
