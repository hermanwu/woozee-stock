import { Asset } from 'src/app/assets/asset-type.enum';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RegionCode } from 'src/app/shared/data/enum/region.enum';
import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Rating } from 'src/app/stock/models/rating.model';

export const currentUserMock: {
  defaultLanguage?: string;
  userUuid?: string;
  userName?: string;
  portfolios: any[];
  rankings: any[];
  industriesRankings: any[];
  marketRankings: any[];
  assetRankings: Asset[];
  opinions: Opinion[];
} = {
  userUuid: '1',
  userName: 'Herman',
  portfolios: [
    { name: 'Favorites', stocks: ['crwd', 'aapl', 'snow'] },
    {
      name: 'Mock',
      stocks: ['crwd', 'aapl', 'tsla', 'snow', 'meta'],
    },
  ],
  rankings: [
    'tsla',
    'spy',
    'abnb',
    'snow',
    'aapl',
    'team',
    'amd',
    'hood',
    'amzn',
    'meta',
    'avgo',
    'mdb',
    'adbe',
    'crwd',
  ],

  industriesRankings: [
    IndustryType.ai,
    IndustryType.semi,
    IndustryType.saas,
    IndustryType.autoRobotics,
    IndustryType.ev,
    IndustryType.travel,
  ],

  marketRankings: [RegionCode.us, RegionCode.eu, RegionCode.cn],
  assetRankings: [],
  opinions: [
    {
      targets: ['tsla'],
      title: "Tesla's CFO might think Tesla stock is cheap enough",
      rating: 'Bullish',
      parentUuid: 'e9f50912-b024-4b9e-b812-1df7968d4a2a',
      uuid: '2c19200a-1f75-4086-acf0-7e6a4f957c83',
      date: '2022-12-29T18:57:32.191Z',
    },
    {
      targets: ['US'],
      title: 'Consecutive down years are rare for U.S. stocks.',
      content:
        "* after this year's drop, there's only a low probability they will decline again in 2023\n* markets tend to bottom before a recession starts",
      tags: null,
      rating: 'Bullish',
      parentUuid: 'd179e694-ee48-4a95-8ba9-74f0eb4d850c',
      uuid: '46581a5a-8ebc-44a5-aee9-f35a547ab18f',
      date: '2022-12-29T18:57:32.191Z',
    },
    {
      targets: ['EV'],
      title: 'EV is a better product than combustion engine.',
      tags: ['EV'],
      rating: 'Bullish',
      uuid: '06554f1e-7329-41b2-8ce8-5a7b16cebf9e',
      date: '2022-12-29T18:57:32.191Z',
    },
    {
      targets: ['EV'],
      title:
        'Most governments require all vehicles to become EVs in the future.',
      tags: ['EV'],
      rating: 'Bullish',
      uuid: '06554f1e-7329-41b2-8ce8-5a7b16cebf9f',
      date: '2022-12-29T18:57:32.191Z',
    },
    {
      targets: ['tsla'],
      title:
        'The demand for Tesla continues to decrease as the global recession worsens\n\n\n',
      content: "* Elon Musk's political behaviors are damaging the brand.",
      tags: ['tsla'],
      rating: 'Bearish',
      uuid: '9cfb1487-d35a-43ff-84ff-e2347115248a',
      date: '2022-12-27T20:13:24.360Z',
    },
    {
      targets: ['crm'],
      title:
        'Productivity is an issue for a company that allows work permanently from home',
      tags: ['crm'],
      rating: 'Bearish',
      parentUuid: '8420788c-76f1-4238-88b4-bb3bc24ef1c8',
      uuid: '4aeed3d3-acf8-4f52-bcee-cc4d9ea677b1',
      date: '2022-12-17T16:15:52.391Z',
    },
    {
      targets: ['CRWD'],
      title: 'Operating expense grew quicker than the revenue growth ',
      content: null,
      tags: ['crwd'],
      rating: 'Bearish',
    },
    {
      title: 'P/E ratio is much higher than other big tech.',
      targets: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.profit,
    },
    {
      title: 'P/E ratio is much higher than other big tech.',
      targets: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.profit,
    },
    {
      title:
        'Three key of a business: value proposition, ecosystem, business model.',
      content:
        'Value proposition is how to bring 10x value to the user. Ecosystem is about how to create moat/network effect. It includes all users: free users, preimum users, power users, companies. Business model is about how to make money.',
    },
    {
      title: 'Investing the Future — High Growth Industries and Stocks',
      details: [],
      links: [
        {
          name: '',
          value: 'https://woozee.medium.com/investing-the-future-c672dd6c2716',
        },
      ],
    },
    {
      title: 'Top Growth Stocks To Own In 2022',
      links: [
        {
          name: 'Top Growth Stocks To Own In 2022',
          value:
            'https://woozee.medium.com/top-stocks-with-30-growth-rates-938eeac88e23',
        },
      ],
    },
    {
      title: 'Top Profitable Companies To Own In 2022',
      links: [
        {
          name: 'Top Profitable Companies To Own In 2022',
          value:
            'https://woozee.medium.com/top-10-public-companies-to-own-that-are-not-losing-money-6520862c3c9',
        },
      ],
    },
    {
      title:
        'US will continue block high-end semiconductor chips to be sell in China',
      details: [],
      targets: [IndustryType.semi, 'China'],
      rating: Rating.Bearish,
    },
    {
      title:
        'In Q3, Tesla began to transit a more even regional mix of vehicle builds each week, which makes it hard to secure vehicle transportation capacity and at a reasonable cost during peak logistics weeks.',

      targets: ['TSLA'],
      rating: Rating.Neutral,
      date: getUtcDate(2022, 10, 19),
    },
    {
      title:
        'Tesla is a profit machine. Latest quarterly revenue grew 55.9% YoY, while the operating expense only grew 2.3 YoY.',
      details: [
        'Apple quarterly revenue growth is 1.9%, while the operating expense grew 15.1% YoY',
        'Microsoft quarterly revenue growth is 12.4%, while the operating expense grew 14.1% YoY',
        'Google quarterly revenue growth is 12.6%%, while the operating expense grew 23.5% YoY',
      ],
      targets: ['TSLA'],
      rating: Rating.VeryBullish,
      date: getUtcDate(2022, 10, 19),
    },
    {
      title:
        'More growth catalysts are coming, including energy, semi-truck, robotaxi, optimus robot.',
      details: [
        'Elon Musk said he sees a potential path for Tesla to be worth more than Apple and Saudi Aramco combined.',
      ],
      targets: ['TSLA'],
      rating: Rating.VeryBullish,
      date: getUtcDate(2022, 10, 19),
    },
    {
      title: 'Revenue estimate was missed in 2022Q3',
      targets: ['TSLA'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
    },
    {
      title: 'Automotive gross margin was not growing.',
      targets: ['TSLA'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.profit,
    },
    {
      title: 'Ziglu acquisition will help Robinhood expand to Europe',
      targets: ['HOOD'],
      rating: Rating.Bullish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.growth,
    },
    {
      title: 'No moat to keep users from leaving the platform',
      targets: ['HOOD'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.moats,
    },
    {
      title: 'AWS growth rate dip below 30%',
      targets: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.growth,
    },
    {
      targets: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.profit,
      details: ['P/E ratio is much higher than other big tech.'],
    },
    {
      title: 'Fullfillment Center are costing too much money',
      targets: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.challenges,
    },
    {
      title:
        'Meta 10x next year earning valuation is too low and could pop due to any good news such as Tiktok Ban',
      targets: ['META'],
      actions: ['Sell put and use the money to buy long term call.'],
      date: getUtcDate(2022, 10, 19),
    },
    {
      title: 'Post pandemics decreases the demand for food delivery',
      targets: [IndustryType.foodDelivery],
      date: getUtcDate(2022, 10, 23),
    },
  ],
};
