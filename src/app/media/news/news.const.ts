import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const news: News[] = [
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
