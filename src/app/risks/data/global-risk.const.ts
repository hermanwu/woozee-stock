import { portfolioRisks } from 'src/app/accounts/ mock-data/portoflio-risks.const';
import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from '../models/fact-type.enum';
import { RiskLevel } from '../models/risk-level.model';
import { Risk } from '../models/risk.model';
import { covid } from './risks/covid.model';
import { fedRate } from './risks/fed-rate.model';
import { geopolitics } from './risks/geopolitics.model';
import { inflation } from './risks/inflation.model';
import { laborShortage } from './risks/labor-shortage.model';

export const risks: Risk[] = [
  // {
  //   uuid: 'r12',
  //   markets: [MarketType.adTech],
  //   level: RiskLevel.high,
  //   type: FactType.business,
  //   updatedTime: new Date('2022-04-26'),
  // },
  {
    uuid: 'r24',
    content: '',
  },
  {
    uuid: 'r23',
    content:
      'Q3 guidance is weak due to COVID headwind in China. Ipad constraints, Subscription up dramatically, Sale in China and Russia, Focus on the supply side instead of inflation caused by demand side. COVID and silicon cause constraints. Does not including Shanghai problem. 4-8 billion affecting sales',
    tickers: ['aapl'],
    updatedTime: new Date('2022-05-03'),
    level: RiskLevel.low,
  },
  {
    uuid: 'r22',
    content: 'Twitter acquisition process',
    tickers: ['tsla'],
    updatedTime: new Date('2022-04-30'),
    level: RiskLevel.low,
  },
  {
    uuid: 'r21',
    content: 'Lock down in Shanghai might affect production more.',
    tickers: ['tsla'],
    updatedTime: new Date('2022-04-30'),
    level: RiskLevel.medium,
  },
  {
    uuid: 'r20',
    content: 'Rising raw material, commodity, logistics and expedite costs',
    tickers: ['tsla'],
    updatedTime: new Date('2022-04-30'),
    level: RiskLevel.low,
  },
  {
    uuid: 'r19',
    content: 'Next quarter forecasts suggests growth could dip even further.',
    tickers: ['AMZN'],
    updatedTime: new Date('2022-04-28'),
    level: RiskLevel.low,
  },
  {
    uuid: 'r18',
    content: 'Amazon recorded a $7.6 billion loss on its Rivian investment.',
    tickers: ['AMZN'],
    updatedTime: new Date('2022-04-28'),
    level: RiskLevel.low,
  },
  {
    content:
      'Q1 revenue growth is the slowest rate since the 2001 dot-com bust.',
    tickers: ['AMZN'],
    updatedTime: new Date('2022-04-28'),
    level: RiskLevel.high,
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
    level: RiskLevel.medium,
  },
  {
    uuid: 'r15',
    content:
      'Virtual reality could be costly to invest in and might not generate any return soon',
    markets: [MarketType.vr],
    updatedTime: new Date('2022-04-27'),
    level: RiskLevel.medium,
  },
  {
    uuid: 'r14',
    content: 'More regulatory scrutiny towards user data privacy.',
    markets: [MarketType.social],
    type: FactType.business,
    level: RiskLevel.medium,
    updatedTime: new Date('2022-04-27'),
  },
  {
    uuid: 'r13',
    content: 'US Consumer spending decreases.',
    markets: [MarketType.us],
    type: FactType.growth,
    updatedTime: new Date('2022-04-27'),
  },
  {
    uuid: 'r12',
    content: 'Consumer spending decrease will cause Fintech revenue decrease.',
    markets: [MarketType.fintech],
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
    markets: [MarketType.china],
    tickers: ['TSLA'],
    level: RiskLevel.medium,
    type: FactType.business,
    updatedTime: new Date('2022-04-26'),
  },
  {
    uuid: 'r11',
    content:
      'COVID lock down causes economy slow down in China and global supply chain issue Globally',
    markets: [MarketType.global, MarketType.china],
    level: RiskLevel.high,
    type: FactType.business,
    updatedTime: new Date('2022-04-26'),
  },
  {
    uuid: 'r10',
    content: 'Investment banking business is not growing',
    markets: [MarketType.investmentBanking],
    level: RiskLevel.high,
    type: FactType.business,
    updatedTime: new Date('2022-04-20'),
  },
  {
    uuid: 'r9',
    content:
      'Users are more interested in watching short videos on Tiktok than long videos on Netflix ',
    markets: [MarketType.streaming],
    level: RiskLevel.medium,
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
    level: RiskLevel.medium,
    markets: [MarketType.streaming],
    type: FactType.growth,
    updatedTime: new Date('2022-04-19'),
  },
  {
    uuid: 'r7',
    content: 'Netflix subscribers are not growing',
    level: RiskLevel.medium,
    tickers: ['NFLX'],
    type: FactType.profit,
    updatedTime: new Date('2022-04-19'),
  },
  {
    uuid: 'risk-6',
    content: "Twitter's future is unknown under current acquisition drama",
    level: RiskLevel.low,
    tickers: ['TWTR'],
    type: FactType.event,
  },
  fedRate,
  geopolitics,
  laborShortage,
  covid,
  inflation,
  ...portfolioRisks,
];
