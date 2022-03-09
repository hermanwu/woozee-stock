import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const tdoc: StockAnalysis = {
  marketCap: 10.71 * BILLION,
  predications: [
    {
      price: 90,
      start: new Date('2022-3-7'),
      days: 120,
    },
  ],
  logo: '',
  name: 'Teladoc Health',
  description: [],
  ticker: 'tdoc',
  myRating: Rating.Buy,
  shortName: 'Teladoc',
  irAddress: 'https://ir.teladochealth.com/investors/default.aspx',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 554.24 * MILLION,
      operatingIncome: -41.45 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 521.66 * MILLION,
      operatingIncome: -61.43 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 503.14 * MILLION,
      operatingIncome: -110.37 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 453.68 * MILLION,
      operatingIncome: -96.14 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 383.32 * MILLION,
      operatingIncome: -458.61 * MILLION,
    },
  ],
};
