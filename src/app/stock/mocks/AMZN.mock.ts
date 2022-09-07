import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { allNews } from 'src/app/media/news/news.const';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import {
  BILLION,
  MILLION,
  TRILLION,
} from 'src/app/shared/numbers/number.model';
import { Source } from '../models/news-source.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const amznRisks = [
  {
    uuid: 'az-id-1',
    name: 'Slow revenue growth last quarter',
    type: FactType.growth,
    level: RiskLevel.longTerm,
    notes: [
      {
        content:
          'Net sales increased 9% to $137.4 billion in the fourth quarter, compared with $125.6 billion in fourth quarter 2020.',
        source: Source.earningReport,
      },
    ],
  },
  {
    uuid: 'az-id-2',
    name: 'Operating expense increases faster than gross profit',
    type: FactType.profit,
    level: RiskLevel.shortTerm,
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
    uuid: 'az-id-3',
    name: 'Future growth slows',
    level: RiskLevel.longTerm,
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
];

export const amznCatalysts = [
  {
    uuid: 'az-id-2',
    name: 'Service sales revenue is more than .',
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
    date: new Date('2022-03-18'),
  },

  {
    uuid: 'az-id-3',
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
    date: new Date('2022-03-18'),
  },
];

export const amzn: StockAnalysis = {
  ticker: 'amzn',
  name: 'Amazon',
  description: [],
  logo: 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG',
  irAddress: 'https://ir.aboutamazon.com/overview/default.aspx',
  marketCap: 1.234 * TRILLION,
  shortName: 'Amazon',
  riskUuids: amznRisks.map((risk) => risk.uuid),
  catalystUuids: amznCatalysts.map((risk) => risk.uuid),

  business: {
    markets: [
      IndustryType.ecommerce,
      IndustryType.cloudService,
      IndustryType.adTech,
      IndustryType.Retails,
      IndustryType.datacenter,
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

  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 121.334 * BILLION,
      costOfRevenue: 66424 * MILLION,
      operatingIncome: 3317 * MILLION,
      netIncome: -2028 * MILLION,
      forecastRevenueBottom: 125 * BILLION,
      forecastRevenueTop: 130 * BILLION,
      date: convertDateToUTC(new Date('2022-7-28')),
      stats: [
        {
          name: 'Sale Categories',
          details: [
            {
              name: 'Net Product Sales',
              value: 56575 * MILLION,
            },
            {
              name: 'Net Service Sales',
              value: 64659 * MILLION,
            },
          ],
        },
        {
          name: 'Segments',
          details: [
            {
              name: 'North America Sales',
              value: 74.43 * BILLION,
            },
            {
              name: 'International Sales',
              value: 27.065 * BILLION,
            },
            {
              name: 'AWS Sales',
              value: 19.739 * BILLION,
            },
          ],
        },
        {
          name: 'Advertising Service',
          value: 8.757 * BILLION,
        },

        {
          name: 'Operating expenses',
          details: [
            {
              name: 'Cost of sales',
              value: 66.424 * BILLION,
            },
            {
              name: 'Fulfillment',
              value: 20.342 * BILLION,
            },
            {
              name: 'Technology and content',
              value: 18.072 * BILLION,
            },
            {
              name: 'Sales and marketing',
              value: 10.086 * BILLION,
            },
            {
              name: 'General and administrative',
              value: 2.903 * BILLION,
            },
          ],
        },
      ],
      pressReleaseLink:
        'https://s2.q4cdn.com/299287126/files/doc_financials/2022/q2/Q2-2022-Amazon-Earnings-Release.pdf',
      slidesLink:
        'https://s2.q4cdn.com/299287126/files/doc_financials/2022/q2/Webslides_Q222_Final.pdf',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 116444 * MILLION,
      costOfRevenue: 66499 * MILLION,
      operatingIncome: 3669 * MILLION,
      netIncome: -3844 * MILLION,
      pressReleaseLink:
        'https://s2.q4cdn.com/299287126/files/doc_financials/2022/q1/Q1-2022-Amazon-Earnings-Release.pdf',
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 137412 * MILLION,
      costOfRevenue: 82835 * MILLION,
      grossProfit: 54577 * MILLION,
      sellingGeneralAndAdministrative: 35780 * MILLION,
      researchAndDevelopment: 15313 * MILLION,
      totalOperatingExpense: 133952 * MILLION,
      operatingIncome: 3460 * MILLION,
      interestIncomeNet: 11183 * MILLION,
      otherIncomeNet: 291 * MILLION,
      netIncomeBeforeTaxes: 14934 * MILLION,
      provisionForIncomeTaxes: 612 * MILLION,
      netIncome: 14323 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 110812 * MILLION,
      costOfRevenue: 62930 * MILLION,
      grossProfit: 47882 * MILLION,
      sellingGeneralAndAdministrative: 28661 * MILLION,
      researchAndDevelopment: 14380 * MILLION,
      totalOperatingExpense: 105960 * MILLION,
      operatingIncome: 4852 * MILLION,
      interestIncomeNet: -610 * MILLION,
      otherIncomeNet: 73 * MILLION,
      netIncomeBeforeTaxes: 4315 * MILLION,
      provisionForIncomeTaxes: 1155 * MILLION,
      netIncome: 3156 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 113080 * MILLION,
      costOfRevenue: 64176 * MILLION,
      grossProfit: 48904 * MILLION,
      sellingGeneralAndAdministrative: 27320 * MILLION,
      researchAndDevelopment: 13871 * MILLION,
      totalOperatingExpense: 105378 * MILLION,
      operatingIncome: 7702 * MILLION,
      interestIncomeNet: -62 * MILLION,
      otherIncomeNet: 994 * MILLION,
      netIncomeBeforeTaxes: 8634 * MILLION,
      provisionForIncomeTaxes: 868 * MILLION,
      netIncome: 7778 * MILLION,
      stats: [
        {
          name: 'Sale Categories',
          details: [
            {
              name: 'Net Product Sales',
              value: 58004 * MILLION,
            },
            {
              name: 'Net Service Sales',
              value: 55076 * MILLION,
            },
          ],
        },
        {
          name: 'Segments',
          details: [
            {
              name: 'North America Sales',
              value: 67.55 * BILLION,
            },
            {
              name: 'International Sales',
              value: 30.721 * BILLION,
            },
            {
              name: 'AWS Sales',
              value: 14.809 * BILLION,
            },
          ],
        },
        {
          name: 'Advertising Service',
          value: 7.451 * BILLION,
        },

        {
          name: 'Operating expenses',
          details: [
            {
              name: 'Cost of sales',
              value: 64.176 * BILLION,
            },
            {
              name: 'Fulfillment',
              value: 17.638 * BILLION,
            },
            {
              name: 'Technology and content',
              value: 13.871 * BILLION,
            },
            {
              name: 'Sales and marketing',
              value: 7.524 * BILLION,
            },
            {
              name: 'General and administrative',
              value: 2.158 * BILLION,
            },
          ],
        },
      ],
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 108518 * MILLION,
      costOfRevenue: 62403 * MILLION,
      grossProfit: 46115 * MILLION,
      sellingGeneralAndAdministrative: 24724 * MILLION,
      researchAndDevelopment: 12488 * MILLION,
      totalOperatingExpense: 99653 * MILLION,
      operatingIncome: 8865 * MILLION,
      interestIncomeNet: -401 * MILLION,
      otherIncomeNet: 1804 * MILLION,
      netIncomeBeforeTaxes: 10268 * MILLION,
      provisionForIncomeTaxes: 2156 * MILLION,
      netIncome: 8107 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 125555 * MILLION,
      costOfRevenue: 79284 * MILLION,
      grossProfit: 46271 * MILLION,
      sellingGeneralAndAdministrative: 27845 * MILLION,
      researchAndDevelopment: 12049 * MILLION,
      totalOperatingExpense: 118682 * MILLION,
      operatingIncome: 6873 * MILLION,
      interestIncomeNet: 168 * MILLION,
      otherIncomeNet: 724 * MILLION,
      netIncomeBeforeTaxes: 7765 * MILLION,
      provisionForIncomeTaxes: 565 * MILLION,
      netIncome: 7222 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 96145 * MILLION,
      costOfRevenue: 57106 * MILLION,
      grossProfit: 39039 * MILLION,
      sellingGeneralAndAdministrative: 21807 * MILLION,
      researchAndDevelopment: 10976 * MILLION,
      totalOperatingExpense: 89951 * MILLION,
      operatingIncome: 6194 * MILLION,
      interestIncomeNet: -160 * MILLION,
      otherIncomeNet: 775 * MILLION,
      netIncomeBeforeTaxes: 6809 * MILLION,
      provisionForIncomeTaxes: 569 * MILLION,
      netIncome: 6331 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 88912 * MILLION,
      costOfRevenue: 52660 * MILLION,
      grossProfit: 36252 * MILLION,
      sellingGeneralAndAdministrative: 19731 * MILLION,
      researchAndDevelopment: 10388 * MILLION,
      totalOperatingExpense: 83069 * MILLION,
      operatingIncome: 5843 * MILLION,
      interestIncomeNet: -33 * MILLION,
      otherIncomeNet: 411 * MILLION,
      netIncomeBeforeTaxes: 6221 * MILLION,
      provisionForIncomeTaxes: 984 * MILLION,
      netIncome: 5243 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 75452 * MILLION,
      costOfRevenue: 44257 * MILLION,
      grossProfit: 31195 * MILLION,
      sellingGeneralAndAdministrative: 17811 * MILLION,
      researchAndDevelopment: 9325 * MILLION,
      totalOperatingExpense: 71463 * MILLION,
      operatingIncome: 3989 * MILLION,
      interestIncomeNet: -231 * MILLION,
      otherIncomeNet: -375 * MILLION,
      netIncomeBeforeTaxes: 3383 * MILLION,
      provisionForIncomeTaxes: 744 * MILLION,
      netIncome: 2535 * MILLION,
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

  news: [allNews['4']],
};
