import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const hood: StockAnalysis = {
  logo: '',
  name: 'Robinhood',
  description: [],
  ticker: 'hood',

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

  // Earnings Report:
  earnings: {
    website: 'https://investors.robinhood.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://s28.q4cdn.com/948876185/files/doc_financials/2021/q2/fed1afc9-fc82-4a7a-8735-caed2497fbd3.pdf',
        presentation:
          'https://s28.q4cdn.com/948876185/files/doc_financials/2021/q2/Q2-2021-Investor-Presentation-(3).pdf',
        press:
          'https://s28.q4cdn.com/948876185/files/doc_financials/2021/q2/Q2-2021-Press-Release-(1).pdf',
        webcast: 'https://edge.media-server.com/mmc/p/xhyx7r7p',
        marketCap: 41.62 * 1e9,
        revenue: 565333 * 1e3,
        operatingIncome: -464158 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 244211 * 1e3,
        operatingIncome: 57584 * 1e3,
      },
    },
  },
};
