import { MarketType } from 'src/app/facts/data/area.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Source } from '../models/news-source.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const snapRisks = [
  {
    name: 'Business Moat',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content:
          'Provide advanced technology to end users, such as augmented reality',
        notes: [
          { content: 'Does not have a strong demands with daily users' },
          { content: 'Competitors: TikTok, Apple, Facebook' },
        ],
      },
      {
        content: 'Popular content from influencers, broadcasters, celebrities',
        notes: [
          { content: 'Slow growth: peoples screen time is limited.' },
          { content: 'A low margin and competitive areas' },
          { content: 'Competitors: Netflix, Disney, etc' },
        ],
      },
      {
        content: 'Efficient marketing tools',
        notes: [
          {
            content:
              'Could be limited by laws and regulations such as Apple privacy rules',
          },
          {
            content:
              'Need to compete with other technology company such as TikTok, Google, Facebook, Twitter',
          },
        ],
      },
    ],
  },
  {
    name: 'Revenue and Growth',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content: 'Revenue +42% (0.91B -> 1.3B)',
        source: Source.earningReport,
        notes: [
          {
            content: 'Amazon advertising +33% (9.716B)',
          },
          {
            content: 'Youtube Ads: +25.3% (8.633B)',
          },
          {
            content: 'Google advertising +32.5% (61.239B)',
          },
          {
            content: 'Facebook advertising +15.5% (32.639B)',
          },
        ],
      },
      {
        content: 'Daily active user growth in North America is low.',
        notes: [
          {
            content: 'Daily Active User +20% (265M ->319M)',
          },
          {
            content: 'North America +6%',
          },
          {
            content: 'Europe +11%',
          },
          {
            content: 'Others +41%',
          },
          {
            content: '',
          },
        ],
      },
      {
        content: 'Revenue per user growth is in other region is low',
        notes: [
          {
            content: 'Average revenue per user +18% (3.44 -> 4.06)',
          },
          {
            content: 'North America +33% (7.19 -> 9.58)',
          },
          {
            content: 'Europe +33% (1.91 -> 2.54)',
          },
          {
            content: 'Others +1% (1.11 -> 1.12)',
          },
        ],
      },

      {
        content: '2022 Q1 outlook',
        notes: [
          {
            content:
              'revenue between $1,030 million and $1,080 million. (34% with 770m -> 1030m)',
          },
          {
            content:
              'Adjusted EBITDA is estimated to be approximately breakeven',
          },
        ],
      },
    ],
  },
  {
    name: 'Income & Profitability',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content:
          'Post first positive net income but operating income is still negative.',
        source: Source.earningReport,
      },
      {
        content: 'Quarterly operating margin is still negative (-11% -> -2%)',
        notes: [
          {
            content: 'Facebook operating margin (33%)',
          },
          {
            content: 'Google operating margin (27.4%)',
          },
          {
            content:
              'This could be a headwind during Fed rate increasing cycle.',
          },
        ],
      },
    ],
  },
  {
    name: 'Stock Valuation',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content: 'Market Cap: 39.44B (Google: 1842B, Facebook: 627B)',
      },
      {
        content: 'Revenue: 1.3B (Google 75B, Facebook: 33.67B)',
      },
    ],
  },
  // {
  //   name: 'Management & Execution',
  //   level: RiskLevel.shortTerm,
  //   notes: [
  //     {
  //       content: 'Glassdoor: 4 starts',
  //     },
  //     {
  //       content:
  //         'Historically, Amazon has been growing quickly despite having the worst reputation among all the big Tech firms',
  //     },
  //     {
  //       content:
  //         'New CEO is an Amazon veteran who is used to be in charge of AWS',
  //     },
  //     {
  //       content:
  //         'New CEO might create a better working environment and reputation for Amazon',
  //     },
  //   ],
  // },
  {
    name: 'Investors Sentiment',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content: '18 Buy, 9 Hold, 0 Sell',
        source: 'TipRanks.com',
      },
      {
        content: 'Analysts give average price target 55.2 (Min 36, Max 93)',
        source: 'TipRanks.com',
      },
    ],
  },
  // {
  //   name: 'Technical Trends',
  //   level: RiskLevel.shortTerm,
  //   notes: [
  //     {
  //       content: 'RSI is below average currently (was oversold in past week)',
  //     },
  //     {
  //       content: 'Still below 200 day moving average after rebound',
  //     },
  //     {
  //       content: 'Has stagnated since Jun 2020',
  //     },
  //   ],
  // },
  // {
  //   name: 'Macro Market',
  //   level: RiskLevel.shortTerm,
  //   notes: [
  //     {
  //       content: 'Fed rate increase would affect stocks with no income.',
  //     },
  //   ],
  // },
];

export const snap: StockAnalysis = {
  marketCap: 45 * BILLION,
  business: {
    markets: [MarketType.adTech, MarketType.social],
  },

  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Snapchat--Logo.png/1024px-Snapchat--Logo.png',
  name: 'Snap Inc.',
  shortName: 'Snap',
  description: [
    {
      content:
        'Snap  Inc. is a  camera  company.  We believe  that  reinventing  the camera  represents  our  greatest  opportunity  to  improve  the  way that  people  live  and communicate.  We  contribute  to human  progress  by  empowering  people  to  express themselves, live in the moment, learn about the world, and have fun together.',
    },
    {
      content:
        'Our flagship product, Snapchat, is a camera application that helps people communicate visually with friends and family through short videos and images called Snaps. By opening directly to the camera, we empower users to express themselves instantly. Snaps are deleted by default, so there is less pressure to look pretty or perfect when creating and sending images on Snapchat. By reducing the friction typically associated with creating and sharing content, Snapchat has become one of the most used cameras in the world.',
    },
    {
      content:
        'In the way that the flashing cursor became the starting point for most products on desktop computers, we believe the camera screen will be the starting point for most products on smartphones. This is because images created by smartphone cameras contain more context and richer information than other forms of input like text entered on a keyboard. Given the magnitude of this opportunity, we invest heavily and take big risks in an attempt to create innovative and differentiated camera products that are better able to reflect and improve our life experiences.',
    },
  ],
  ticker: 'snap',
  lastUpdated: new Date('2021-08-22'),
  irAddress: 'https://investor.snap.com/overview/default.aspx',

  // Demand
  painPoint: [''],

  earningsReports: [
    {
      reportLink:
        'https://s25.q4cdn.com/442043304/files/doc_financials/2021/q4/Snap-10K-(2021).pdf',
      pressReleaseLink:
        "https://s25.q4cdn.com/442043304/files/doc_financials/2021/q4/Q4'21-Earnings-Release.pdf",
      slidesLink:
        "https://s25.q4cdn.com/442043304/files/doc_financials/2021/q4/Q4'21-Earnings-Slides.pdf",

      year: 2021,
      quarter: 4,
      totalRevenue: 1297 * MILLION,
      costOfRevenue: 449 * MILLION,
      grossProfit: 848 * MILLION,
      sellingGeneralAndAdministrative: 429 * MILLION,
      researchAndDevelopment: 414 * MILLION,
      totalOperatingExpense: 1323 * MILLION,
      operatingIncome: -25 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 63 * MILLION,
      netIncomeBeforeTaxes: 35 * MILLION,
      provisionForIncomeTaxes: 13 * MILLION,
      netIncome: 22 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1067 * MILLION,
      costOfRevenue: 443 * MILLION,
      grossProfit: 624 * MILLION,
      sellingGeneralAndAdministrative: 382 * MILLION,
      researchAndDevelopment: 394 * MILLION,
      totalOperatingExpense: 1248 * MILLION,
      operatingIncome: -180 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 112 * MILLION,
      netIncomeBeforeTaxes: -70 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -71 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 982 * MILLION,
      costOfRevenue: 445 * MILLION,
      grossProfit: 537 * MILLION,
      sellingGeneralAndAdministrative: 349 * MILLION,
      researchAndDevelopment: 356 * MILLION,
      totalOperatingExpense: 1174 * MILLION,
      operatingIncome: -192 * MILLION,
      interestIncomeNet: -3 * MILLION,
      otherIncomeNet: 42 * MILLION,
      netIncomeBeforeTaxes: -153 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: -151 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 769 * MILLION,
      costOfRevenue: 412 * MILLION,
      grossProfit: 356 * MILLION,
      sellingGeneralAndAdministrative: 304 * MILLION,
      researchAndDevelopment: 337 * MILLION,
      totalOperatingExpense: 1073 * MILLION,
      operatingIncome: -303 * MILLION,
      interestIncomeNet: -3 * MILLION,
      otherIncomeNet: 22 * MILLION,
      netIncomeBeforeTaxes: -285 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -286 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 911 * MILLION,
      costOfRevenue: 385 * MILLION,
      grossProfit: 525 * MILLION,
      sellingGeneralAndAdministrative: 298 * MILLION,
      researchAndDevelopment: 307 * MILLION,
      totalOperatingExpense: 1008 * MILLION,
      operatingIncome: -97 * MILLION,
      interestIncomeNet: -27 * MILLION,
      otherIncomeNet: 29 * MILLION,
      netIncomeBeforeTaxes: -94 * MILLION,
      provisionForIncomeTaxes: 18 * MILLION,
      netIncome: -113 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 678 * MILLION,
      costOfRevenue: 293 * MILLION,
      grossProfit: 385 * MILLION,
      sellingGeneralAndAdministrative: 263 * MILLION,
      researchAndDevelopment: 274 * MILLION,
      totalOperatingExpense: 846 * MILLION,
      operatingIncome: -167 * MILLION,
      interestIncomeNet: -25 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: -198 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -199 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 454 * MILLION,
      costOfRevenue: 250 * MILLION,
      grossProfit: 203 * MILLION,
      sellingGeneralAndAdministrative: 246 * MILLION,
      researchAndDevelopment: 252 * MILLION,
      totalOperatingExpense: 764 * MILLION,
      operatingIncome: -310 * MILLION,
      interestIncomeNet: -19 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: -326 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: -325 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 462 * MILLION,
      costOfRevenue: 253 * MILLION,
      grossProfit: 209 * MILLION,
      sellingGeneralAndAdministrative: 250 * MILLION,
      researchAndDevelopment: 229 * MILLION,
      totalOperatingExpense: 748 * MILLION,
      operatingIncome: -286 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: -12 * MILLION,
      netIncomeBeforeTaxes: -305 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -305 * MILLION,
    },
  ],
};
