import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from 'src/app/risks/models/risk-level.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const tslaCatalysts: Catalyst[] = [
  {
    uuid: 'tsla-c-1',
    name: 'Synology between SpaceX, Twitter, etc.',
  },
  {
    uuid: 'tsla-c-2',
    name: 'Vertical integration of car manufacturing.',
  },
  {
    uuid: 'tsla-c-4',
    name: 'In-house developed software.',
  },
  {
    uuid: 'tsla-c-4',
    name: 'Massive supercharging network',
  },
  {
    uuid: 'tsla-c-3',
    name: 'Vehicle deliveries would comfortably grow by more than 50% year-over-year in 2022 despite persistent supply chain issues ',
    type: FactType.growth,
    notes: [
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

export const tslaRisks: Risk[] = [
  {
    uuid: 'tsla-r-1',
    content: 'Twitter acquisition',
    level: Term.short,
  },
];

export const tsla: StockAnalysis = {
  uuid: 'tsla',
  logoLink: 'https://i.ibb.co/P6jhPKW/6-Ggc4-S5n-400x400.png',
  name: 'Tesla',
  ticker: 'TSLA',
  displayName: 'Tesla',
  irAddress: 'https://ir.tesla.com/',
  marketCap: capMock.tsla,
  secFilings: 'https://ir.tesla.com/sec-filings',
  industries: [IndustryType.ai, IndustryType.ev, IndustryType.energy],

  riskUuids: tslaRisks.map((r) => r.uuid),
  catalystUuids: tslaCatalysts.map((c) => c.uuid),
  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 21.454 * BILLION,
      grossProfit: 5.382 * BILLION,
      operatingIncome: 3.688 * BILLION,
      netIncome: 3.292 * BILLION,
      date: convertDateToUTC(new Date('2022-10-19')),
      forecastQuarterlyGrowthRateTop: 0.5,
      forecastQuarterlyGrowthRateBottom: 0.5,
      links: [
        {
          name: 'Shareholder Deck',
          value:
            'https://tesla-cdn.thron.com/static/WTULXQ_TSLA_Q3_2022_Update_KPK2Y7.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22tsla-q3-2022-update.pdf%22',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 16.934 * BILLION,
      grossProfit: 4.234 * BILLION,
      operatingIncome: 2.464 * BILLION,
      netIncome: 2.259 * BILLION,
      date: convertDateToUTC(new Date('2022-07-20')),
      forecastQuarterlyGrowthRateTop: 0.5,
      forecastQuarterlyGrowthRateBottom: 0.5,
      links: [
        {
          name: 'Shareholder Deck',
          value:
            'https://tesla-cdn.thron.com/static/EIUQEC_2022_Q2_Quarterly_Update_Deck_J8VLIK.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22tsla-q2-22-update.pdf%22',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 18.756 * BILLION,
      costOfRevenue: 13296 * MILLION,
      operatingIncome: 3603 * MILLION,
      netIncome: 3280 * MILLION,
      reportLink:
        'https://ir.tesla.com/_flysystem/s3/sec/000095017022006034/tsla-20220331-gen.pdf',
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
  news: [],
};
