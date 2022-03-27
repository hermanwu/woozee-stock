import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const hood: StockAnalysis = {
  marketCap: 10 * BILLION,
  logo: '',
  name: 'Robinhood',
  description: [],
  ticker: 'hood',
  irAddress: 'https://investors.robinhood.com/overview/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 0 * BILLION,
      operatingIncome: 0 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 362.71 * MILLION,
      operatingIncome: -420.44 * MILLION,
      sellingGeneralAndAdministrative: 473.23 * MILLION,
      notes: [],
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 364.92 * MILLION,
      operatingIncome: -1343.56 * MILLION,
      sellingGeneralAndAdministrative: 985.29 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 565.33 * MILLION,
      operatingIncome: 64.6 * MILLION,
      sellingGeneralAndAdministrative: 306.57 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 522.17 * MILLION,
      operatingIncome: 58.39 * MILLION,
      sellingGeneralAndAdministrative: 305.93 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 317.54 * MILLION,
      operatingIncome: 19.16 * MILLION,
      sellingGeneralAndAdministrative: 185.8 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 269.53 * MILLION,
      operatingIncome: -10.95 * MILLION,
    },
  ],

  risks: [
    {
      name: 'Almost no new user growth in the past three quarters',
      level: RiskLevel.high,
      notes: [
        {
          content: 'last three quarters: 22.5, 22.4, 22.7 (millions)',
        },
      ],
    },
    {
      name: 'New quarter revenue guidance decreases 35%',
      level: RiskLevel.high,
    },
    {
      name: 'Decreased average revenue per user',
      level: RiskLevel.low,
      notes: [
        {
          content: 'from $106 decreases to $64',
        },
      ],
    },
  ],
};
