import { StockAnalysis } from '../models/stock-analysis.model';

export const DIS: StockAnalysis = {
  name: {
    English: 'Disney',
    Chinese: '迪士尼',
  },
  description: [''],
  trend: [],
  logo: '',
  ticker: 'DIS',
  ceoQuote: [],
  advantage: [],
  risk: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    website: 'https://thewaltdisneycompany.com/investor-relations/',
    latestReportQuarter: ['2021', '3'],
    2021: {
      3: {
        '10q10k':
          'https://thewaltdisneycompany.com/app/uploads/2021/08/q3-fy21-earnings.pdf',
        press:
          'https://thewaltdisneycompany.com/app/uploads/2021/08/reconciliation_q3_fy21.pdf',
        webcast:
          'https://thewaltdisneycompany.com/app/uploads/2021/08/q3-fy21-earnings.mp3',
        marketCap: 319.51 * 1e9,
        revenue: 17022e6,
        operatingIncome: 995e6,
      },
    },
    2020: {
      3: {
        revenue: 11779e6,
        operatingIncome: -4840e6,
      },
    },
  },
};
