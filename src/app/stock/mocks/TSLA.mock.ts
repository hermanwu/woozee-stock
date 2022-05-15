import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const tslaCatalysts = [
  {
    name: 'Synology between SpaceX, Twitter, etc.',
  },
];
export const tslaRisks = [
  {
    name: 'Value',
    level: RiskLevel.shortTerm,
    type: FactType.valuation,
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
    name: 'Company Growth',
    level: RiskLevel.shortTerm,
    type: FactType.growth,
    notes: [
      {
        content:
          'Vehicle deliveries would comfortably grow by more than 50% year-over-year in 2022 despite persistent supply chain issues ',
      },
      {
        content: 'Tesla current demand is much bigger than supply',
      },
      {
        content: 'Berlin and Texas factories will be opening soon.',
      },
      {
        content: 'Rising raw material, commodity, logistics costs.',
      },
      {
        content: 'Solar panel related sales decreases (-1%).',
      },
    ],
  },
];

export const tsla: StockAnalysis = {
  uuid: 'aapl',
  logo: 'https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png',
  name: 'Tesla',
  ticker: 'TSLA',
  shortName: 'Tesla',
  irAddress: 'https://ir.tesla.com/',
  marketCap: capMock.tsla,
  secFilings: 'https://ir.tesla.com/sec-filings',
  business: {
    markets: [MarketType.ai, MarketType.ev, MarketType.energy],
  },

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 18.756 * BILLION,
      costOfRevenue: 13296 * MILLION,
      operatingIncome: 3603 * MILLION,
      netIncome: 3280 * MILLION,
      pressReleaseLink:
        'https://ir.tesla.com/press-release/tesla-vehicle-production-deliveries-and-date-financial-results-webcast-first-quarter',
    },

    {
      reportLink:
        'https://www.sec.gov/Archives/edgar/data/1318605/000095017022000796/tsla-20211231.htm',

      year: 2021,
      quarter: 4,
      totalRevenue: 17719 * MILLION,
      costOfRevenue: 12872 * MILLION,
      grossProfit: 4847 * MILLION,
      sellingGeneralAndAdministrative: 1494 * MILLION,
      researchAndDevelopment: 740 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 15106 * MILLION,
      operatingIncome: 2613 * MILLION,
      interestIncomeNet: 8 * MILLION,
      otherIncomeNet: 14 * MILLION,
      netIncomeBeforeTaxes: 2635 * MILLION,
      provisionForIncomeTaxes: 292 * MILLION,
      netIncome: 2326 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 13757 * MILLION,
      costOfRevenue: 10097 * MILLION,
      grossProfit: 3660 * MILLION,
      sellingGeneralAndAdministrative: 994 * MILLION,
      researchAndDevelopment: 611 * MILLION,
      unusualExpenseIncome: 51 * MILLION,
      totalOperatingExpense: 11753 * MILLION,
      operatingIncome: 2004 * MILLION,
      interestIncomeNet: -124 * MILLION,
      otherIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: 1882 * MILLION,
      provisionForIncomeTaxes: 223 * MILLION,
      netIncome: 1618 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 11958 * MILLION,
      costOfRevenue: 9074 * MILLION,
      grossProfit: 2884 * MILLION,
      sellingGeneralAndAdministrative: 973 * MILLION,
      researchAndDevelopment: 576 * MILLION,
      unusualExpenseIncome: 23 * MILLION,
      totalOperatingExpense: 10646 * MILLION,
      operatingIncome: 1312 * MILLION,
      interestIncomeNet: -15 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: 1293 * MILLION,
      provisionForIncomeTaxes: 115 * MILLION,
      netIncome: 1142 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 10389 * MILLION,
      costOfRevenue: 8174 * MILLION,
      grossProfit: 2215 * MILLION,
      sellingGeneralAndAdministrative: 1056 * MILLION,
      researchAndDevelopment: 666 * MILLION,
      unusualExpenseIncome: 27 * MILLION,
      totalOperatingExpense: 9795 * MILLION,
      operatingIncome: 594 * MILLION,
      interestIncomeNet: -87 * MILLION,
      otherIncomeNet: 26 * MILLION,
      netIncomeBeforeTaxes: 533 * MILLION,
      provisionForIncomeTaxes: 69 * MILLION,
      netIncome: 438 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 10744 * MILLION,
      costOfRevenue: 8678 * MILLION,
      grossProfit: 2066 * MILLION,
      sellingGeneralAndAdministrative: 969 * MILLION,
      researchAndDevelopment: 522 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 10169 * MILLION,
      operatingIncome: 575 * MILLION,
      interestIncomeNet: -498 * MILLION,
      otherIncomeNet: 302 * MILLION,
      netIncomeBeforeTaxes: 379 * MILLION,
      provisionForIncomeTaxes: 83 * MILLION,
      netIncome: 270 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 8771 * MILLION,
      costOfRevenue: 6708 * MILLION,
      grossProfit: 2063 * MILLION,
      sellingGeneralAndAdministrative: 888 * MILLION,
      researchAndDevelopment: 366 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 7962 * MILLION,
      operatingIncome: 809 * MILLION,
      interestIncomeNet: -51 * MILLION,
      otherIncomeNet: -203 * MILLION,
      netIncomeBeforeTaxes: 555 * MILLION,
      provisionForIncomeTaxes: 186 * MILLION,
      netIncome: 300 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 6036 * MILLION,
      costOfRevenue: 4769 * MILLION,
      grossProfit: 1267 * MILLION,
      sellingGeneralAndAdministrative: 661 * MILLION,
      researchAndDevelopment: 279 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 5709 * MILLION,
      operatingIncome: 327 * MILLION,
      interestIncomeNet: -143 * MILLION,
      otherIncomeNet: -34 * MILLION,
      netIncomeBeforeTaxes: 150 * MILLION,
      provisionForIncomeTaxes: 21 * MILLION,
      netIncome: 104 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 5985 * MILLION,
      costOfRevenue: 4751 * MILLION,
      grossProfit: 1234 * MILLION,
      sellingGeneralAndAdministrative: 627 * MILLION,
      researchAndDevelopment: 324 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 5702 * MILLION,
      operatingIncome: 283 * MILLION,
      interestIncomeNet: -140 * MILLION,
      otherIncomeNet: -73 * MILLION,
      netIncomeBeforeTaxes: 70 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: 16 * MILLION,
    },
  ],

  trends: [],
  painPoint: ['消除世界对于不可再生能源的依赖（由石油转向太阳能)', ''],
  advantage: [
    '掌握整条供应链。从电池生产，汽车组装，到自动驾驶芯片及软件都是特斯拉自己制造和控制的。',
    '马斯克是科技公司的创始人，在硅谷，知道如何快速迭代，如何做好软件.',
    '自研芯片',
    'CEO有远见和能力。特斯拉是一个科技驱动的公司。这点和其他车企很不一样。CEO马斯克是这个世界少有的工程师天才，所以特斯拉的产品一直有很多黑科技受年轻人追捧。电池技术，芯片技术全球领先。汽车行业中没有任何竞争对手',
    '用户体验好。我见到的车主都对特斯拉很满意（包括我自己）',
  ],

  products: [],
  market: [
    '	- 特斯拉涉及的产业有新能源（电池），汽车，芯片，人工智能（自动驾驶）',
    '自动驾驶是人类下一个“一定要解决的问题”，有着巨大潜力。如果自动驾驶成功，物流和出行会发生翻天覆地的变化',
  ],

  stats: {
    marketCap: '417.2B',
    price: 2213.4,
    PE: 1139.17,
    PS: 16.23,
    quickRatio: 0.9,
    currentRatio: 1.2,
  },
  news: [],
};
