import { IndustryType } from 'src/app/facts/data/area.enum';
import { rmbToDollar } from 'src/app/shared/currency';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const biliRisks = [
  {
    name: '单一社区种类，用户收入偏低',
  },
  {
    name: '承诺无贴片，变现能力差',
  },
  {
    name: '游戏收入难以预计',
  },
  {
    name: '国内视频竞争激烈，特别是Tikok的西瓜视频',
  },
  {
    name: '政治因素而导致的各种限制及无法预计的变化',
  },
  {
    name: '质量没油管高，难拓展国际市场',
  },
  {
    name: '技术力量比竞争对手弱',
  },
];

export const bili: StockAnalysis = {
  marketCap: 11 * BILLION,
  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3e9AoltCnmSTNXb44UMaPYhVOVfeVGD0_rM7wOvceClSFwu_b3_NPLwMXGxITQwqZ1gPu-GMU-T9fhIWYRiqMmicuQTHiJpTZgar7N1AyxoaIhv0nsyFZBe959Es1OgCMoM44TRT9v1vFblgZ-TEyEPA=w870-h412-no?authuser=3',
  name: 'Bilibili',
  ticker: 'bili',
  irAddress: 'https://ir.bilibili.com/',
  secFilings: 'https://ir.bilibili.com/financial-information/sec-filings',
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 4.908931 * BILLION * rmbToDollar,
      grossProfit: 738.285 * MILLION * rmbToDollar,
      operatingIncome: -2.191062 * BILLION * rmbToDollar,
      netIncome: -2.010445 * BILLION * rmbToDollar,
      forecastRevenueTop: 5.8 * BILLION * rmbToDollar,
      forecastRevenueBottom: 5.6 * BILLION * rmbToDollar,
      date: convertDateToUTC(new Date('2022-09-08')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://ir.bilibili.com/static-files/48c81ef3-7d59-4d30-85d4-919a77ded9b4',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 5.054 * BILLION * rmbToDollar,
      costOfRevenue: 4.246858 * BILLION * rmbToDollar,
      grossProfit: 807.241 * MILLION * rmbToDollar,
      operatingIncome: -1.990812 * BILLION * rmbToDollar,
      netIncome: -2.284132 * BILLION * rmbToDollar,
      forecastRevenueTop: 4.95 * BILLION * rmbToDollar,
      forecastRevenueBottom: 4.85 * BILLION * rmbToDollar,
      date: convertDateToUTC(new Date('2022-06-09')),

      pressReleaseLink:
        'https://ir.bilibili.com/static-files/91528e13-31e8-4460-a3c0-e04abedeb5fd',
      reportLink:
        'https://ir.bilibili.com/static-files/5934fe40-2676-4587-b71c-d333a2800be2',
      slidesLink:
        'https://ir.bilibili.com/static-files/3371d6d5-2a68-4373-adc7-a5ab89494a4e',
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 5780.78 * MILLION * rmbToDollar,
      grossProfit: 1097.8 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
      operatingIncome: -1999.54 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 5206.57 * MILLION * rmbToDollar,
      grossProfit: 1097.8 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
      operatingIncome: -1878.0 * MILLION * rmbToDollar,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 4495.25 * MILLION * rmbToDollar,
      grossProfit: 1097.8 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
      operatingIncome: -1520.56 * MILLION * rmbToDollar,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 3901.07 * MILLION * rmbToDollar,
      grossProfit: 1097.8 * MILLION * rmbToDollar,
      operatingIncome: -1030.97 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3901.07 * MILLION * rmbToDollar,
      grossProfit: 1097.8 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
      operatingIncome: -903.36 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 3901.07 * MILLION * rmbToDollar,
      grossProfit: 1097.8 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
      operatingIncome: -903.36 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 2617.6 * MILLION * rmbToDollar,
      grossProfit: 2617.6 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
      operatingIncome: -903.36 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 2315.53 * MILLION * rmbToDollar,
      grossProfit: 2315.53 * MILLION * rmbToDollar,
      operatingIncome: -903.36 * MILLION * rmbToDollar,
      netIncome: 0 * MILLION * rmbToDollar,
    },
  ],

  description: [
    { content: '丰富年轻一代生活的线上娱乐网站' },
    {
      content:
        '从受到动漫，漫画和游戏（ACG）启发的内容社区发展成为一个涵盖众多领域的全范围在线娱乐世界流派和媒体格式，包括视频，直播和手机游戏',
    },
    {
      content:
        '提供沉浸式娱乐体验和高质量内容，以满足用户和社区不断发展变化的兴趣，并基于用户与我们的内容和社区之间的强烈情感联系，构建了我们的平台',
    },
    {
      content:
        '开创了“子弹聊天”功能，实时评论功能，通过显示其他观看同一视频的观众的想法和感受，已经改变了观看体验',
    },
  ],
  vision: [
    '使中国年轻人的日常生活更加丰富。',
    '成为探索中国年轻一代文化趋势和现象的目的地。',
    '亚文化会成为主流文化',
  ],
  painPoint: ['满足二次元文化需求', '提供一个分享创作的地方'],
  products: [
    {
      description: 'App',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3f0JlfMENR5Dw0sBPk2idrdNb_3Gcwwbwvr1LXizjNVKz9lEgHK6TQr_VFSb6wBdmvCnBDtMMTmN8yYfJWqXwP1aKaewrVdler6ABhi6v6zO18flWY4mHJsOGDSik_ZPokxRbkuNVw0GELZ4mvX-Nxx=w2984-h1766-no?authuser=3',
    },
  ],

  business: {
    revenues: [
      {
        name: 'Mobile Games',
        size: 1.357818 * BILLION * rmbToDollar,
        type: IndustryType.gaming,
      },
      {
        name: 'Membership and Services',
        size: 2.052192 * BILLION * rmbToDollar,
        type: IndustryType.streaming,
      },
      {
        name: 'Advertising',
        size: 1.04077 * BILLION * rmbToDollar,
        type: IndustryType.adTech,
      },
      {
        name: 'E-commerce',
        size: 0.603319 * BILLION * rmbToDollar,
        type: IndustryType.ecommerce,
      },
    ],
    markets: [IndustryType.streaming, IndustryType.gaming, IndustryType.adTech],
    growthStrategy: [
      '开创了“子弹聊天”功能，营造高度交互性和令人愉悦的观看体验，用户能够有很强的社区感。',
      '社区感刺激创作者生成跟多内容。',
      '通过播放广告',
      '向多元化内容发展包括直播和移动游戏来变现。',
    ],
    users: [
      'Z代，即1990年至2009年在中国出生的个人。他们通常接受高质量的教育，并且精通技术，对文化产品的需求旺盛，并具有自我表达和社会互动的途径',
    ],
  },
  advantage: [
    'CEO为漫画爱好者',
    '中国没有类似竞争对手',
    '用户互动强,忠诚度高，社区氛围好',
    '无版权费用',
    '多渠道收入',
    '和央视合作，有政府加持',
    '阿里腾讯同时投资',
  ],

  trends: ['COVID', 'Video Entertainments'],
  thoughts: {
    hermanScore: 1,
  },
  stats: {
    price: 1,
    revenueGrowth: 0.4,
    margin: 0.3,
  },
  score: {
    vision: 7,
    painPoint: 8,
    product: 8,
    customer: 8,
    businessModel: 8,
    advantage: 8,
    risk: 6,
    competitors: 7,
    marketPotential: 7,
    trend: 10,
    total: 81,
  },
  source: ['https://www.youtube.com/watch?v=EZv-a0fneuQ'],
  companyOfficialDocs: [
    {
      content: '股东网站',
      link: 'https://ir.bilibili.com/investor-overview',
    },
  ],
  ceoQuote: [
    '有一天我们将看到中国的原创动画、游戏在全世界受到欢迎。我们将看到世界各国的网民为中国人的文化创意赞叹不已。',
  ],
};
