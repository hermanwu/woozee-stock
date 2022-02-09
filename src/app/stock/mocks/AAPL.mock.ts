import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const aapl: StockAnalysis = {
  name: 'Apple',
  description: [],
  trends: [],
  logo: '',
  ticker: 'aapl',
  ceoQuote: [],
  advantage: [],
  irAddress: 'https://investor.apple.com/investor-relations/default.aspx',
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    website: 'https://investor.apple.com/investor-relations/default.aspx',
    latestReportQuarter: ['2021', '3'],
    2021: {
      3: {
        '10q10k':
          'https://s2.q4cdn.com/470004039/files/doc_financials/2021/q3/_10-Q-Q3-2021-(As-Filed).pdf',
        marketCap: 2.46 * 1e12,
        revenue: 81434e6,
        operatingIncome: 24126e6,
      },
    },
    2020: {
      3: {
        revenue: 59685e6,
        operatingIncome: 13091e6,
      },
    },
  },

  risks: [
    {
      name: 'iPad sales decreases',
      level: RiskLevel.low,
      notes: [
        {
          content:
            'iPad sales decreased by 14% year over year in the first quarter of 2021. Apple says that the drop in sales performance is due to supply constraints',
        },
        {
          content:
            'could be related to demand decreases (like Microsoft surface',
        },
        {
          content: '~5% of total sale',
        },
      ],
    },
    {
      name: 'Supply chain constraint',
      level: RiskLevel.low,
      notes: [
        {
          content:
            'Based on the earning result, apple was not affected severely',
        },
        {
          content: 'Hard to predict',
        },
      ],
    },
    {
      name: 'High valuation with slow down revenue growth',
      level: RiskLevel.medium,
      notes: [
        {
          content: 'PEG ratio: 3.35',
        },
        {
          content: 'Microsoft: 2.53, Google: 0.65, Amazon: 1.65',
        },
      ],
    },
  ],
};
