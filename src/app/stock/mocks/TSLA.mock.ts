import { StockAnalysis } from '../models/stock-analysis.model';

export const tsla: StockAnalysis = {
  logo: 'https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png',
  name: {
    English: 'Tesla',
    Chinese: '特斯拉',
  },
  ticker: 'TSLA',
  description: [''],
  marketCap: {},
  earnings: {
    website: 'https://ir.tesla.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.tesla.com/_flysystem/s3/sec/000095017021000524/tsla-20210630-gen.pdf',
        press:
          'https://ir.tesla.com/press-release/tesla-q2-2021-vehicle-production-deliveries',
        webcast: '',
        marketCap: 655.31 * 1e9,
        revenue: 11958 * 1e6,
        operatingIncome: 1312 * 1e6,
        date: undefined,
      },
    },
    2020: {
      2: {
        revenue: 6036 * 1e6,
        operatingIncome: 327 * 1e6,
      },
    },
  },
  trends: [],
  painPoint: ['消除世界对于不可再生能源的依赖（由石油转向太阳能)', ''],
  advantage: [
    '掌握整条供应链。从电池生产，汽车组装，到自动驾驶芯片及软件都是特斯拉自己制造和控制的。',
    '马斯克是科技公司的创始人，在硅谷，知道如何快速迭代，如何做好软件.',
    '自研芯片',
    'CEO有远见和能力。特斯拉是一个科技驱动的公司。这点和其他车企很不一样。CEO马斯克是这个世界少有的工程师天才，所以特斯拉的产品一直有很多黑科技受年轻人追捧。电池技术，芯片技术全球领先。汽车行业中没有任何竞争对手',
    '用户体验好。我见到的车主都对特斯拉很满意（包括我自己）',
  ],
  businessModel: [
    '先卖高利润小众的高端车，做出口碑，积累经验',
    '再卖中低端车，以数量取胜',
    '研发科技，掌握供应链，压低成本',
    '快速迭代，是用户满意',
    '收集大量用户数据及反馈，发展自动驾驶',
  ],
  risks: [
    {
      name: 'Margin',
    },
    {
      name: 'Cash usage',
    },
    {
      name: '马斯克有太多的明星效应.在我看来唯一的风险是CEO出现问题。但CEO马斯克事实上已经身经百战（创立过很多公司），所以这个风险也不是特别大。',
    },
    { name: '中国的巨大市场，但中国和美国将会处于一种长期敌对状态' },
  ],

  products: [],
  market: [
    '	- 特斯拉涉及的产业有新能源（电池），汽车，芯片，人工智能（自动驾驶）',
    '自动驾驶是人类下一个“一定要解决的问题”，有着巨大潜力。如果自动驾驶成功，物流和出行会发生翻天覆地的变化',
  ],
  competitor: [
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
