import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const estc: StockAnalysis = {
  marketCap: 6.26 * BILLION,
  logo: '',
  name: 'Elastic N.V.',
  description: [],
  ticker: 'estc',
  irAddress: 'https://ir.elastic.co/home/default.aspx',

  shortName: 'Elastic',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 223.94 * MILLION,
      operatingIncome: -45.85 * MILLION,
      sellingGeneralAndAdministrative: 135.51 * MILLION,
    },

    {
      year: 2021,
      quarter: 3,
      totalRevenue: 205.98 * MILLION,
      operatingIncome: -37.17 * MILLION,
      sellingGeneralAndAdministrative: 108.33 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 193.09 * MILLION,
      operatingIncome: -31.03 * MILLION,
      sellingGeneralAndAdministrative: 99.55 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 177.61 * MILLION,
      operatingIncome: -37.08 * MILLION,
      sellingGeneralAndAdministrative: 99.48 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 157.12 * MILLION,
      operatingIncome: -34.46 * MILLION,
      sellingGeneralAndAdministrative: 86.5 * MILLION,
    },
  ],
};
