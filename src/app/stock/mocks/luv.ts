import { StockAnalysis } from '../models/stock-analysis.model';

export const luv: StockAnalysis = {
  logo: '',
  name: { English: 'SOUTHWEST AIRLINES CO' },
  description: [],
  ticker: 'LUV',

  // Earnings Report:
  earnings: {
    website: 'https://www.southwestairlinesinvestorrelations.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://otp.tools.investis.com/clients/us/southwest/SEC/sec-show.aspx?FilingId=15113810&Cik=0000092380&Type=PDF&hasPdf=1',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 29.04 * 1e9,
        totalRevenue: 4008 * 1e6,
        operatingIncome: 594 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1008 * 1e6,
        operatingIncome: -1127 * 1e6,
      },
    },
  },
};
