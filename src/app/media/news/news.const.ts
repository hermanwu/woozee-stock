import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const news: News[] = [
  // {
  //   uuid: '11',
  //   content: 'TSMA earings report',
  //   source,
  // },
  {
    uuid: '14',
    content: 'Netflix encounters first subscriber loss in a decade.',
    notes: [
      {
        content: 'Lost 200,000 customers in the first quarter',
      },
      {
        content: 'Forecast to lose two million more subscribers this quarter',
      },
    ],
    source: Source.bloomberg,
    date: new Date('2022-04-19'),
    type: EventType.stock,
    catalystUuids: [],
    riskUuids: ['r7', 'r8'],
    tickers: ['NFLX'],
  },
  {
    uuid: '13',
    content:
      'Rivian CEO RJ Scaringe is warning that the upcoming battery shortage is going to make the current chip shortage look like a “small appetizer.”',
    source: Source.electrek,
    date: new Date('2022-04-18'),
    type: EventType.stock,
    catalystUuids: ['c-2', 'c-3'],
  },
  {
    uuid: '12',
    content:
      'Twitter Ex-CEO Dorsey criticizes Twitter board; Musk says it ‘owns almost no shares!’',
    source: Source.cnbc,
    date: new Date('2022-04-18'),
    type: EventType.stock,
    riskUuids: ['risk-6'],
  },
  {
    uuid: '11',
    content:
      'Taiwan Semiconductor Crushes First-Quarter Targets, Guides Higher',
    source: Source.ibd,
    notes: [
      {
        content:
          "On a year-over-year basis, Taiwan Semi's earnings rose 47% while sales increased 36%.",
      },
    ],
    type: EventType.stock,
    date: new Date('2022-04-14'),
    sourceLink:
      'https://www.investors.com/news/technology/tsm-stock-taiwan-semiconductor-crushes-q1-targets/',
  },
  {
    uuid: '10',
    content: 'Elon Musk offer to buy Twitter for $54.20 per share',
    source: Source.cnbc,
    date: new Date('2022-04-14'),
    type: EventType.stock,
    catalystUuids: [],
  },
  {
    uuid: '10',
    content:
      'President Joe Biden is sending Ukraine $800 million in new firepower',
    source: Source.bloomberg,
    date: new Date('2022-04-13'),
    type: EventType.geopolitics,
    catalystUuids: ['1'],
  },
  {
    uuid: '9',
    content:
      'Robinhood Markets Inc. included four new cryptocurrencies on its platform, including the Shiba Inu coin',
    source: Source.bloomberg,
    date: new Date('2022-04-12'),
    type: EventType.stock,
  },
  {
    uuid: '8',
    content:
      'Ark Fund has been cutting back on Twitter after Jack Dorsey handed over the reins because there will be a lot of management distraction',
    source: Source.cnbc,
    date: new Date('2022-04-12'),
    type: EventType.stock,
  },
  {
    uuid: '7',
    content:
      'The consumer price index (CPI) increased 8.5% from a year earlier following a 7.9% annual gain in February',
    notes: [
      {
        content:
          'Gasoline costs drove half of the monthly increase. Energy prices rose 11% in March from the prior month, the most since 2005, while gasoline prices jumped 18.3%, the largest gain since 2009. ',
      },
      {
        content:
          'Excluding volatile food and energy components, so-called core prices increased 0.3% from a month earlier and 6.5% from a year ago, due in large part to the biggest drop in used vehicle prices since 1969 and a deceleration in price growth in other merchandise categories.',
      },
    ],
    source: Source.bloomberg,
    date: new Date('2022-04-12'),
    type: EventType.macro,
  },

  // {
  //   content: 'NIO halt production in China',
  //   date: new Date('2022-4-11'),
  // },
  // {
  //   content: 'Tension between Taiwan and China',
  //   tags: ['Geopolitics'],
  //   updatedTime: new Date('2022-4-11'),
  // },
  // {
  //   tags: ['inflation'],
  //   type: FactType.business,
  //   content: 'Economists Boost Inflation Expectations',
  //   updatedTime: new Date('2022-4-8'),
  //   sourceLink: 'https://www.bloomberg.com/news/articles/2022-04-08/economists-boost-inflation-expectations-in-worrying-sign-for-fed?srnd=premium',
  // },
];
