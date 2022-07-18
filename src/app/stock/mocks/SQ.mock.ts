import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const blockRisks: Risk[] = [
  {
    uuid: 'sqr-2',
    content:
      'Operating expenses increases faster than growth profit. (+70% vs +34%)',
  },
  {
    uuid: 'sqr-1',
    content: '2022 Q1 gross profit only grow 25% excluding Afterpay',
  },

  {
    uuid: 'sqr-3',
    name: 'Network effect is relatively weak since it is mainly a tool.',
  },

  {
    uuid: 'sqr-4',
    name: 'Block has many competitors among all of its products',
  },
  {
    uuid: 'sqr-5',
    name: 'Small sellers (<$125K Annualized GPV) decreases from 16.1B to 13.8, which means less new customers are joining',
    level: RiskLevel.longTerm,
  },
];

export const blockCatalysts: Catalyst[] = [
  {
    uuid: 'sqc-1',
    name: 'Gross profit in markets outside the U.S. is doubled to 78M (from 39M), which is 12% (from 8%) of total gross profit',
  },
  {
    uuid: 'sqc-2',
    name: 'Excluding bitcoin and Afterpay, revenue was $2.10 billion, up 36% year over year and up 40% on a two-year CAGR basis.',
  },
  {
    uuid: 'sqc-3',
    level: CatalystLevel.strong,
    name: 'Block is led by visionary founder, Jack Dorsey, who is intent on making strategic long-term investments.',
  },
  {
    uuid: 'sqc-4',
    level: CatalystLevel.strong,
    name: 'A bank charter that can perform all banking services such as loans',
  },
];

export const sq: StockAnalysis = {
  marketCap: 71 * BILLION,
  business: {
    markets: [IndustryType.fintech],
    competitiveAdvantages: [{ type: StrategyType.ecoSystem }],
    users: [
      'Logistic and customer relation management for small business owners.',
      'Banking and financial services for individuals that enjoy managing their wealth.',
    ],
  },

  riskUuids: blockRisks.map((risk) => risk.uuid),
  catalystUuids: blockCatalysts.map((c) => c.uuid),

  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dVUwpnglNTwsN6ZkweBVX9VgZhM9aJL6oQ0Cn9Ofk62gCDq1R8DwwkrzUb-HBxX9B3FA_C5ZqbfYT9UIKdPFLqpxeBLj4Dis4Z1DZ6oakHj-YOZqNdUclAkdW9Q8XkXOoz-nkQfOYeEFRK0eatm9bc=w614-h548-no?authuser=3',
  name: 'Block, Inc.',
  ticker: 'sq',
  shortName: 'Block',
  propertiesPageEnabled: true,
  irAddress: 'https://investors.block.xyz/overview/default.aspx',
  secFilings: 'https://investors.block.xyz/financials/sec-filings/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 3960.645 * MILLION,
      costOfRevenue: 2665.685 * MILLION,
      grossProfit: 1294.96 * MILLION,
      totalOperatingExpense: 1521.749 * MILLION,
      operatingIncome: -226.789 * MILLION,
      netIncome: -207.363 * MILLION,
    },
    {
      pressReleaseLink:
        'https://s29.q4cdn.com/628966176/files/doc_financials/2021/q4/4Q21-Shareholder-Letter_Block.pdf',
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001512673/13386837-50ba-466f-b8ff-81824f066c1e.pdf',
      year: 2021,
      quarter: 4,
      totalRevenue: 4078 * MILLION,
      costOfRevenue: 2896 * MILLION,
      grossProfit: 1182 * MILLION,
      sellingGeneralAndAdministrative: 783 * MILLION,
      researchAndDevelopment: 395 * MILLION,
      unusualExpenseIncome: 57 * MILLION,
      totalOperatingExpense: 4133 * MILLION,
      operatingIncome: -54 * MILLION,
      interestIncomeNet: -18 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -74 * MILLION,
      provisionForIncomeTaxes: 6 * MILLION,
      netIncome: -76 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 3844 * MILLION,
      costOfRevenue: 2711 * MILLION,
      grossProfit: 1133 * MILLION,
      sellingGeneralAndAdministrative: 675 * MILLION,
      researchAndDevelopment: 366 * MILLION,
      unusualExpenseIncome: 68 * MILLION,
      totalOperatingExpense: 3821 * MILLION,
      operatingIncome: 23 * MILLION,
      interestIncomeNet: -20 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: -2 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 0 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 4680 * MILLION,
      costOfRevenue: 3539 * MILLION,
      grossProfit: 1141 * MILLION,
      sellingGeneralAndAdministrative: 596 * MILLION,
      researchAndDevelopment: 326 * MILLION,
      unusualExpenseIncome: 93 * MILLION,
      totalOperatingExpense: 4555 * MILLION,
      operatingIncome: 124 * MILLION,
      interestIncomeNet: 70 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 194 * MILLION,
      provisionForIncomeTaxes: -9 * MILLION,
      netIncome: 204 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 5057 * MILLION,
      costOfRevenue: 4093 * MILLION,
      grossProfit: 963 * MILLION,
      sellingGeneralAndAdministrative: 545 * MILLION,
      researchAndDevelopment: 308 * MILLION,
      unusualExpenseIncome: 40 * MILLION,
      totalOperatingExpense: 4989 * MILLION,
      operatingIncome: 67 * MILLION,
      interestIncomeNet: -29 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 39 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 39 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3158 * MILLION,
      costOfRevenue: 2355 * MILLION,
      grossProfit: 803 * MILLION,
      sellingGeneralAndAdministrative: 488 * MILLION,
      researchAndDevelopment: 253 * MILLION,
      unusualExpenseIncome: 15 * MILLION,
      totalOperatingExpense: 3113 * MILLION,
      operatingIncome: 45 * MILLION,
      interestIncomeNet: 256 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 298 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: 293 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 3033 * MILLION,
      costOfRevenue: 2239 * MILLION,
      grossProfit: 794 * MILLION,
      sellingGeneralAndAdministrative: 502 * MILLION,
      researchAndDevelopment: 226 * MILLION,
      unusualExpenseIncome: 15 * MILLION,
      totalOperatingExpense: 2984 * MILLION,
      operatingIncome: 49 * MILLION,
      interestIncomeNet: -14 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 35 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: 36 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 1923 * MILLION,
      costOfRevenue: 1326 * MILLION,
      grossProfit: 596 * MILLION,
      sellingGeneralAndAdministrative: 374 * MILLION,
      researchAndDevelopment: 206 * MILLION,
      unusualExpenseIncome: 37 * MILLION,
      totalOperatingExpense: 1946 * MILLION,
      operatingIncome: -23 * MILLION,
      interestIncomeNet: 6 * MILLION,
      otherIncomeNet: 4 * MILLION,
      netIncomeBeforeTaxes: -12 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -11 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 1381 * MILLION,
      costOfRevenue: 842 * MILLION,
      grossProfit: 538 * MILLION,
      sellingGeneralAndAdministrative: 324 * MILLION,
      researchAndDevelopment: 194 * MILLION,
      unusualExpenseIncome: 108 * MILLION,
      totalOperatingExpense: 1471 * MILLION,
      operatingIncome: -90 * MILLION,
      interestIncomeNet: -9 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: -105 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -105 * MILLION,
    },
  ],
  description: [
    {
      content:
        'Square, Inc. creates tools that empower businesses and individuals to participate in the economy.',
    },
    {
      content:
        'Enables business to accept card payments and provides reporting and analytics, next-day settlement',
    },
    {
      content:
        'Help business manage inventory, locations, and employees; access financing; engage buyers; build a website or online store; and grow sales. ',
    },
    { content: 'Provide an easy way to send, spend, and store money.' },
  ],
  vision: [
    'Helping all kinds of people succeed and grow in the economy.',
    'Create a cohesive commerce ecosystem for business and individuals.',
  ],
  painPoint: [
    'High cost software/hardware to manage a business.',
    'Inconvenience of using different payments system or financial management services.',
  ],
  products: [
    {
      description: 'Seller Hardware',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3dFEaCbAtuTcfgj46vlVegVSIjkYFIkeUa_Jus5XYuvBkTHWT9t5g0WSAvsMWKQFdGCxfTCpCbUGs2pBZqn-cyIhfA1exNkqi4FUL88DoYpUB3f0DyRzOO0Li6AaoxWG1TfC5jpvxUiGmWIJ1GWMkzo=w1426-h886-no?authuser=3',
    },
    {
      description: 'Seller Software',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3c83es3kgcl6j8BtklhkCgpu_btX9DoBQkLKZRy9jS3OovKf8X4q3d9nKMLZmkYhzX4cielasUp3syJudVvB7F-g5ZGRWDHXQHPqqmHZ_gSgtUvrJ3uqGnKxvUhOz7Kn_6Wz7YdU1lXmB7EP-aJDz2i=w1564-h1466-no?authuser=3',
    },
    {
      description: 'Cash App',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3fVJX5-Zl1ifYAvvi2h738zhlGnorfNIh9Ji96wg01UQOKU3ZQe_KOsT46PNSOG4IzTA31FIzL6djsSHck6iaYNfk6AzmbjQhKJ4F1YkP6YxAqPFO48C4qdt2dB8nlR5J5AbsvlgqIM9v0qjmcblWFv=w1424-h1410-no?authuser=3',
    },
  ],
  market: ['Banking and financial services'],
  advantage: [
    'Startup / Tech DNA',
    'Visionary founder and CEO',
    'Growing network effect',
  ],

  trends: ['COVID', 'Cashless'],

  thoughts: {
    hermanScore: 1,
  },
  stats: {
    price: 1,
    revenueGrowth: 0.4,
    margin: 0.3,
  },
  score: {
    vision: 9,
    painPoint: 7,
    product: 9,
    customer: 10,
    businessModel: 8,
    advantage: 9,
    risk: 7,
    competitors: 6,
    marketPotential: 8,
    trend: 9,
    total: 82,
  },
};
