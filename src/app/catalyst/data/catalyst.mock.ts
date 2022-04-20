import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { CatalystLevel } from '../catalyst-level-display/catalyst-level.enum';

export const catalysts: Catalyst[] = [
  {
    uuid: 'c-4',
    content: 'Pent-up demand for travel after COVID ',
    markets: [
      MarketType.hospitality,
      MarketType.leisure,
      MarketType.airline,
      MarketType.beauty,
    ],
    level: CatalystLevel.moderate,
    type: FactType.growth,
    date: new Date('2022-04-18'),
  },
  {
    uuid: 'c-2',
    content: 'EV demand would drive chip demand.',
    markets: [MarketType.semi],
    level: CatalystLevel.moderate,
    type: FactType.growth,
    date: new Date('2022-04-18'),
  },
  {
    uuid: '1',
    content:
      'Ukraine-Russian War increases defense / government contract spending',
    markets: [MarketType.defense],
    level: CatalystLevel.weak,
    type: FactType.event,
    date: new Date('2022-04-18'),
  },
  // {
  //   content:
  //     'Robinhood Financial officially rolled out its cryptocurrency wallet on Thursday',
  // },p
  // {
  //   content:
  //     'Trading in NFTs spiked 21,000% to more than $17 billion in 2021, report says',
  //   type: FactType.growth,
  //   markets: [MarketType.crypto, MarketType.nft],
  // },
  // {
  //   content: 'Crowdstrike pop',
  //   type: FactType.growth,
  // },
  // {
  //   content: 'World food most expensive',
  //   type: FactType.growth,
  // },
  // {
  //   content: 'Apple first live TV',
  //   type: FactType.growth,
  // },
];
