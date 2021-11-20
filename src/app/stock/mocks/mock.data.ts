import { bili } from './BILI.mock';
import { pdd } from './PDD.mock';
import { RBLX } from './RBLX.mock';
import { SQ } from './SQ.mock';
import { tsla } from './TSLA.mock';

export enum stockTickerEnum {
  AMZN = 'AMZN',
}

export const stockAnalysisMap = {
  SQ,
  RBLX,
  pdd,
  bili,
  tsla,
};

export const chwy = {
  name: {
    English: 'Chewy',
    Chinese: '亚马逊',
  },
  painPoint: {
    新能源: '消除世界对于不可再生能源的依赖（由石油转向太阳能',
    自动驾驶: '',
  },
  product: {
    autoship: { urls: [] },
  },
  advantage: { 'customer services': {} },
  risk: {},
  market: {
    customer: {
      'pet owner': 'more people tread animals',
    },
  },
  strategy: {},
  marketCap: {},
  revenue: { growth: '40%' },
  income: {},
  pe: {},
  competitor: {
    Amazon: {},
  },

  conclusion: {},
  targetPrice: {},
};

export const FSLY = {
  name: {
    English: 'Fastly',
    Chinese: '亚马逊',
  },
  painPoint: {
    新能源: '消除世界对于不可再生能源的依赖（由石油转向太阳能',
    自动驾驶: '',
  },
  product: {
    CDN: { urls: [] },
  },
  advantage: { CDN: 'more flexible CDN with more tool for customer to use' },
  risk: {
    cash: 'low',
  },
  market: {},
  strategy: {},
  marketCap: {},
  revenue: { growth: '40%' },
  income: {},
  pe: {},
  competitor: {
    Akamai: {},
  },

  conclusion: {},
  targetPrice: {},
};

export const NET = {
  name: {
    English: 'Cloudflare',
    Chinese: '亚马逊',
  },
  painPoint: {
    新能源: '消除世界对于不可再生能源的依赖（由石油转向太阳能',
    自动驾驶: '',
  },
  product: {
    CDN: { urls: [] },
  },
  advantage: { CDN: 'more flexible CDN with more tool for customer to use' },
  risk: {
    cash: 'low',
  },
  market: {},
  strategy: {},
  marketCap: {},
  revenue: { growth: '40%' },
  income: {},
  pe: {},
  competitor: {
    Akamai: {},
  },
  conclusion: {},
  targetPrice: {},
};

export const SHLL = {
  name: {
    English: 'Cloudflare',
    Chinese: '亚马逊',
  },
  painPoint: {
    新能源: '消除世界对于不可再生能源的依赖（由石油转向太阳能',
    自动驾驶: '',
  },
  product: {
    CDN: { urls: [] },
  },
  advantage: {
    future: 'policy maker support clean energy truck',
    cheap: 'change existing power train',
    team: 'has batter team than others with young ceo',
    'negative-co2': 'more environmental friendly',
    range: 'more range',
    payload: 'high load',
  },
  risk: {
    cash: 'low',
  },
  market: {
    totalSize: '94 billion',
    size: '2 billion in 2024',
    customer: {
      '20 cars': '20 car is running.',
    },
  },
  strategy: {},
  marketCap: {
    '2020-6': '700m',
  },
  revenue: { 2021: '1307%', 2022: '4368%' },
  income: {},
  pe: {},
  competitor: {
    Akamai: {},
  },
  conclusion: {},
  targetPrice: {},
};
