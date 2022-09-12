import { Index, MacroType } from 'src/app/macro/macro.enum';
import { TimeFrame } from 'src/app/shared/components/stats-display/stats-display.interface';
import {
  convertDateToUTC,
  getUtcDate,
} from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    uuid: 'n15',
    type: EventType.macro,
    date: getUtcDate(2022, 9, 9),
    tags: [Index.sp500, Index.nasdaq],
    title:
      'Stock market rallied on Friday and snapped a three-week losing streak wtih a strong performance. Nasdaq was up 4.14% and S&P 500 gained 3.65% for the week.',
  },
  {
    uuid: 'n15',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 9),
    tickers: ['hood'],
    title:
      'Robinhood is working on enabling Cardano (ADA) cryptocurrency transfers on its platform.',
  },
  {
    uuid: 'n13',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 9),
    tickers: ['oxy'],
    title: 'Warren Buffet increased Occidental ownership to 26.8% from 20%.',
  },
  {
    uuid: 'n13',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['tsla'],
    title: 'Tesla triples deliveries of China-made cars in August.',
  },
  {
    uuid: 'n13',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['shop'],
    title: 'Shopify hires new finance chief.',
  },
  {
    uuid: 'n12',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['rivn'],
    title:
      'Rivian announced partnership with Mercedes Benz Vans to build new EV production together.',
  },
  {
    uuid: 'n11',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['twtr'],
    title: 'Twitter reached $7M settlement with whistleblower complaints',
  },
  {
    uuid: 'n11',
    type: EventType.macro,
    tags: [MacroType.currency],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Chinese currency continued devaluating, which could have significant impact on Asian-heavy companies',
  },
  {
    uuid: 'n10',
    type: EventType.macro,
    tags: [MacroType.stock],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'S&P 500 +0.66% and Nasdaq +0.60% today, as they are on pace to snap a 3-week losing streak.',
  },
  {
    uuid: 'n10',
    type: EventType.macro,
    tags: [MacroType.fed],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Federal Reserve Chair Jerome Powell gave a hawish speech that he is strongly committed to fight inflation.',
  },
  {
    uuid: 'n9',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Zscaler reported quarterly earnings results and revenue growth continued to be strong.',
    tickers: ['zs'],
  },
  {
    uuid: 'n9',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-08')),
    title: 'DocuSign reported Q2 earnings results',
    tickers: ['docu'],
  },
  {
    uuid: 'n8',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-07')),
    title: 'NIO reported 2022 earnings results',
    tickers: ['nio'],
  },
  {
    uuid: 'n8',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-07')),
    title:
      'GameStop stock was up 11% during after hour after announces partnership with crypto exchange FTX',
    tickers: ['gme'],
  },
  {
    uuid: 'n7',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-01')),
    title:
      'Lululemon released earnings results that beat estimates. 📊 Next Quarter Revenue Forecast increased to 1.79B, ⬆️ Up 23.6% (from 1.45B)',
    tickers: ['lulu'],
  },
  {
    uuid: 'n6',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-01')),
    title:
      'Broadcom released earnings results that beat estimates. 📊 Next Quarter Revenue Forecast increased to 8.9B, ⬆️ Up 20.2% (from 7.41B)',
    tickers: ['avgo'],
  },
  {
    uuid: 'n5',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'Okta released financial results that beat estimates. However next quarter revenue growth forecast slows down to 33% (vs 43.4% this quarter).',
    tickers: ['okta'],
  },
  {
    uuid: 'n6',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'C3.ai latest earnings results missed estimates. Next quarter revenue growth forecast is only 5.2% (vs 25.6% this quarter).',
    tickers: ['ai'],
  },
  {
    uuid: 'n5',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'MongoDB released Q2 financial results that beat estimates. However next quarter revenue growth guidance slows down to 33% (vs 53% this quarter).',
    tickers: ['mdb'],
  },
  {
    uuid: 'n3',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'Crowdstrike released Q2 financial results that beat revenue and earnings estimates.',

    tickers: ['crwd'],
  },
  {
    uuid: 'n3',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-30')),
    title:
      'Chewy released 2022 Q2 financial results that missed revenue estimates with weak forecasts.',

    tickers: ['chwy'],
  },
  {
    uuid: 'n3',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-30')),
    title:
      'Chewy released 2022 Q2 financial results that missed revenue estimates with weak forecasts.',

    tickers: ['chwy'],
  },
  {
    uuid: 'n2',
    title: 'JD.com earnings results beat both revenue and earnings estimates',
    content: [],

    tickers: ['JD'],
    date: new Date('2022-08-22'),
    type: EventType.earnings,
    stats: [{ name: 'Revenue ($)', value: 40 * BILLION, changeRate: 0.054 }],

    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n1',
    title: '',
    content: [
      'Revenue grew 27% year over year to $1.6 billion',
      'Billings grew 44% year over year to $2.7 billion',
      'Board of directors approved a three-for-one stock split.',
    ],

    tickers: ['PANW'],
    date: new Date('2022-08-22'),
    type: EventType.earnings,

    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n10',
    title: '',
    content: [
      'Second quarter GAAP operating margin of 11.1%',
      'Zoom also lowered revenue guidance for next quarter.',
    ],

    tickers: ['ZM'],
    date: new Date('2022-08-22'),
    type: EventType.earnings,
    stats: [
      {
        name: 'Revenue ($)',
        value: 1099.5 * MILLION,
        changeRate: 0.08,
        timeFrame: TimeFrame.yoy,
      },
    ],
    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n9',
    title:
      'Home sales dropped for a sixth straight month in July to the lowest since the pandemic',
    tickers: ['BILL'],
    date: new Date('2022-08-17'),
    type: EventType.macro,
    source: null,
    tags: [MacroType.housing],
    sourceLink: '',
  },
  {
    uuid: 'n8',
    title: 'Bill.com climbed 19% as earnings results beat estimates',
    tickers: ['BILL'],
    date: new Date('2022-08-17'),
    content: [],
    stats: [
      {
        name: 'Organic Core Revenue ($)',
        changeRate: 0.71,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink: '',
  },
  {
    uuid: 'n7',
    title:
      'Cisco rose 4% as earnings results beat both revenue and profit estimates.',
    tickers: ['CSCO'],
    date: new Date('2022-08-17'),
    content: [
      'Quarter revenue was $13.1 billion, flat year over year.',
      'Strong demand with record full year product orders and backlog.',
      'Next quarter forecast revenue growth is between 2% to 4%.',
    ],
    stats: [
      {
        name: 'Net Income ($)',
        value: 2.815 * BILLION,
        previousValue: 3.009 * BILLION,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://s2.q4cdn.com/951347115/files/doc_financials/2022/q4/Q4FY22-Press-Release_.pdf',
  },
  {
    uuid: 'n6',
    title: "Target's profit plunged 90% as it reduced excess inventory.",
    tickers: ['TGT'],
    date: new Date('2022-08-17'),
    content: [
      'Target reiterated its full-year forecast.',
      'Revenue growth is expected in the low to mid-single digits.',
      '95% of sales were fulfilled by its stores.',
    ],
    stats: [
      {
        name: 'Revenue ($)',
        value: 26.037 * BILLION,
        previousValue: 25.16 * BILLION,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Operating Income ($)',
        value: 0.321 * BILLION,
        previousValue: 2.467 * BILLION,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://investors.target.com/static-files/b6d463d6-6af3-425f-a532-407493eb306f',
  },
  {
    uuid: 'n34',
    title:
      'IonQ shares surged almost 30%, as it continued to grow revenue rapidly.',
    tickers: ['IONQ'],
    date: new Date('2022-08-16'),
    content: [
      'IonQ Aria has increased its computational power by approximately 8x, now reaching 23 algorithmic qubits, up from 20.',
      'Aria will become available to all users of Microsoft Azure Quantum tomorrow.',
      'Announced paid contracts with Airbus and Dow.',
      'IonQ has identified a facility in Seattle, Washington to host its first assembly lines for manufacturing quantum computers.',
    ],
    stats: [
      {
        name: 'Revenue ($)',
        value: 2.6 * MILLION,
        previousValue: 93000,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Next Quarter Forecast Revenue ($)',
        value: 2.75 * MILLION,
        previousValue: 2.6 * MILLION,
        timeFrame: TimeFrame.qoq,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://investors.ionq.com/news/news-details/2022/IonQ-Announces-Second-Quarter-2022-Financial-Results/default.aspx',
  },
  {
    uuid: 'n33',
    title:
      'Tesla rival Li Auto (LI) falls short of estimates, delivering 28687 EVs on Q2',
    tickers: ['LI'],
    date: new Date('2022-08-15'),
    content: [
      'The miss was mainly due to COVID lockdown in Q2',
      'Q3 is expected to deliver between 27,000 - 29,000 vehicles, up 7.5% - 15.5% YoY, lower than the estimates.',
    ],
    stats: [
      {
        name: 'Vehicle Deliveries',
        value: 28687,
        previousValue: 17575,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Total Revenues ($)',
        value: 1.3 * BILLION,
        changeRate: 0.733,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Gross Profit',
        value: 280.4 * MILLION,
        changeRate: 0.971,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
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
    ],
  },
];
