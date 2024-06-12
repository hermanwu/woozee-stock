import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { FactType } from '../models/fact-type.enum';
import { Term } from '../models/risk-level.model';
import { Risk } from '../models/risk.model';
import { marketRisks } from './markets.risks';

export const allRisks: Risk[] = [
  // {
  //   uuid: 'r12',
  //   markets: [IndustryType.adTech],
  //   level: Term.long,
  //   type: FactType.business,
  //   updatedTime: new Date('2022-04-26'),
  // },
  ...marketRisks,
  {
    uuid: 'r23',
    content:
      'Q3 guidance is weak due to COVID headwind in China. Ipad constraints, Subscription up dramatically, Sale in China and Russia, Focus on the supply side instead of inflation caused by demand side. COVID and silicon cause constraints. Does not including Shanghai problem. 4-8 billion affecting sales',
    tickers: ['aapl'],
    updatedTime: new Date('2022-05-03'),
    level: Term.short,
  },
  {
    uuid: 'r22',
    content: 'Twitter acquisition process',
    tickers: ['tsla'],
    updatedTime: new Date('2022-04-30'),
    level: Term.short,
  },
  {
    uuid: 'r21',
    content: 'Lock down in Shanghai might affect production more.',
    tickers: ['tsla'],
    updatedTime: new Date('2022-04-30'),
    level: Term.short,
  },
  {
    uuid: 'r20',
    content: 'Rising raw material, commodity, logistics and expedite costs',
    tickers: ['tsla'],
    updatedTime: new Date('2022-04-30'),
    level: Term.short,
  },
  {
    uuid: 'r19',
    content: 'Next quarter forecasts suggests growth could dip even further.',
    tickers: ['AMZN'],
    updatedTime: new Date('2022-04-28'),
    level: Term.short,
  },
  {
    uuid: 'r18',
    content: 'Amazon recorded a $7.6 billion loss on its Rivian investment.',
    tickers: ['AMZN'],
    updatedTime: new Date('2022-04-28'),
    level: Term.short,
  },
  {
    content:
      'Q1 revenue growth is the slowest rate since the 2001 dot-com bust.',
    tickers: ['AMZN'],
    updatedTime: new Date('2022-04-28'),
    level: Term.long,
  },
  {
    uuid: 'r17',
    content: 'Product sale is decreasing.',
  },
  {
    uuid: 'r16',
    content:
      "Meta's DAU will decrease in sequential quarters (largely due to Russia situation).",
    tickers: ['FB'],
    updatedTime: new Date('2022-04-27'),
    level: Term.short,
  },
  {
    uuid: 'r15',
    content:
      'Virtual reality could be costly to invest in and might not generate any return soon',
    markets: [IndustryType.vr],
    updatedTime: new Date('2022-04-27'),
    level: Term.short,
  },
  {
    uuid: 'r14',
    content: 'More regulatory scrutiny towards user data privacy.',
    markets: [IndustryType.social],
    type: FactType.business,
    level: Term.short,
    updatedTime: new Date('2022-04-27'),
  },
  {
    uuid: 'r12',
    content: 'Consumer spending decrease will cause Fintech revenue decrease.',
    markets: [IndustryType.fintech],
    type: FactType.growth,
    updatedTime: new Date('2022-04-27'),
  },
  {
    uuid: 'r11',
    content: 'Relationship with China as the owner of twitter.',
    notes: [
      {
        content:
          'That’s roughly half of the 936,000 electric vehicles delivered by Tesla last year.',
      },
    ],
    markets: [IndustryType.china],
    tickers: ['TSLA'],
    level: Term.short,
    type: FactType.business,
    updatedTime: new Date('2022-04-26'),
  },
  {
    uuid: 'r11',
    content:
      'COVID lock down causes economy slow down in China and global supply chain issue Globally',
    markets: [IndustryType.global],
    level: Term.long,
    type: FactType.business,
    updatedTime: new Date('2022-04-26'),
  },
  {
    uuid: 'r10',
    content: 'Investment banking business is not growing',
    markets: [IndustryType.investmentBanking],
    level: Term.long,
    type: FactType.business,
    updatedTime: new Date('2022-04-20'),
  },
  {
    uuid: 'r9',
    content:
      'Users are more interested in watching short videos on Tiktok than long videos on Netflix ',
    markets: [IndustryType.streaming],
    level: Term.short,
    type: FactType.growth,
    updatedTime: new Date('2022-04-20'),
  },
  {
    name: 'slow revenue growth',
    tickers: ['NFLX'],
  },
  {
    name: 'slow paid user growth',
    tickers: ['NFLX'],
  },
  {
    name: 'margin decrease',
    tickers: ['NFLX'],
  },
  {
    uuid: 'r8',
    content: 'Entertainment industry has too much competition',
    level: Term.short,
    markets: [IndustryType.streaming],
    type: FactType.growth,
    updatedTime: new Date('2022-04-19'),
  },
  {
    uuid: 'r7',
    content: 'Netflix subscribers are not growing',
    level: Term.short,
    tickers: ['NFLX'],
    type: FactType.profit,
    updatedTime: new Date('2022-04-19'),
  },
];
