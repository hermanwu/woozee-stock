import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock/models/stock.model';
import { categories } from '../stock/mocks/categories.mock';
import { GrowthType } from './growth.enum';

@Component({
  selector: 'app-high-growth-industry',
  templateUrl: './high-growth-industry.component.html',
  styleUrls: ['./high-growth-industry.component.scss']
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
      chinese: '硬件设施'
    },
    [GrowthType.PRODUCTIVITY]: {
      chinese: '生产力'
    },
    'logistics': {
      chinese: '物流运输'
    },
    'fintech': {
      chinese: '金融科技'
    },
    'ecommerce': {
      chinese: '线上消费'
    },
    'entertainment': {
      chinese: '娱乐游戏'
    },
    'ad-platform': {
      chinese: '广告平台'
    }
  }

  stockArry = [
    // Hardware
    {
      ticker: 'AAPL',
      category: GrowthType.HARDWARE
    },
    {
      ticker: 'TSM',
      category: GrowthType.HARDWARE
    },
    {
      ticker: 'ASML',
      category: GrowthType.HARDWARE
    },
    // Productivity
    {
      ticker: 'MSFT',
      category: GrowthType.PRODUCTIVITY
    },
    {
      ticker: 'ADBE',
      category: GrowthType.PRODUCTIVITY
    },
    {
      ticker: 'CRM',
      category: GrowthType.PRODUCTIVITY
    },
    // Logistic and Transportation.
    {
      ticker: 'TSLA',
      category: GrowthType.LOGISTIC
    },
    {
      ticker: 'NIO',
      category: GrowthType.LOGISTIC
    },
    {
      ticker: 'UBER',
      category: GrowthType.LOGISTIC
    },
    // Fin tech 
    {
      ticker: 'BABA',
      category: GrowthType.FINTECH
    },
    {
      ticker: 'SQ',
      category: GrowthType.FINTECH
    },
    {
      ticker: 'PYPL',
      category: GrowthType.FINTECH
    },
    // E commerce
    {
      ticker: 'AMZN',
      category: GrowthType.ECOMMERCE
    },
    {
      ticker: 'JD',
      category: GrowthType.ECOMMERCE
    },
    {
      ticker: 'PDD',
      category: GrowthType.ECOMMERCE
    },
    // Gaming and Entertainment
    {
      ticker: 'TCEHY',
      category: GrowthType.ENTERTAINMENT
    },
    {
      ticker: 'BILI',
      category: GrowthType.ENTERTAINMENT
    },
    {
      ticker: 'U',
      category: GrowthType.ENTERTAINMENT
    },
    // AD_PLATFORM.
    {
      ticker: 'GOOGL',
      category: GrowthType.AD_PLATFORM
    },
    {
      ticker: 'FB',
      category: GrowthType.AD_PLATFORM
    },
    {
      ticker: 'SNAP',
      category: GrowthType.AD_PLATFORM
    }
  ];

  constructor() { }

  stockMap = {};

  ngOnInit(): void {
    for (let stock of this.stockArry) {
      if (this.stockMap[stock.category]) {
        this.stockMap[stock.category].push(stock);
      } else {
        this.stockMap[stock.category] = [stock];
      }
    }
    console.log(this.stockMap);
  }
}
