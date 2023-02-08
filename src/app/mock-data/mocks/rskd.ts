import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const rskd: StockAnalysis = {
  logo: '',
  name: { English: 'Riskified Ltd' },
  description: [],
  ticker: 'RSKD',

  // Earnings Report:
  earnings: {
    website: 'https://ir.riskified.com/financial-information/sec-filings',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://ir.riskified.com/news-releases/news-release-details/riskified-reports-strong-q2-revenue-growth-47-heels-nyse-debut',
        webcast: null,
        marketCap: 4.11 * 1e9,
        totalRevenue: 55.692 * 1e6,
        operatingIncome: -1.65 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 37.807 * 1e6,
        operatingIncome: -7.671 * 1e6,
      },
    },
  },
};
