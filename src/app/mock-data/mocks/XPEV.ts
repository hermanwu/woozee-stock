import { rmbToDollar } from 'src/app/shared/currency';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const xpev: StockAnalysis = {
  logo: '',
  name: 'XPENG INC.',
  description: [],
  ticker: 'XPEV',
  displayName: 'XPENG',
  marketCap: 24 * BILLION,
  irAddress: 'https://ir.xiaopeng.com/overview/default.aspx',
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 5719.92 * MILLION * rmbToDollar,
      operatingIncome: -1802.64 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 3761.28 * MILLION * rmbToDollar,
      operatingIncome: -1443.16 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 2950.93 * MILLION * rmbToDollar,
      operatingIncome: -903.93 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 2851.35 * MILLION * rmbToDollar,
      operatingIncome: -1121.18 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 1990.12 * MILLION * rmbToDollar,
      operatingIncome: -1744.18 * MILLION * rmbToDollar,
    },
  ],
};
