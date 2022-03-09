import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const mdb: StockAnalysis = {
  marketCap: 18.69 * BILLION,
  logo: '',
  name: 'Mongodb Inc',
  description: [],
  ticker: 'mdb',
  shortName: 'Mongodb',
  irAddress: 'https://investors.mongodb.com/corporate-profile/default.aspx',
  secFilings:
    'https://investors.mongodb.com/financial-information/sec-filings/default.aspx',
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 226.893 * MILLION,
      operatingIncome: -76.77 * MILLION,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001441816/01f4de89-fbb5-4313-8c9d-a61af15139ec.pdf',
      isAnnual: true,
    },

    {
      year: 2021,
      quarter: 3,
      revenue: 198.75 * MILLION,
      operatingIncome: -72.53 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 181.65 * MILLION,
      operatingIncome: -61.45 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 171.0 * MILLION,
      operatingIncome: -59.39 * MILLION,
    },

    {
      year: 2020,
      quarter: 4,
      revenue: 150.77 * MILLION,
      operatingIncome: -58.09 * MILLION,
    },
  ],
};
