import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const team: StockAnalysis = {
  marketCap: 64 * BILLION,
  logo: '',
  name: 'Atlassian Corporation Plc',
  description: [],
  ticker: 'team',
  shortName: 'Atlassian',

  risks: [
    {
      name: 'no income',
      level: RiskLevel.medium,
    },
    {
      name: 'High price to sales ratio: 33.73',
      level: RiskLevel.medium,
      notes: [
        {
          content: 'ServiceNow: 19.29, Salesforce: 8.88',
        },
      ],
    },
    {
      name: 'Marketing and sales, General and administrative cost increases (+74% & +73%)',
      level: RiskLevel.low,
      notes: [
        {
          content: 'Sales only increases 36%',
        },
      ],
    },
  ],

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 688.53 * MILLION,
      operatingIncome: -66.72 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 614.02 * MILLION,
      operatingIncome: 39.65 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 559.54 * MILLION,
      operatingIncome: -7.53 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 568.73 * MILLION,
      operatingIncome: 69.52 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 501.36 * MILLION,
      operatingIncome: 27.71 * MILLION,
    },
  ],
};
