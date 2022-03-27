import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const fvrr: StockAnalysis = {
  marketCap: 2.71 * BILLION,
  logo: '',
  name: 'Fiverr International Ltd',
  description: [],
  ticker: 'fvrr',
  shortName: 'Fiverr',
  irAddress: 'https://investors.fiverr.com/investor-overview/default.aspx',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 79.75 * MILLION,
      operatingIncome: -13.88 * MILLION,
      sellingGeneralAndAdministrative: 56.59 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 74.32 * MILLION,
      operatingIncome: -9.29 * MILLION,
      sellingGeneralAndAdministrative: 49.88 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 75.26 * MILLION,
      operatingIncome: -8.34 * MILLION,
      sellingGeneralAndAdministrative: 49.03 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 68.32 * MILLION,
      operatingIncome: -13.82 * MILLION,
      sellingGeneralAndAdministrative: 51.71 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 55.88 * MILLION,
      operatingIncome: -3.77 * MILLION,
      sellingGeneralAndAdministrative: 36.39 * MILLION,
    },
  ],
};
