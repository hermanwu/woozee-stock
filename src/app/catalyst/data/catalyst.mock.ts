import { portfolioCatalysts } from 'src/app/accounts/ mock-data/portoflio-catalysts.const';
import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { CatalystLevel } from '../catalyst-level-display/catalyst-level.enum';

export const catalysts: Catalyst[] = [
  // {
  //   uuid: 'c-5',
  //   content: "Tesla's growth is accelerating.",
  //   markets: [MarketType.ev],
  //   level: CatalystLevel.moderate,
  //   type: FactType.growth,
  //   date: new Date('2022-04-20'),
  //   notes: [
  //     {
  //       content:
  //         '81% growth in 2022Q1, compared to 65% in 2021Q4 growth and 71% average growth in 2021',
  //     },
  //     {
  //       content:
  //         '2022 forecasts growth is 60%, which is better than previous 50% estimate.',
  //     },
  //   ],
  // },
  {
    uuid: 'c9',
    content: 'Full Self-Driving release.',
    tickers: ['tsla'],
    level: CatalystLevel.moderate,
    date: new Date('2022-04-30'),
  },
  {
    uuid: 'c8',
    content:
      'Production and Deliveries started in Gigafactory Berlin and Texas',
    tickers: ['tsla'],
    level: CatalystLevel.strong,
    date: new Date('2022-04-30'),
  },
  {
    uuid: 'c7',
    content:
      'AWS growth remains really strong: revenue +37% & operating income +57%.',
    tickers: ['AMZN'],
    level: CatalystLevel.strong,
    date: new Date('2022-04-27'),
  },
  {
    uuid: 'c8',
    content: 'Ad business grew 23% year over year',
    tickers: ['AMZN'],
    level: CatalystLevel.moderate,
    date: new Date('2022-04-27'),
  },

  {
    uuid: 'c6',
    content:
      'The short video format popularized by TikTok has excellent momentum.',
    markets: [MarketType.digitalMedia],
    level: CatalystLevel.moderate,
    type: FactType.growth,
    date: new Date('2022-04-27'),
  },
  {
    uuid: 'c-5',
    content: "Tesla's growth is accelerating.",
    tickers: ['TSLA'],
    level: CatalystLevel.moderate,
    type: FactType.growth,
    date: new Date('2022-04-20'),
    notes: [
      {
        content:
          '81% growth in 2022Q1, compared to 65% in 2021Q4 growth and 71% average growth in 2021',
      },
      {
        content:
          '2022 forecasts growth is 60%, which is better than previous 50% estimate.',
      },
    ],
  },
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
  ...portfolioCatalysts,
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
