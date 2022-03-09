import { rmbToDollar } from 'src/app/shared/currency';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const xpev: StockAnalysis = {
  logo: '',
  name: 'XPENG INC.',
  description: [],
  ticker: 'XPEV',
  shortName: 'XPENG',
  marketCap: 24 * BILLION,
  irAddress: 'https://ir.xiaopeng.com/overview/default.aspx',
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      revenue: 5719.92 * MILLION * rmbToDollar,
      operatingIncome: -1802.64 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 3761.28 * MILLION * rmbToDollar,
      operatingIncome: -1443.16 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 2950.93 * MILLION * rmbToDollar,
      operatingIncome: -903.93 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 2851.35 * MILLION * rmbToDollar,
      operatingIncome: -1121.18 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 1990.12 * MILLION * rmbToDollar,
      operatingIncome: -1744.18 * MILLION * rmbToDollar,
    },
  ],
};
