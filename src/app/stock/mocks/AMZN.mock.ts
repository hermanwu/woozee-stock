import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { MarketType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { news } from 'src/app/media/news/news.const';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { Source } from 'src/app/shared/data/source.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const amzn: StockAnalysis = {
  ticker: 'amzn',
  name: 'Amazon',
  description: [],
  logo: 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG',
  irAddress: 'https://ir.aboutamazon.com/overview/default.aspx',
  marketCap: 1.68 * 1e12,
  competitors: ['tgt'],

  risks: [
    {
      name: 'Slow revenue growth last quarter',
      type: FactType.growth,
      level: RiskLevel.high,
      notes: [
        {
          content:
            'Net sales increased 9% to $137.4 billion in the fourth quarter, compared with $125.6 billion in fourth quarter 2020.',
          source: Source.earningReport,
        },
      ],
    },
    {
      name: 'Operating expense increases faster than gross profit',
      type: FactType.profit,
      level: RiskLevel.medium,
      notes: [
        {
          content:
            'Operating expense increases 30% last quarter while gross profit only increases 18%',
          source: Source.earningReport,
        },
        {
          content:
            'Net income increased to $14.3 billion in the fourth quarter ($11.8 billion included in non-operating income from our common stock investment in Rivian Automotive, Inc)',
          source: Source.earningReport,
        },
      ],
    },
    {
      name: 'Future growth slows',
      level: RiskLevel.high,
      type: FactType.growth,
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
      name: 'United States labor shortage and supply chain constraints',
      level: RiskLevel.medium,
      type: FactType.macro,
    },
  ],

  catalysts: [
    {
      name: 'Stock will be 20-to-1 split on June 3',
      level: CatalystLevel.moderate,
      type: FactType.sentiment,
    },

    {
      name: 'Cloud business still keep 40% growth rate.',
      level: CatalystLevel.strong,
      type: FactType.growth,
      notes: [
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
      ],
    },

    {
      name: 'Advertising business is booming.',
      level: CatalystLevel.moderate,
      type: FactType.growth,
      notes: [
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
  ],

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 137.412 * BILLION,
      grossProfit: 54.577 * BILLION,
      operatingIncome: 3460 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 110.812 * BILLION,
      grossProfit: 47.882 * BILLION,
      operatingIncome: 4852 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 113.08 * BILLION,
      grossProfit: 48.904 * BILLION,
      operatingIncome: 7702 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 108.518 * BILLION,
      grossProfit: 46.115 * BILLION,
      operatingIncome: 8865 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 125555 * MILLION,
      grossProfit: 46.271 * BILLION,
      operatingIncome: 6873 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 96.145 * BILLION,
      grossProfit: 39.039 * BILLION,
      operatingIncome: 4852 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 88.912 * BILLION,
      grossProfit: 36.252 * BILLION,
      operatingIncome: 7702 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 75.452 * BILLION,
      grossProfit: 31.195 * BILLION,
      operatingIncome: 8865 * MILLION,
    },
  ],

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

  business: {
    markets: [
      {
        type: MarketType.ecommerce,
      },
      {
        type: MarketType.datacenter,
      },
    ],

    revenues: [
      {
        name: 'Datacenter',
        amount: 5 * BILLION,
      },
      {
        name: 'Ecommerce',
        amount: 5 * BILLION,
      },
      {
        name: 'Advertising',
        amount: 5 * BILLION,
      },
    ],

    competitiveAdvantages: [
      { type: StrategyType.efficientScale },
      { type: StrategyType.userData },
    ],

    growthStrategy: [
      'Continue grow AWS',
      'Continue invest in entertainment industry',
    ],
  },
};
