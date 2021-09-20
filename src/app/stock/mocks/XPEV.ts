import { rmbToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const xpev: StockAnalysis = {
  logo: '',
  name: { English: 'XPENG INC.' },
  description: [],
  ticker: 'XPEV',

  // Earnings Report:
  earnings: {
    website: 'https://ir.xiaopeng.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://s25.q4cdn.com/337316314/files/doc_financials/2021/XPeng-Reports-Second-Quarter-2021-Unaudited-Financial-Results.pdf',
        webcast: null,
        marketCap: 33.38 * 1e9,
        revenue: 2950.926 * 1e6 * rmbToDollar,
        operatingIncome: -903.933 * 1e6 * rmbToDollar,
      },
    },
    2020: {
      2: {
        revenue: 590.781 * 1e6 * rmbToDollar,
        operatingIncome: -779.092 * 1e6 * rmbToDollar,
      },
    },
  },
};
