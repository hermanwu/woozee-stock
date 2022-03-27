import { StockAnalysis } from '../models/stock-analysis.model';

export const JD: StockAnalysis = {
  logo: '',
  name: { English: 'JD.com' },
  description: [],
  ticker: 'JD',

  // Earnings Report:
  earnings: {
    website: 'https://ir.jd.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': '',
        presentation:
          'https://ir.jd.com/system/files-encrypted/nasdaq_kms/assets/2021/08/23/8-01-31/JD.com%20Inc%202Q2021%20Financial%20and%20Operational%20Highlights.pdf',

        press: 'https://ir.jd.com/node/9561/pdf',
        webcast: '',
        marketCap: 122.58 * 1e9,
        totalRevenue: (253800470 * 1e3) / 6.45,
        operatingIncome: (300756 * 1e3) / 6.45,
        date: new Date('2021-08-06'),
      },
    },
    2020: {
      2: {
        totalRevenue: (201054058 * 1e3) / 6.45,
        operatingIncome: (5044075 * 1e3) / 6.45,
      },
    },
  },
};
