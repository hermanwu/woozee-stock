import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Catalyst } from 'src/app/shared/models/booster.interface';

export const catalysts: Catalyst[] = [
  {
    content:
      'Robinhood Financial officially rolled out its cryptocurrency wallet on Thursday',
  },
  {
    content:
      'Trading in NFTs spiked 21,000% to more than $17 billion in 2021, report says',
    type: FactType.growth,
    markets: [MarketType.crypto, MarketType.nft],
  },
  {
    content: 'Crowdstrike pop',
    type: FactType.growth,
  },

  {
    content: 'World food most expensive',
    type: FactType.growth,
  },
  {
    content: 'Apple first live TV',
    type: FactType.growth,
  },
];
