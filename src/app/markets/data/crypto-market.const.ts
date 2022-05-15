import { MarketType } from 'src/app/facts/data/area.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { Market } from 'src/app/stock/models/market.models';

export const cryptoRisks = [
  {
    uuid: 'crypto-r-1',
    content: "Crypto currency's intrinsic value does not grow in theory.",
    notes: [
      {
        content:
          'It is intended to function like US dollars, which is not an investment.',
      },
    ],
    level: RiskLevel.longTerm,
  },
  {
    uuid: 'crypto-r-2',
    content: 'Too many competitions in the space and lower the margin.',
    level: RiskLevel.longTerm,
  },
  {
    uuid: 'crypto-r-3',
    content: 'Hard to develop a moat as most financial services.',
    level: RiskLevel.longTerm,
  },
  {
    uuid: 'crypto-r-4',
    content: 'For now, it is not a necessary good or services',
    level: RiskLevel.longTerm,
  },
  {
    uuid: 'crypto-r-5',
    content: 'The regulatory policies for cryptocurrency remain unclear.',
    level: RiskLevel.longTerm,
  },
];

export const cryptoMarketCatalysts = [
  {
    uuid: 'crypto-c-1',
    content: 'Secure and accepted around the world.',
  },
  {
    uuid: 'crypto-c-2',
    content: 'Economically efficient.',
  },
];

export const cryptoMarket: Market = {
  type: MarketType.crypto,
  riskUuids: cryptoRisks.map((r) => r.uuid),
  catalystUuids: cryptoMarketCatalysts.map((c) => c.uuid),
};
