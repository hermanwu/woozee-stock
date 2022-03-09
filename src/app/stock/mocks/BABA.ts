import { rmbToDollar } from 'src/app/shared/currency';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const baba: StockAnalysis = {
  marketCap: 277.39 * BILLION,
  logo: '',
  name: 'Alibaba',
  description: [],
  ticker: 'baba',
  irAddress: 'https://www.alibabagroup.com/en/ir/home',

  competitors: ['amzn'],
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 242580 * MILLION * rmbToDollar,
      operatingIncome: 7068.0 * MILLION * rmbToDollar,
      isAnnual: true,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 200690.0 * MILLION * rmbToDollar,
      operatingIncome: 15006.0 * MILLION * rmbToDollar,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 205740.0,
      operatingIncome: 30847.0 * MILLION * rmbToDollar,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 187395.0 * MILLION * rmbToDollar,
      operatingIncome: -7663.0 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 221084.0 * MILLION * rmbToDollar,
      operatingIncome: 49002.0 * MILLION * rmbToDollar,
    },
  ],
};
