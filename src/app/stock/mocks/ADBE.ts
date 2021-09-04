import { StockAnalysis } from '../models/stock-analysis.model';

export const ADBE: StockAnalysis = {
  logo: '',
  name: { English: 'Adobe' },
  description: [],
  ticker: 'ADBE',

  // Earnings Report:
  earnings: {
    website: 'https://www.adobe.com/investor-relations.html',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://www.adobe.com/content/dam/cc/en/investor-relations/pdfs/ADBE-10Q-Q221-FINAL.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 306.96 * 1e9,
        revenue: 3835 * 1e6,
        operatingIncome: 1406 * 1e6,
        date: '05-17-2021',
      },
    },
    2020: {
      2: {
        revenue: 3128 * 1e6,
        operatingIncome: 1016 * 1e6,
      },
    },
  },
};
