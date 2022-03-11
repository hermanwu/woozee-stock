import { news } from 'src/app/media/news/news.const';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const fb: StockAnalysis = {
  marketCap: 518.55 * BILLION,
  predications: [
    {
      price: 140,
      days: 120,
      start: new Date('2022-3-7'),
    },
  ],
  logo: '',
  name: 'Meta',
  description: [],
  ticker: 'fb',
  lastUpdated: new Date('2021-08-23'),
  irAddress: 'https://investor.fb.com/home/default.aspx',

  risks: [
    {
      name: 'Financial Health',
      level: RiskLevel.low,
      type: FactType.profit,
      notes: [
        {
          content: 'Earning report: No debt, health cash flow',
          link: 'https://s21.q4cdn.com/399680738/files/doc_financials/2021/q4/FB-12.31.2021-Exhibit-99.1-Final.pdf',
        },
        {
          content:
            'Quarterly loss from metaverse investment totals $3.3 billion',
        },
      ],
    },
    {
      name: 'Value',
      level: RiskLevel.medium,
      notes: [
        {
          content:
            'PE Ratio 180+ (US market: 16.3, Auto industry: 12.8, Tech industry: 25.1)',
        },
        {
          content: 'PEG Ratio is 8.82 (Apple: 2.1)',
        },
      ],
    },
    {
      name: 'Future Growth',
      level: RiskLevel.medium,
      notes: [news[2]],
    },
    {
      name: 'Management',
      level: RiskLevel.low,
      notes: [
        {
          content: "Elon Musk's health and focus",
        },
        {
          content: 'Overpromise',
          notes: [
            { content: 'However, he would achieve the goal eventually.' },
          ],
        },
      ],
    },
    {
      name: 'Investors Sentiment',
      level: RiskLevel.low,
      notes: [
        {
          content:
            'Elon musk has many fans. General public owns 36.1% of the stocks (GM 12.8%)',
        },
        {
          content:
            'Institution do not like the factor Tesla will not be focusing on auto production in 2022.',
          notes: [
            {
              content:
                'Elon was talking mainly about FSD and robot during earning call',
            },
          ],
        },
        {
          content: '17 out of 31 analysts on Wall Street give a BUY rating.',
          notes: [
            {
              content: '7 with HOLD rating and 7 with SELL rating.',
            },
          ],
        },
      ],
    },
    {
      name: 'Competitors',
      level: RiskLevel.medium,
      notes: [news[3]],
    },
    {
      name: 'Technical Chart',
      level: RiskLevel.low,
      notes: [
        {
          content: 'RSI is below average',
        },
        {
          content: 'Did not break 200 SMA',
        },
      ],
    },
    {
      name: 'Macroeconomics',
      level: RiskLevel.medium,
      notes: [],
    },
  ],
  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 33671.0 * MILLION,
      operatingIncome: 12585 * MILLION,
      isAnnual: true,
    },

    {
      year: 2021,
      quarter: 3,
      revenue: 29010.0 * MILLION,
      operatingIncome: 21031 * MILLION,
      netIncome: 10423 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 29077.0 * MILLION,
      operatingIncome: 12367 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 26171.0 * MILLION,
      operatingIncome: 11378 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 28072.0 * MILLION,
      operatingIncome: 12775 * MILLION,
    },
  ],
};
