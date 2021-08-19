import { StockAnalysis } from '../models/stock-analysis.model';

export const bili: StockAnalysis = {
  logo:
    'https://lh3.googleusercontent.com/pw/ACtC-3e9AoltCnmSTNXb44UMaYhVOVfeVGD0_rM7wOvceClSFwu_b3_NPLwMXGxITQwqZ1gPu-GMU-T9fhIWYRiqMmicuQTHiJpTZgar7N1AyxoaIhv0nsyFZBe959Es1OgCMoM44TRT9v1vFblgZ-TEyEPA=w870-h412-no?authuser=3',
  name: {
    English: 'Bilibili',
    Chinese: '哔哩哔哩',
  },
  ticker: 'BILI',
  earnings: {
    website: 'https://ir.bilibili.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      3: {},
      2: {
        '10q': 'https://ir.bilibili.com/node/7836/html',
        presentation:
          'https://ir.bilibili.com/system/files-encrypted/nasdaq_kms/assets/2021/08/19/4-28-36/2Q21%20PPT.pdf',
        press:
          'https://ir.bilibili.com/system/files-encrypted/nasdaq_kms/assets/2021/08/19/4-25-16/Bilibili%20Inc.%20Announces%20Second%20Quarter%202021%20Financial%20Results.pdf',
        webcast: '',
        marketCap: 24.73 * 1e9,
        revenue: 4495254 * 1e3 * 0.15,
        operatingIncome: -1520562 * 1e3 * 0.15, //RMB to dollar value.S
      },
    },
    2020: {
      4: {
        notes: [
          '平均每月活跃用户（MAU）达到1.972亿，移动MAU达到1.835亿，分别比2019年同期增长54％和61％。',
          '平均每日活跃用户（DAU）达到5330万，比2019年同期增长42％。',
          '平均每月付费用户（MPU 1）达到1500万，比2019年同期增长89％。',
          '净收入总额为人民币32.257亿元（4.751亿美元），较2019年同期增长74％',
          '手机游戏收入为人民币12.751亿元（1.878亿美元），较2019年同期增长37％。',
          '增值服务收入为人民币9.796亿元（1.443亿美元），比2019年同期增长116％',
          '广告收入为人民币5.575亿元（8,210万美元），较2019年同期增长126％。',
          '电子商务及其他业务的收入为人民币4.134亿元（6,090万美元），较2019年同期增长83％',
          '毛利润为7.616亿元人民币（1.122亿美元），比2019年同期增长117％，这主要是由于净收入的增',
          '销售和市场营销费用为人民币11.904亿元（1.753亿美元），同比增长227％。',
          '净亏损为人民币11.009亿元（1.621亿美元），而2019年同期为人民币4.057亿元。',
        ],
      },
      2: {
        revenue: 2617601 * 1e3 * 0.15,
        operatingIncome: -610118 * 1e3 * 0.15,
      },
    },
  },
  marketCap: {},
  description: [
    '丰富年轻一代生活的线上娱乐网站',
    '从受到动漫，漫画和游戏（ACG）启发的内容社区发展成为一个涵盖众多领域的全范围在线娱乐世界流派和媒体格式，包括视频，直播和手机游戏',
    '提供沉浸式娱乐体验和高质量内容，以满足用户和社区不断发展变化的兴趣，并基于用户与我们的内容和社区之间的强烈情感联系，构建了我们的平台',
    '开创了“子弹聊天”功能，实时评论功能，通过显示其他观看同一视频的观众的想法和感受，已经改变了观看体验',
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
  customers: [
    'Z代，即1990年至2009年在中国出生的个人。他们通常接受高质量的教育，并且精通技术，对文化产品的需求旺盛，并具有自我表达和社会互动的途径',
  ],
  businessModel: [
    '开创了“子弹聊天”功能，营造高度交互性和令人愉悦的观看体验，用户能够有很强的社区感。',
    '社区感刺激创作者生成跟多内容。',
    '通过播放广告',
    '向多元化内容发展包括直播和移动游戏来变现。',
  ],
  advantage: [
    'CEO为漫画爱好者',
    '中国没有类似竞争对手',
    '用户互动强,忠诚度高，社区氛围好',
    '无版权费用',
    '多渠道收入',
    '和央视合作，有政府加持',
    '阿里腾讯同时投资',
  ],
  risk: [
    '单一社区种类，用户收入偏低',
    '承诺无贴片，变现能力差',
    '用户收入低，变现能力差',
    '游戏收入难以预计',
    '国内视频竞争激烈，特别是Tikok的西瓜视频',
    '政治因素而导致的各种限制及无法预计的变化',
    '质量没油管高，难拓展国际市场',
    '技术力量比竞争对手弱',
  ],
  competitor: [
    '爱奇艺 - 13B',
    'Youtube - 180B ~ 300B',
    'Netflix - 240B',
    '网易 - 66B',
  ],
  trend: ['COVID', 'Video Entertainments'],
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
      text: '股东网站',
      links: ['https://ir.bilibili.com/investor-overview'],
    },
  ],
  ceoQuote: [
    '有一天我们将看到中国的原创动画、游戏在全世界受到欢迎。我们将看到世界各国的网民为中国人的文化创意赞叹不已。',
  ],
};
