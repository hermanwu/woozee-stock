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
];
