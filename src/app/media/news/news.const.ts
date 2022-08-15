import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { TimeFrame } from 'src/app/stats-display/stats-display.interface';
import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    uuid: 'n33',
    title: 'LegalZoom.com share was up 18% on beating estimates',
    tickers: ['LZ'],
    date: new Date('2022-08-12'),
    content: [
      'Future subscription revenue is expected to grow 20% year-over-year',
    ],
    stats: [
      {
        name: 'Revenue ($)',
        value: 163.87 * MILLION,
        changeRate: 0.09,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Transaction Revenue ($)',
        value: 66.5 * MILLION,
        changeRate: -0.09,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Subscription Revenue ($)',
        value: 91.3 * MILLION,
        changeRate: 0.32,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n33',
    title: 'Toast share was up 8% as revenue grew 58%',
    tickers: ['TOST'],
    date: new Date('2022-08-12'),
    content: [],
    stats: [
      {
        name: 'Location served',
        value: 68000,
        changeRate: 0.4,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Revenue ($)',
        value: 675 * MILLION,
        changeRate: 0.58,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Net Loss ($)',
        value: 54 * MILLION,
        previousValue: 135 * MILLION,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n32',
    title:
      'Rivian lost $1.7 billion in the second quarter as production ramps up.',
    tickers: ['RIVN'],
    date: new Date('2022-08-11'),
    content: ['Revenue beat the expectations while earnings missed estimates.'],
    stats: [
      {
        name: 'Cash and equivalents remaining',
        value: 15.5 * BILLION,
        previousValue: 17 * BILLION,
        timeFrame: TimeFrame.qoq,
      },
      {
        name: 'Preorders',
        value: 98000,
        previousValue: 90000,
        timeFrame: TimeFrame.qoq,
      },
      {
        name: 'Vehicle Produced',
        value: 4401,
        previousValue: 2553,
        timeFrame: TimeFrame.qoq,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n31',
    title: 'Disney was up 7% after both revenue and earnings beat esitmates',
    source: Source.OFFICIAL,
    date: new Date('2022-08-09'),
    type: EventType.earnings,
    isBullish: true,
    tickers: ['DIS'],
    content: [
      "Disneys' Hulu, ESPN+ and Disney+ have over 221 million subscribers in total, which is more than Netflix's 220 million subscribers",
      'Starting Dec. 8, ad-free Disney+ will rise 38% to $10.99 per month',
      'Disney’s parks, experiences and products division saw revenue increase 72% to $7.4 billion',
    ],
    stats: [
      {
        name: 'Disney+ subscriptions',
        value: 152.1 * MILLION,
        expectedValue: 147 * MILLION,
      },
      {
        name: 'Parks, experiences and products revenue',
        value: 7.4 * BILLION,
        changeRate: 0.72,
        timeFrame: TimeFrame.yoy,
      },
    ],
  },
  {
    uuid: 'n30',
    title: 'Latest CPI report shows slowdown in inflation',
    content: [
      'July CPI was Up 8.5% YoY, lower than expectations.',
      'Month to month CPI of all items unchanged as fall in gasoline offsets shelter, food increases.',
      'Lower-than-expected inflation numbers could take some heat off the Fed.',
    ],
    source: Source.laborStatistics,
    date: new Date('2022-08-09'),
    type: EventType.macro,
    tickers: ['SPY'],
    isBullish: true,

    stats: [
      {
        name: 'Shelter',
        changeRate: 0.005,
        timeFrame: TimeFrame.mtm,
      },

      {
        name: 'Core CPI',
        details: [
          {
            changeRate: 0.059,
            timeFrame: TimeFrame.yoy,
            expectedChangeRate: 0.061,
          },
          {
            changeRate: 0.003,
            timeFrame: TimeFrame.mtm,
            expectedChangeRate: 0.005,
          },
        ],
      },

      {
        name: 'Energy',

        details: [
          {
            changeRate: 0.329,
            timeFrame: TimeFrame.yoy,
          },
          {
            changeRate: -0.046,
            timeFrame: TimeFrame.mtm,
          },
          {
            name: 'Gasoline',
            changeRate: -0.077,
            timeFrame: TimeFrame.mtm,
          },
        ],
      },
      {
        name: 'Food',
        details: [
          {
            changeRate: 0.109,
            timeFrame: TimeFrame.yoy,
          },
          {
            changeRate: 0.011,
            timeFrame: TimeFrame.mtm,
          },
          // {
          //   name: 'Butter',
          //   changeRate: 0.264,
          //   timeFrame: TimeFrame.yoy,
          // },
          // {
          //   name: 'Egg',
          //   changeRate: 0.38,
          //   timeFrame: TimeFrame.yoy,
          // },
        ],
      },
    ],
  },
];
