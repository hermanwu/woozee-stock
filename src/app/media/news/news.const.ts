import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    uuid: 'n29',
    content:
      'Ulta raises full year sales and earnings guidance witch better-than-expected 1Q result',
    notes: [
      {
        content:
          'For the quarter, net sales increased 21% to $2.3 billion, comp sales increased 18% (comp sales = sales for stores open at least 14 months and e-commerce sales)',
      },
      {
        content:
          'Increase outlook for fiscal 2022. Expect comp sales growth between 6% and 8%. (low to mid-teens in the first half and then moderate to low single-digit growth in the second half).',
      },
      {
        content:
          'Consumers continue to be highly engaged with the beauty category, as they participate in more in-person activities, engage in more travel and lean into experiential spending',
      },
      {
        content:
          'During the quarter, all major categories exceeded expectation: Fragrance and bath, hair care, makeup, and skin care all delivered double-digit comp growth against the first quarter last year.',
      },
      {
        content:
          'Sales of makeup exceeded pre-pandemic levels in both mass and prestige cosmetics.',
      },
      {
        content:
          'Relaunched makeup services in all stores, just in time to support special events such as proms, graduations and weddings',
      },
      {
        content:
          'Launched skin analysis software and virtual hairstyle try-on software powered by AI startups',
      },
      {
        content:
          "Continue working and leveraging Target's strong traffic to introduce Ulta Beauty and Ultamate Rewards to new guests",
      },
      {
        content:
          'Experienced double-digit growth in supply chain costs, primarily from increases in wage rates, transportation costs and fuel surcharges.',
      },
      {
        content:
          'Average ticket (order size) increased 7.3%, resulting primarily from an increase in average selling price.',
      },
      {
        content:
          'As a percentage of sales, e-commerce sales were 4% lower than last year.',
      },
      {
        content:
          'Not changing long-term financial targets due to limited visibility into the economic environment and expected cost pressures.',
      },
    ],
    source: Source.earningReport,
    date: new Date('2022-05-26'),
    type: EventType.stock,
  },
  {
    uuid: 'n28',
    content: 'Nvidia stock falls on light guidance.',
    notes: [
      {
        content:
          'The stock dropped in extended trading after the chipmaker gave a light forecast for the current quarter.',
      },
      {
        content:
          'Nvidia will slow down its hiring pace and control expenses as the company deals with a challenging macroeconomic environment, its CFO Colette Kress said.',
      },
    ],
    source: Source.cnbc,
    date: new Date('2022-05-26'),
    type: EventType.stock,
  },
  {
    uuid: 'n27',
    content:
      'Nordstrom raises full-year outlook as first-quarter sales top expectation',
    notes: [
      {
        content:
          'Nordstrom also hiked its financial outlook for the full year, citing momentum in the business.',
      },
      {
        content:
          'CEO Erik Nordstrom said the company has been able to capitalize on demand from people who are shopping for “long-awaited occasions.”',
      },
      {
        content:
          'Nordstrom now sees fiscal 2022 revenue, including credit card sales, up 6% to 8%, compared with a prior range of up 5% to 7%.',
      },
      {
        content:
          'The optimistic outlook stands in contrast to retailers like Target, Kohl’s, Abercrombie & Fitch and a slew of others that in recent days dialed back their annual forecasts as supply chain costs and other expenses eat into profits.',
      },
    ],
    source: Source.cnbc,
    date: new Date('2022-05-25'),
    type: EventType.stock,
  },
  {
    uuid: 'n26',
    content: 'Snap CEO Evan Spiegel warned of slowing growth',
    notes: [
      {
        content:
          'His message sent a chill across the digital advertising industry.',
      },
      {
        content:
          'Analysts pointed to macroeconomic trends that could extend far beyond Snap.',
      },
      {
        content:
          'In telling employees and Wall Street that “the macro environment has deteriorated further and faster than we anticipated when we issued our quarterly guidance last month',
      },
    ],
    riskUuids: [],
    catalystUuids: [],
    source: Source.cnbc,
    date: new Date('2022-05-25'),
    type: EventType.stock,
  },
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
