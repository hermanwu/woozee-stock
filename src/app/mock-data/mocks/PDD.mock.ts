import { BILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const pddRisks = [
  {
    name: 'strong competitors',
  },
  {
    name: 'low user loyalty',
  },
];

export const pdd: StockAnalysis = {
  marketCap: 54.96 * BILLION,
  displayName: 'Pinduoduo',
  logoLink: 'https://i.ibb.co/df7fxCk/PDD.png',
  name: 'Pinduoduo',
  ticker: 'pdd',
  irAddress: 'https://investor.pinduoduo.com/',

  vision: [
    'Costco + Disney',
    'Fun and interactive shopping experiences - discovery shopping.',
    'Resemble a "virtual bazaar" where buyers browse and explore a full spectrum of products on our platform while interacting with one another. ',
    'Customer connect to manufacturer directly.',
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

  business: {
    markets: [IndustryType.ecommerce],
    growthStrategy: [
      'Create a team purchase model that initiated by user with more detailed customer information.',
      'Focus on less-developed cities/market with consumers that are more sensitive to price, where Alibaba and JD were not focused',
      'Work with Tencent as a strategic partner.',
      'Use psychology to drive more discovery shopping',
      'C2M model: Use data to create accurate demand for manufacturer and lower the cost.',
    ],
    users: [
      'Customers who are more sensitive to price.',
      'Customers who are interested in discovery shopping',
    ],
  },
  advantage: [
    'Visionary founder and chairman',
    'Technology driven',
    'Strategic investors',
  ],

  trends: ['COVID', 'E-commerce'],

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
