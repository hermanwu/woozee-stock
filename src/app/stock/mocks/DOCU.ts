import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const docu: StockAnalysis = {
  marketCap: 19.51 * BILLION,
  logo: '',
  name: 'DOCUSIGN, INC.',
  description: [],
  ticker: 'docu',
  irAddress: 'https://investor.docusign.com/investors/home/default.aspx',
  shortName: 'Docusign',

  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      revenue: 545.46 * MILLION,
      operatingIncome: -3.36 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 511.84 * MILLION,
      operatingIncome: -22.61 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 469.08 * MILLION,
      operatingIncome: -10.74 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 430.9 * MILLION,
      operatingIncome: -58.65 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 382.92 * MILLION,
      operatingIncome: -48.47 * MILLION,
    },
  ],
};
