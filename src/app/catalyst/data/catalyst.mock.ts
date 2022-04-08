import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Catalyst } from 'src/app/shared/models/booster.interface';

export const catalysts: Catalyst[] = [
  // {
  //   name: 'Robinhood Financial officially rolled out its cryptocurrency wallet on Thursday',

  // }
  {
    name: 'Trading in NFTs spiked 21,000% to more than $17 billion in 2021, report says',
    type: FactType.growth,
    markets: [MarketType.crypto, MarketType.nft],
  },
  {
    name: 'Crowdstrike pop',
    type: FactType.growth,
  },

  {
    name: 'World food most expensive',
    type: FactType.growth,
  },
  // {
  //   name: 'Apple first live TV',
  //   type: FactType
  // }
];
