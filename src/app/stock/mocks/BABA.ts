import { StockAnalysis } from '../models/stock-analysis.model';

export const BABA: StockAnalysis = {
  logo: '',
  name: { English: 'Alibaba' },
  description: [],
  ticker: 'BABA',

  // Earnings Report:
  earnings: {
    website: 'https://www.alibabagroup.com/en/ir/home',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://otp.investis.com/clients/us/alibaba/SEC/sec-show.aspx?FilingId=15132205&Cik=0001577552&Type=PDF&hasPdf=1',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 468.48 * 1e9,
        revenue: 31865 * 1e6,
        operatingIncome: 4778 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 23812 * 1e6,
        operatingIncome: 5375 * 1e6,
      },
    },
  },
};
