import { MarketType } from 'src/app/facts/data/area.enum';
import { rmbToDollar } from 'src/app/shared/currency';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const pdd: StockAnalysis = {
  marketCap: 54.96 * BILLION,
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 21505.76 * MILLION * rmbToDollar,
      operatingIncome: 2139.27 * MILLION * rmbToDollar,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 23046.22 * MILLION * rmbToDollar,
      operatingIncome: 1997.48 * MILLION * rmbToDollar,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 22167.1 * MILLION * rmbToDollar,
      operatingIncome: -4146.96 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 26547.71 * MILLION * rmbToDollar,
      operatingIncome: -2047.77 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 14209.78 * MILLION * rmbToDollar,
      operatingIncome: -1295.74 * MILLION * rmbToDollar,
    },
  ],
  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dmSbeD7O0Szd7qbdYHlCQ5G7J8WKR8DYGgAsbUxS5m_-Db-wTMdDVnzwd3Uqx0AxZjJqpX_NcuOZFDQlKZlYKQNnPh0ozR8AXVMHaUkbkZ8iFBnJzziuNiUoWaVxJ-8tyTjnwymFJ73ithN67jsHxV=w882-h736-no?authuser=3',
  name: 'Pinduoduo',
  ticker: 'pdd',
  description: [
    {
      content:
        '一个创新且发展迅速的“新电子商务”平台，可为购买者提供物有所值的商品以及有趣的交互式购物体验。',
    },
    {
      content:
        '通过“ Pin”开创并普及了动态购物体验，“ Pin”是一种将社交体验与在线购物体验无缝集成的团队购买格式。',
    },
    {
      content:
        '我们有意识地构建了一个类似于“虚拟市集”的平台，在该平台中，买家在相互交互的同时浏览并浏览了平台上的各种产品。',
    },
    {
      content:
        '买家可以使用拼多多在流行的社交网络上分享产品信息，并邀请他们的朋友，家人和社交联系人一起购买，享受发现和购物的乐趣和兴奋，全面选择具有价值的产品。',
    },
  ],

  vision: [
    'Costco + Disney',
    'Fun and interactive shopping experiences - discovery shopping.',
    'Resemble a "virtual bazaar" where buyers browse and explore a full spectrum of products on our platform while interacting with one another. ',
    'Customer connect to manufacturer directly.',
  ],
  painPoint: [
    'How to buy same quality product with lower price.',
    'Desire for deals during discovery shopping.',
  ],
  products: [
    {
      description: 'App',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3cV6CWGFQfD0tmYibyGBkc8TnTxCjOuMXV0MnDhcsoxnsI5Xpt4a-zzxONlGTmiO1fOxyKf3BpgoVhwODId9jUmq7dNRtvAgR8GBG-xX3K8_KhNEng9g5TDDGNjitO-7zVQgoZEvycPkP75DbVhz3bI=w1314-h828-no?authuser=3',
    },
    {
      description: 'Ecosystem',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3cT_xiDmJ0t0r0LooLECn-pcGBXj9nouzMx0TNDbvGBpKRMtNmgLlS83iOFikdBNYrqefy2PlRIIjglJHT1FEoJO8Mt_5RRAaDsnA4mRI66LDT-FzayygnjfPj-PqjDAL15ak0KkinQMyNTPPvSLltB=w1652-h1168-no?authuser=3',
    },
  ],
  customers: [
    'Customers who are more sensitive to price.',
    'Customers who are interested in discovery shopping',
  ],
  business: {
    markets: [MarketType.ecommerce],
    growthStrategy: [
      'Create a team purchase model that initiated by user with more detailed customer information.',
      'Focus on less-developed cities/market with consumers that are more sensitive to price, where Alibaba and JD were not focused',
      'Work with Tencent as a strategic partner.',
      'Use psychology to drive more discovery shopping',
      'C2M model: Use data to create accurate demand for manufacturer and lower the cost.',
    ],
  },
  advantage: [
    'Visionary founder and chairman',
    'Technology driven',
    'Strategic investors',
  ],
  risks: [
    {
      name: 'strong competitors',
    },
    {
      name: 'low user loyalty',
    },
  ],
  trends: ['COVID', 'E-commerce'],
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
    painPoint: 8,
    product: 10,
    customer: 8,
    businessModel: 8,
    advantage: 8,
    risk: 6,
    competitors: 7,
    marketPotential: 7,
    trend: 10,
    total: 81,
  },

  companyOfficialDocs: [
    {
      content: '投资者关系',
      link: 'https://investor.pinduoduo.com/investor-relations',
    },
    {
      content: '简介',
      link: 'https://pinduoduo.gcs-web.com/static-files/468b2c9f-9112-410d-84b3-2b22e07c7ee0',
    },
    {
      content: '更多信息',
      link: 'https://pinduoduo.gcs-web.com/static-files/afa5ca3e-247c-44a9-b05d-8e9e191f3119',
    },
  ],
  usefulVideos: [],
};
