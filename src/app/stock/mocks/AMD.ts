import { StockAnalysis } from '../models/stock-analysis.model';

export const AMD: StockAnalysis = {
  logo: '',
  name: { English: 'AMD' },
  description: [],
  ticker: 'AMD',

  // Earnings Report:
  earnings: {
    website:
      'https://ir.amd.com/news-events/press-releases/detail/1014/amd-reports-second-quarter-2021-financial-results',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://ir.amd.com/sec-filings/filter/quarterly-filings/content/0000002488-21-000116/0000002488-21-000116.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 122.29 * 1e9,
        revenue: 3850 * 1e6,
        operatingIncome: 831 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 1932 * 1e6,
        operatingIncome: 173 * 1e6,
      },
    },
  },
};
