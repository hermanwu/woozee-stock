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
