import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const amd: StockAnalysis = {
  marketCap: 172 * BILLION,

  logo: '',
  name: 'AMD',
  description: [],
  ticker: 'amd',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 4.826 * 1e9,
      operatingIncome: 1.231 * 1e9,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 4.313 * 1e9,
      operatingIncome: 923 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 3850 * 1e6,
      operatingIncome: 831 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 3445 * 1e6,
      operatingIncome: 648 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3244 * 1e6,
      operatingIncome: 554 * 1e6,
    },
  ],
  earnings: {
    website:
      'https://ir.amd.com/news-events/press-releases/detail/1014/amd-reports-second-quarter-2021-financial-results',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.amd.com/sec-filings/filter/quarterly-filings/content/0000002488-21-000116/0000002488-21-000116.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 122.29 * 1e9,
        totalRevenue: 3850 * 1e6,
        operatingIncome: 831 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1932 * 1e6,
        operatingIncome: 173 * 1e6,
      },
    },
  },
};
