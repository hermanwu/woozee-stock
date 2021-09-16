import { StockAnalysis } from '../models/stock-analysis.model';

export const ulta: StockAnalysis = {
  logo: '',
  name: { English: null },
  description: [],
  ticker: 'ULTA',

  // Earnings Report:
  earnings: {
    website: 'https://www.ulta.com/investor',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://www.ulta.com/investor/sec-filings/all-sec-filings/content/0001558370-21-012066/0001558370-21-012066.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 20.43 * 1e9,
        revenue: 1967.207 * 1e6,
        operatingIncome: 250.893 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 1228.009 * 1e6,
        operatingIncome: 8.052 * 1e6,
      },
    },
  },
};
