import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const team: StockAnalysis = {
  logo: '',
  name: 'Atlassian Corporation Plc',
  description: [],
  ticker: 'team',

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

  // Earnings Report:
  earnings: {
    website: 'https://investors.atlassian.com/investors-overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://s2.q4cdn.com/141359120/files/doc_financials/2021/q4/team-Q4-2021-Earnings-Release.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 96.15 * 1e9,
        revenue: 559.539 * 1e6,
        operatingIncome: -7.526 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 430.476 * 1e6,
        operatingIncome: -3.28 * 1e6,
      },
    },
  },
};
