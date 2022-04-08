import { rmbToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const NIO: StockAnalysis = {
  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dEyysKrE1fUvRVtEaFZvJPhvsXli4kawy6Pm_gg-KL5fDqPt3oCs4OepM2OFoD1P1awbxwv2dw4lI_R_KXOwQm2HmJmABVMNm1ymbNwhaOtAdB9OCC7qzhUc2LzaK0iVjwG-HZMKWHSwGluSmB84raUg=w678-h336-no?authuser=3',
  description: [
    {
      content:
        'NIO设计于2014年11月开始， 在中国生产和销售高档电动汽车。 它的 车辆具有车辆连通性，自动驾驶 驾驶和人工智能。 它的首款量产车型ES8是一款7人座电动SUV， 在12月的NIO日活动上首次亮相 自2017年6月起，NIO已开始交付ES8。 2018年交付ES6（5人座电动SUV） 2019年6月。',
    },
  ],
  name: { English: 'NIO Inc,' },
  ticker: 'NIO',

  // Earnings Report:
  earnings: {
    website: 'https://ir.nio.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://ir.nio.com/static-files/4fe3fe59-3eb1-4b0a-a945-65d4fbbcfe4b',
        webcast: null,
        marketCap: 62.88 * 1e9,
        totalRevenue: 7982.333 * 1e6 * rmbToDollar,
        operatingIncome: -295.924 * 1e6 * rmbToDollar,
      },
    },
    2020: {
      2: {
        totalRevenue: 3718.93 * 1e6 * rmbToDollar,
        operatingIncome: -1160.003 * 1e6 * rmbToDollar,
      },
    },
  },
};
