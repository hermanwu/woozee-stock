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
    'An innovative and fast growing "new e-commerce" platform.',
    'Provides fun and interactive shopping experiences.',
    'Team purchase format that seamlessly integrates social experiences with online shopping experiences. ',
    'Share product information on social networks and invite their friends, family and social contacts to purchase together',
    'Infrastructure that seamlessly connects our platform with buyers and merchants and supports our business growth. ',
    'Developing big data analytics, artificial intelligence and machine learning capabilities to help market place.',
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
    'Focus on less-developed cities/market with consumers that are more sensitive to price, where Taobao was not focused',
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
    marketCap: ['200B', '750 + 150B => 900B'],
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
    total: 80,
  },
};
