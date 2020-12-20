import { StockAnalysis } from '../models/stock-analysis.model';

export const AAPL: StockAnalysis = {
  images: {
    logo:
      'https://lh3.googleusercontent.com/pw/ACtC-3f96JYAkMsOpSjDfSg3bM-lwWY5r8nzTCEIdJA4gGeNJ_CtgasHTQP8N1xifekIfxsvp4UuYbXeMUFSLQsImxndjKiFJnijr7iqYx9G-2RffyIdETqNjcKEgqukvR2Ze0_V691HFAU7ot2jKOPwnYQq2Q=w992-h798-no?authuser=0',
  },
  name: {
    English: 'Apple',
    Chinese: '苹果',
  },
  description: [''],
  trend: [],
  strategy: {
    painPoint: {
      消费者: '能过给所有人的产品',
      生态圈: '',
      高质量: '',
    },
    advantage: {
      强大工业设计: '',
      完整供应量:
        '掌握整条供应链。从电池生产，汽车组装，到自动驾驶芯片及软件都是特斯拉自己制造和控制的。',
    },
    businessModel: [
      '先卖高利润小众的高端车，做出口碑，积累经验',
      '再卖中低端车，以数量取胜',
      '研发科技，掌握供应链，压低成本',
    ],
  },
  risk: {
    CEO:
      '马斯克有太多的明星效应.在我看来唯一的风险是CEO出现问题。但CEO马斯克事实上已经身经百战（创立过很多公司），所以这个风险也不是特别大。',
    中国: '中国的巨大市场，但中国和美国将会处于一种长期敌对状态',
  },
  products: {
    'Model Y': {
      description: '',
    },
    Roadster: {},
    SolarEnergy: {},
  },
  market: [
    '	- 特斯拉涉及的产业有新能源（电池），汽车，芯片，人工智能（自动驾驶）',
    '自动驾驶是人类下一个“一定要解决的问题”，有着巨大潜力。如果自动驾驶成功，物流和出行会发生翻天覆地的变化',
  ],
  competitor: [
    '	- 中国的蔚来汽车虽然也很有潜力，但有几个很大的问题还有待解决：特斯拉都是自己的工厂，而蔚来是代工厂制造汽车的, 2. 特斯拉是自己研发的芯片，而蔚来是直接买的. 3.特斯拉是自己研发的电池，而蔚来还是买的。虽然现在蔚来做工和服务都很好，但我完全看不到盈利的模式。特斯拉整个产品都是自己研发生产的，所以它不仅可以完全控制成本，还能做出差异化。',
  ],
  conclusion: {
    targetPrice: 2000,
  },
  thoughts: {
    hermanScore: 1,
  },
  stats: {
    marketCap: '417.2B',
    price: 2213.4,
    revenue: '25.71B',
    PE: 1139.17,
    PS: 16.23,
    quickRatio: 0.9,
    currentRatio: 1.2,
  },
};
