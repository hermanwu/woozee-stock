import { newsSource } from '../models/news-source.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const NIO: StockAnalysis = {
  logo:
    'https://lh3.googleusercontent.com/pw/ACtC-3dEyysKrE1fUvRVtEaFZvJPhvsXli4kawy6Pm_gg-KL5fDqPt3oCs4OepM2OFoD1P1awbxwv2dw4lI_R_KXOwQm2HmJmABVMNm1ymbNwhaOtAdB9OCC7qzhUc2LzaK0iVjwG-HZMKWHSwGluSmB84raUg=w678-h336-no?authuser=3',
  description: [
    'NIO设计于2014年11月开始， 在中国生产和销售高档电动汽车。 它的 车辆具有车辆连通性，自动驾驶 驾驶和人工智能。 它的首款量产车型ES8是一款7人座电动SUV， 在12月的NIO日活动上首次亮相 自2017年6月起，NIO已开始交付ES8。 2018年交付ES6（5人座电动SUV） 2019年6月。',
  ],

  news: [
    // {

    // },
    {
      source: newsSource.OFFICIAL,
      title: '特斯拉2020年第四季度汽车生产和交付更新。',
      date: new Date('2021-01-02T00:00:00'),
      comments: [
        {
          text: '第四季度交付180,570, 全年交付499,550',
          comments: [
            {
              text:
                '击败了华尔街预期174,000辆，但没有超过50万整数大关，所以不能算重大利好。',
            },
            { text: '季度同比增长61.2%(112,000), 年同比增长77.6%(281,520).' },
          ],
        },
        {
          text: 'Y型车已在上海开始生产，预计不久将开始交付.',
          comments: [
            {
              text:
                '大陆特斯拉Y型车降价到30万以下，Tesla继续全球扩张，继续挤压燃油车市场。',
            },
          ],
        },
      ],
      sourceLink:
        'https://ir.tesla.com/press-release/tesla-q4-2020-vehicle-production-deliveries',
    },
  ],
};
