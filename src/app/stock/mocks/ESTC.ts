import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const estc: StockAnalysis = {
  marketCap: 7.18 * BILLION,
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
      revenue: 223.94 * MILLION,
      operatingIncome: -45.85 * MILLION,
      sellingGeneraAdministrative: 135.51 * MILLION,
    },

    {
      year: 2021,
      quarter: 3,
      revenue: 205.98 * MILLION,
      operatingIncome: -37.17 * MILLION,
      sellingGeneraAdministrative: 108.33 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 193.09 * MILLION,
      operatingIncome: -31.03 * MILLION,
      sellingGeneraAdministrative: 99.55 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 177.61 * MILLION,
      operatingIncome: -37.08 * MILLION,
      sellingGeneraAdministrative: 99.48 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 157.12 * MILLION,
      operatingIncome: -34.46 * MILLION,
      sellingGeneraAdministrative: 86.5 * MILLION,
    },
  ],
};
