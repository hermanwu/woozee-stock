import { StockAnalysis } from '../models/stock-analysis.model';

export const pdd: StockAnalysis = {
  logo:
    'https://lh3.googleusercontent.com/pw/ACtC-3dmSbeD7O0Szd7qbdYHlCQ5G7J8WKR8DYGgAsbUxS5m_-Db-wTMdDVnzwd3Uqx0AxZjJqpX_NcuOZFDQlKZlYKQNnPh0ozR8AXVMHaUkbkZ8iFBnJzziuNiUoWaVxJ-8tyTjnwymFJ73ithN67jsHxV=w882-h736-no?authuser=3',
  name: {
    English: 'Pinduoduo',
    Chinese: '拼多多',
  },
  ticker: 'PDD',
  description: [
    '一个创新且发展迅速的“新电子商务”平台，可为购买者提供物有所值的商品以及有趣的交互式购物体验。',
    '通过“ Pin”开创并普及了动态购物体验，“ Pin”是一种将社交体验与在线购物体验无缝集成的团队购买格式。',
    '我们有意识地构建了一个类似于“虚拟市集”的平台，在该平台中，买家在相互交互的同时浏览并浏览了平台上的各种产品。',
    '买家可以使用拼多多在流行的社交网络上分享产品信息，并邀请他们的朋友，家人和社交联系人一起购买，享受发现和购物的乐趣和兴奋，全面选择具有价值的产品。',
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
  businessModel: [
    'Create a team purchase model that initiated by user with more detailed customer information.',
    'Focus on less-developed cities/market with consumers that are more sensitive to price, where Alibaba and JD were not focused',
    'Work with Tencent as a strategic partner.',
    'Use psychology to drive more discovery shopping',
    'C2M model: Use data to create accurate demand for manufacturer and lower the cost.',
  ],
  advantage: [
    'Visionary founder and chairman',
    'Technology driven',
    'Strategic investors',
  ],
  risk: [
    'Extremely competitive e-commerce market.',
    'User loyalty',
    'Partnership with Tencent',
  ],
  competitor: ['Alibaba - Tmall, Taobao - 750B', 'JD.com - 150B'],
  trend: ['COVID', 'E-commerce'],
  predication: {
    marketCap: ['200B', '750B / 2 => 375B'],
  },
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
      text: '投资者关系',
      links: ['https://investor.pinduoduo.com/investor-relations'],
    },
    {
      text: '简介',
      links: [
        'https://pinduoduo.gcs-web.com/static-files/468b2c9f-9112-410d-84b3-2b22e07c7ee0',
      ],
    },
    {
      text: '更多信息',
      links: [
        'https://pinduoduo.gcs-web.com/static-files/afa5ca3e-247c-44a9-b05d-8e9e191f3119',
      ],
    },
  ],
  usefulVideos: [],
};
