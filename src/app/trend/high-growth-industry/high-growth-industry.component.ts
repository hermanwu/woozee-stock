import { Component, OnInit } from '@angular/core';
import { GrowthType } from './growth.enum';

@Component({
  selector: 'app-high-growth-industry',
  templateUrl: './high-growth-industry.component.html',
  styleUrls: ['./high-growth-industry.component.scss'],
})
export class HighGrowthIndustryComponent implements OnInit {
  isAllCardOpen = false;
  sevenTypes = Object.values(GrowthType);

  // 行业领头样，
  // 中美同事压住
  // 永远投资
  // 变大的

  growthTypes = {
    [GrowthType.HARDWARE]: {
      chinese: '高精硬件',
    },
    [GrowthType.PRODUCTIVITY]: {
      chinese: '生产效率',
    },
    [GrowthType.LOGISTIC]: {
      chinese: '物流运输',
    },
    [GrowthType.FINTECH]: {
      chinese: '金融科技',
    },
    [GrowthType.ECOMMERCE]: {
      chinese: '线上消费',
    },
    [GrowthType.ENTERTAINMENT]: {
      chinese: '娱乐游戏',
    },
    [GrowthType.AD_PLATFORM]: {
      chinese: '广告平台',
    },
  };

  stockArry = [
    // Hardware
    {
      ticker: 'aapl',
      name: 'Apple',
      chinese: '苹果',
      reason: '巴菲特也投资的电子产品',
      category: GrowthType.HARDWARE,
    },
    {
      ticker: 'TSM',
      name: 'Taiwan Semiconductor Mfg',
      reason: '全球最大的半导体工厂',
      chinese: '台积电',

      category: GrowthType.HARDWARE,
    },
    {
      ticker: 'ASML',
      name: 'ASML Holding',
      reason: '芯片制造的必需品',
      chinese: '阿斯麦',
      category: GrowthType.HARDWARE,
    },
    // Productivity
    {
      ticker: 'msft',
      name: 'Microsoft Corporation',
      chinese: '微软',
      reason: '云端办公第一生产力',
      category: GrowthType.PRODUCTIVITY,
    },
    {
      ticker: 'adbe',
      name: 'Adobe',
      reason: '音影产业人人都知道的软件',
      category: GrowthType.PRODUCTIVITY,
    },
    {
      ticker: 'crm',
      reason: '客户关系管理工具的代名词',
      name: 'Salesforce',
      category: GrowthType.PRODUCTIVITY,
    },
    // Logistic and Transportation.
    {
      ticker: 'TSLA',
      name: 'Tesla',
      reason: '最大的自动驾驶公司',
      chinese: '特斯拉',
      category: GrowthType.LOGISTIC,
    },
    {
      ticker: 'NIO',
      chinese: '蔚来汽车',
      reason: '中国电动车领导者',
      category: GrowthType.LOGISTIC,
    },
    {
      ticker: 'UBER',
      reason: '美国老百姓的日常物流',
      chinese: '优步',

      category: GrowthType.LOGISTIC,
    },
    // Fin tech
    {
      ticker: 'BABA',
      name: 'Alibaba',
      reason: '逼国家出手的金融公司',
      chinese: '阿里巴巴',
      category: GrowthType.FINTECH,
    },
    {
      ticker: 'sq',
      reason: '最具创新力的金融公司',
      name: 'Square',
      category: GrowthType.FINTECH,
    },
    {
      ticker: 'PYPL',
      name: 'Paypal',
      reason: '网上支付的世界品牌',
      chinese: '贝宝',
      category: GrowthType.FINTECH,
    },
    // E commerce
    {
      ticker: 'amzn',
      name: 'Amazon',
      chinese: '亚马逊',
      reason: '电子购物的代名词',
      category: GrowthType.ECOMMERCE,
    },
    {
      ticker: 'JD',
      name: 'JD.com',
      reason: '中国的亚马逊',
      chinese: '京东',
      category: GrowthType.ECOMMERCE,
    },
    {
      ticker: 'PDD',
      name: 'Pinduoduo, Inc',
      chinese: '拼多多',
      reason: '初生牛犊不怕虎的电商',
      category: GrowthType.ECOMMERCE,
    },
    // Gaming and Entertainment
    {
      ticker: 'TCEHY',
      name: 'Tencent',
      chinese: '腾讯',
      reason: '神马游戏都要入股的爸爸',
      category: GrowthType.ENTERTAINMENT,
    },
    {
      ticker: 'bili',
      name: 'BiliBili',
      chinese: '哔哩哔哩',
      reason: '中国油管',
      category: GrowthType.ENTERTAINMENT,
    },
    {
      ticker: 'u',
      name: 'Unity',
      reason: '打造虚拟世界的必备工具',
      category: GrowthType.ENTERTAINMENT,
    },
    // AD_PLATFORM.
    {
      ticker: 'googl',
      name: 'Alphabet / Google',
      chinese: '谷歌',
      reason: '最常用的最好用的搜索引擎',
      category: GrowthType.AD_PLATFORM,
    },
    {
      ticker: 'fb',
      name: 'Facebook',
      chinese: '脸书',
      reason: '比国家还大的社交网络',
      category: GrowthType.AD_PLATFORM,
    },
    {
      ticker: 'snap',
      chinese: 'Snapchat',
      reason: '年轻富有有创造力的社交公司',
      category: GrowthType.AD_PLATFORM,
    },
  ];

  constructor() {}

  stockMap = {};

  ngOnInit(): void {
    for (let stock of this.stockArry) {
      if (this.stockMap[stock.category]) {
        this.stockMap[stock.category].push(stock);
      } else {
        this.stockMap[stock.category] = [stock];
      }
    }
  }
}
