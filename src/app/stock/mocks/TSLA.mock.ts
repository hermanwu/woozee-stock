import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const tsla: StockAnalysis = {
  logo: 'https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png',
  name: 'Tesla',
  ticker: 'TSLA',
  irAddress: 'https://ir.tesla.com/',
  marketCap: capMock.tsla,

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 10.389 * 1.5 * BILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      revenue: 17.719 * 1e9,
      operatingIncome: 2613 * 1e6,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 13757 * 1e6,
      operatingIncome: 2004 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 11958 * 1e6,
      operatingIncome: 1312 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 10389 * 1e6,
      operatingIncome: 594 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 10744 * 1e6,
      operatingIncome: 575 * 1e6,
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
  risks: [
    {
      name: 'Value',
      level: RiskLevel.medium,
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
      level: RiskLevel.low,
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
  ],

  products: [],
  market: [
    '	- 特斯拉涉及的产业有新能源（电池），汽车，芯片，人工智能（自动驾驶）',
    '自动驾驶是人类下一个“一定要解决的问题”，有着巨大潜力。如果自动驾驶成功，物流和出行会发生翻天覆地的变化',
  ],
  competitors: [
    '	- 中国的蔚来汽车虽然也很有潜力，但有几个很大的问题还有待解决：特斯拉都是自己的工厂，而蔚来是代工厂制造汽车的, 2. 特斯拉是自己研发的芯片，而蔚来是直接买的. 3.特斯拉是自己研发的电池，而蔚来还是买的。虽然现在蔚来做工和服务都很好，但我完全看不到盈利的模式。特斯拉整个产品都是自己研发生产的，所以它不仅可以完全控制成本，还能做出差异化。',
  ],

  stats: {
    marketCap: '417.2B',
    price: 2213.4,
    revenue: '25.71B',
    PE: 1139.17,
    PS: 16.23,
    quickRatio: 0.9,
    currentRatio: 1.2,
  },
  news: [],
};
