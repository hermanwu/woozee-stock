import { StockAnalysis } from '../models/stock-analysis.model';

export const ABNB: StockAnalysis = {
  logo: '',
  name: { English: 'Airbnb' },
  description: [],
  ticker: 'ABNB',

  // Earnings Report:
  earnings: {
    website: 'https://airbnb2020ipo.q4web.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://s26.q4cdn.com/656283129/files/doc_financials/2021/q2/06c6fc2e-50f9-48aa-abc9-5b879014a2b4.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 87.8 * 1e9,
        revenue: 1335196 * 1e3,
        operatingIncome: -583215 * 1e3,
        date: '05-17-2021',
      },
    },
    2020: {
      2: {
        revenue: 334774 * 1e3,
        operatingIncome: -51278 * 1e3,
      },
    },
  },
};
