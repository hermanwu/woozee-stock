import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    uuid: 'n25',
    content:
      'Maverick Capital increases bets on Carvana, Uber and Snowflake in the first quarter',
    source: Source.cnbc,
    date: new Date('2022-05-02'),
    type: EventType.investor,
  },
  {
    uuid: 'n24',
    content:
      'Coinbase earnings missed analyst estimates and shares fell as much as 19% in extended trading.',
    source: Source.OFFICIAL,
    date: new Date('2022-05-02'),
    type: EventType.stock,
    notes: [
      {
        content: 'Loss per share (EPS): $1.98',
      },
      {
        content:
          'Revenue: $1.17 billion, versus $1.48 billion expected, fell 27% from a year ago, and it also reported a net loss of $430 million in the first quarter.',
      },
      {
        content:
          'Retail monthly transaction users (MTUs) fell to 9.2 million, down from 11.4 million in the fourth quarter',
      },
      {
        content:
          'Total trading volume dropped from $547 billion in Q4 to $309 billion',
      },
      {
        content:
          '"While we continue to invest and enhance our core investment platform, the application era of crypto is upon us, led by NFDs and decentralized finance, and we are increasingly focusing our efforts on these market opportunities."',
      },
      {
        content:
          'Increased spending also helped to drag down the company’s bottom line. Overall operating expenses came in at $1.72 billion, outstripping revenue for the first time since the company began reporting finances publicly.',
        notes: [
          {
            content:
              'General and administrative expenses were $414 million, up 39% compared to the prior quarter.',
          },
          {
            content:
              'Coinbase attributed the rise to higher expenses related to full-time and contractor-related headcount. ',
          },
        ],
      },
    ],
  },
  {
    uuid: 'n23',
    content: 'Mortgage rates just hit their highest level since 2009',
    source: Source.cnbc,
    date: new Date('2022-05-02'),
    type: EventType.macro,
  },
  {
    uuid: 'n22',
    content:
      'Apple shares dip after company warns of a possible $8 billion hit from supply constraints',
    source: Source.cnbc,
    sourceLink: 'cnbc.com/2022/04/28/apple-aapl-earnings-q2-2022.html',
    date: new Date('2022-04-27'),
    type: EventType.stock,
  },
  {
    uuid: 'n21',
    content:
      'Meta jumped about 20% in extended trading on Wednesday on better-than-expected profit.',
    source: Source.cnbc,
    type: EventType.stock,
    sourceLink: 'https://www.cnbc.com/2022/04/27/meta-fb-q1-2022-earnings.html',
    date: new Date('2022-04-27'),
    riskUuids: ['r15', 'r16', 'r14'],
    catalystUuids: ['c6'],
    notes: [
      {
        content:
          'Facebook’s revenue growth had sunk into the single digits (7%) , the slowest pace of expansion in Facebook’s 10-year history as a public company.',
      },
      {
        content: 'Next quarter forecast revenue could decrease.',
      },
      {
        content:
          'Like Snap and Google, Facebook is also being hit by Russia’s invasion of Ukraine.',
      },
      {
        content:
          'Other than the profit number in this report, Facebook provided some good news, as both the daily active user figure and average revenue per user exceeded estimates',
      },
    ],
  },
  {
    uuid: 'n20',
    content:
      'Boeing posts loss as it grapples with delays on commercial and defense programs',
    source: Source.cnbc,
    date: new Date('2022-04-27'),
    type: EventType.stock,
    sourceLink:
      'https://www.cnbc.com/2022/04/27/boeing-ba-1q2022-earnings.html',
    notes: [
      {
        content:
          'Boeing’s first-quarter sales and revenue missed analysts’ estimates.',
      },
      {
        content:
          'The manufacturer says it is pausing 777X production and that it doesn’t expect deliveries to start until 2025.',
      },
      {
        content:
          'Boeing also doesn’t expect deliveries of the plane to start until 2025, more than a year later than it previously forecast. ',
      },
      {
        content:
          'Revenue of $13.99 billion fell 8% from the first quarter of 2021 and short of analysts’ estimates.',
      },
    ],
  },
  {
    uuid: 'n19',
    content: 'Microsoft earnings beat across the board, stock up on outlook',
    source: Source.cnbc,
    date: new Date('2022-04-26'),
    type: EventType.stock,
    sourceLink:
      'https://www.cnbc.com/2022/04/26/microsoft-msft-earnings-q3-2022.html',
    notes: [
      {
        content:
          'Fourth-quarter revenue guidance for each of the company’s three business segments surpassed the expectations of analysts surveyed by StreetAccount.',
      },
      {
        content:
          'Microsoft’s revenue increased by 18% year over year in the quarter, which ended on March 31, compared with 20% in the previous quarter, according to a statement.',
      },
      {
        content:
          'The company’s Intelligent Cloud segment, which contains Microsoft’s Azure public cloud for application hosting, along with SQL Server, Windows Server and enterprise services, generated $19.05 billion in revenue. That’s up 26%',
      },
      {
        content:
          'Revenue from Azure and other cloud services jumped 46% in the quarter, compared with 46% growth in the prior quarter',
      },
      {
        content:
          'Productivity and Business Processes segment, containing Office productivity software, LinkedIn and Dynamics, posted $15.79 billion in revenue in the quarter, up about 17%',
      },
      {
        content:
          'The More Personal Computing Segment, which includes Windows, Xbox, search advertising and Surface, kicked in $14.52 billion in revenue, up 11%',
      },
      {
        content:
          'Microsoft said in January its security revenue grew nearly 45% in 2021, faster than any other major product category',
      },
    ],
  },
  {
    uuid: 'n18',
    content: 'Alphabet reports weak earnings and revenue on big YouTube miss',
    source: Source.cnbc,
    date: new Date('2022-04-26'),
    type: EventType.stock,
    notes: [
      {
        content:
          'Google’s revenue came in at $68.01 billion, growth of 23% from the same period last year. That’s a slowdown from 34% growth in the first quarter of 2021, when the economy was reopening from the pandemic.',
      },
      {
        content:
          'YouTube’s TikTok competitor called Shorts now has 30 billion daily views, which is double the amount of views the prior quarter and four times as many as the year before.',
      },
      {
        content:
          'Google’s cloud business was a standout in the quarter, growing 44% and beating estimates as more big enterprises shift their workloads away from their own data centers.',
      },
      {
        content:
          'Revenue growth in the European region, which also includes the Middle East and Africa, slowed to 19% in the first quarter from 33% a year earlier.',
      },
      {
        content:
          'Alphabet’s Other Bets, which includes its life sciences companies and self-driving car unit Waymo, nearly doubled revenue from the year prior to $440 million from $198 million. The unit’s loss slightly increased to $1.15 billion.',
      },
    ],
  },
  {
    uuid: 'n17',
    content: 'Robinhood cuts 9% employee.',
    source: Source.cnbc,
    date: new Date('2022-04-26'),
    type: EventType.stock,
  },
  {
    uuid: 'n15',
    content: 'Tesla revenues grow 81% from last year',
    source: Source.cnbc,
    date: new Date('2022-04-20'),
    type: EventType.stock,
    catalystUuids: [],
    riskUuids: [],
  },
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
