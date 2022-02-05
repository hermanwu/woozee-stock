import { news } from 'src/app/media/news/news.const';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { Source } from 'src/app/shared/data/source.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const amzn: StockAnalysis = {
  ticker: 'amzn',
  name: 'Amazon',
  description: ['美国最大电商'],
  logo: 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG',
  irAddress: 'https://ir.aboutamazon.com/overview/default.aspx',

  risks: [
    {
      name: 'Financial Health',
      level: RiskLevel.noRisk,
      notes: [
        {
          content:
            'Net sales increased 9% to $137.4 billion in the fourth quarter, compared with $125.6 billion in fourth quarter 2020.',
          source: Source.earningReport,
        },
        {
          content:
            'Operating income decreased to $3.5 billion in the fourth quarter, compared with $6.9 billion in fourth quarter 2020',
          source: Source.earningReport,
        },
        {
          content:
            'Net income increased to $14.3 billion in the fourth quarter ($11.8 billion included in non-operating income from our common stock investment in Rivian Automotive, Inc)',
          source: Source.earningReport,
        },
        {
          content:
            'Stockholders equity increases 48% (93 million -> 138 million)',
        },
      ],
    },
    {
      name: 'Value Estimation',
      level: RiskLevel.medium,
      notes: [
        {
          content: 'Market Cap: 1.53T (Apple 2.83T, Google 1.9T, Tesla 0.9T)',
        },
        {
          content:
            'Operating Income: 3.5B (Apple 41B, Google 22B, Tesla: 0.6B)',
        },
        {
          content: 'P/E: 54.3 (Apple 28.71, Google 25.43)',
        },
      ],
    },
    {
      name: 'Future Growth',
      level: RiskLevel.low,
      notes: [
        {
          content:
            'Net sales are expected to be between $112.0 billion and $117.0 billion, or to grow between 3% and 8% compared with first quarter 2021.',
          notes: [
            {
              content: 'Online store 1% growth (total 66B)',
            },
            {
              content:
                'Advertising 33% growth (total 9B) vs 66% same quarter last year ',
            },
            {
              content:
                'AWS sales 40% growth (total 17.7B) vs 28% same quarter last year',
            },
          ],
        },
        {
          content:
            'Operating income is expected to be between $3.0 billion and $6.0 billion, compared with $8.9 billion in first quarter 2021.',
          notes: [
            {
              content:
                'Amazon prime price will increase from 119 to 139 (16.8% increase) => 200m * 20 = 4 billion additional income.',
            },
          ],
        },
      ],
    },
    {
      name: 'Management and Execution',
      level: RiskLevel.noRisk,
      notes: [
        {
          content: '3.8 out of 5 stars on website Glassdoor',
        },
        {
          content:
            'Historically, Amazon has been growing quickly despite having the worst reputation among all the big Tech firms',
        },
        {
          content:
            'New CEO is an Amazon veteran who is used to be in charge of AWS',
        },
        {
          content:
            'New CEO might create a better working environment and reputation for Amazon',
        },
      ],
    },

    {
      name: 'Competitor',
      level: RiskLevel.medium,
      notes: [
        {
          content: 'Shopping business: Walmart, Target',
          notes: [
            {
              content: '1% Online store growth is too slow',
            },
          ],
        },
        {
          content: 'Cloud business: Google, Microsoft',
          notes: [
            {
              content: 'AWS: 17.7B -> 40% growth',
            },
            {
              content: 'Google Cloud: 5.54B -> 44.6% growth',
            },
            {
              content: 'Azure -> 46% growth',
            },
          ],
        },
        {
          content: 'Advertising business: Google, Facebook, Tiktok',
          notes: [
            {
              content: 'Amazon: 9.716B -> 33% growth',
            },
            {
              content: 'Youtube Ads: 8.633B -> 25.3% growth',
            },
            {
              content: 'Google Advertising 61.239B -> 32.5% growth',
            },
            {
              content: 'Facebook Advertising 32.639B -> 15.5% growth',
            },
          ],
        },
      ],
    },
    {
      name: 'Analysts Sentiment',
      level: RiskLevel.noRisk,
      notes: [
        {
          content: '96% of 51 analysts gives a Buy ratings',
          source: 'Morningstar.com',
        },
        {
          content:
            'Analysts give average price target 4190 (Min 3600, Max 4550)',
          source: 'TipRank.com',
        },
      ],
    },
    {
      name: 'Technical Chart',
      level: RiskLevel.low,
      notes: [
        {
          content: 'RSI is below average currently (was oversold in past week)',
        },
        {
          content: 'Still below 200 day moving average after rebound',
        },
        {
          content: 'Has stagnated since Jun 2020',
        },
      ],
    },
    {
      name: 'Macro Market',
      level: RiskLevel.medium,
      notes: [
        {
          content: 'Inflation could decrease consumer spending',
        },
        {
          content: 'Post COVID reopening might reduce online shopping demand',
        },
        {
          content:
            'Labor shortage would increase cost and affect Amazon front worker',
        },
      ],
    },
  ],

  stats: {
    price: 3280.71,
    marketCap: 1658.45,
    revenue: '1.42B',
    PE: 0,
    PS: 16.6,
    quickRatio: 1.1,
    currentRatio: 1.2,
  },
  earnings: {
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        marketCap: 1.67e12,
        revenue: 113080e6,
        operatingIncome: 7702e6,
        unit: 1e6,
      },
    },
    2020: {
      2: {
        revenue: 88912e6,
        operatingIncome: 5843e6,
        unit: 1e6,
      },
    },
  },
  products: [
    {
      name: 'Overview',
      url: 'https://www.minterest.com/wp-content/uploads/2016/09/All-Things-Amazon.png',
    },
    {
      name: 'Amazon Website',
      url: 'https://cdn.vox-cdn.com/thumbor/5ONwTrdmwOIwMjDm_m7sIEdR_7M=/0x0:1010x673/1820x1213/filters:focal(0x0:1010x673):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/45176182/Screen_Shot_2015-01-07_at_11.05.22_PM.0.0.png',
    },
    {},
    {},
  ],

  news: [news['4']],
};
