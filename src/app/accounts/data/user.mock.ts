import { Asset } from 'src/app/assets/asset-type.enum';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { Opinion } from 'src/app/opinions/components/opinion-display/opinion.interface';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RegionCode } from 'src/app/shared/data/enum/region.enum';
import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';
import { Rating } from 'src/app/stock/models/rating.model';

export const currentUserMock: {
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
    'coin',
    'crwd',
    'team',
    'amd',
    'hood',
    'amzn',
    'meta',
    'adbe',
    'avgo',
  ],

  industriesRankings: [
    IndustryType.ai,
    IndustryType.semi,
    IndustryType.saas,
    IndustryType.autoRobotics,
  ],

  marketRankings: [RegionCode.us, RegionCode.eu, RegionCode.cn],
  assetRankings: [],
  opinions: [
    {
      content: [
        'Three key of a business: value proposition, ecosystem, business model.',
        'Value proposition is how to bring 10x value to the user.',
        'Ecosystem is about how to create moat/network effect. It includes all users: free users, preimum users, power users, companies.',
        'Business model is about how to make money.',
      ],
    },
    {
      content: [],
      links: [
        {
          name: 'Investing the Future — High Growth Industries and Stocks',
          value: 'https://woozee.medium.com/investing-the-future-c672dd6c2716',
        },
      ],
    },
    {
      content: [],
      links: [
        {
          name: 'Top Growth Stocks To Own In 2022',
          value:
            'https://woozee.medium.com/top-stocks-with-30-growth-rates-938eeac88e23',
        },
      ],
    },
    {
      content: [],
      links: [
        {
          name: 'Top Profitable Companies To Own In 2022',
          value:
            'https://woozee.medium.com/top-10-public-companies-to-own-that-are-not-losing-money-6520862c3c9',
        },
      ],
    },
    {
      content: [
        'US will continue block high-end semiconductor chips to be sell in China',
      ],
      tags: [IndustryType.semi, 'China'],
      rating: Rating.Bearish,
    },
    {
      content: [
        'In Q3, Tesla began to transit a more even regional mix of vehicle builds each week, which makes it hard to secure vehicle transportation capacity and at a reasonable cost during peak logistics weeks.',
      ],
      tags: ['TSLA'],
      rating: Rating.Neutral,
      date: getUtcDate(2022, 10, 19),
    },
    {
      content: [
        'Tesla is a profit machine. Latest quarterly revenue grew 55.9% YoY, while the operating expense only grew 2.3 YoY.',
        'Apple quarterly revenue growth is 1.9%, while the operating expense grew 15.1% YoY',
        'Microsoft quarterly revenue growth is 12.4%, while the operating expense grew 14.1% YoY',
        'Google quarterly revenue growth is 12.6%%, while the operating expense grew 23.5% YoY',
      ],
      tags: ['TSLA'],
      rating: Rating.VeryBullish,
      date: getUtcDate(2022, 10, 19),
    },
    {
      content: [
        'More growth catalysts are coming, including energy, semi-truck, robotaxi, optimus robot.',
        'Elon Musk said he sees a potential path for Tesla to be worth more than Apple and Saudi Aramco combined.',
      ],
      tags: ['TSLA'],
      rating: Rating.VeryBullish,
      date: getUtcDate(2022, 10, 19),
    },
    {
      content: ['Revenue estimate was missed in 2022Q3'],
      tags: ['TSLA'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
    },
    {
      content: ['Automotive gross margin was not growing.'],
      tags: ['TSLA'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.profit,
    },
    {
      content: ['Ziglu acquisition will help Robinhood expand to Europe'],
      tags: ['HOOD'],
      rating: Rating.Bullish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.growth,
    },
    {
      content: ['No moat to keep users from leaving the platform'],
      tags: ['HOOD'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.moats,
    },
    {
      content: ['AWS growth rate dip below 30%'],
      tags: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.growth,
    },
    {
      content: ['P/E ratio is much higher than other big tech.'],
      tags: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.profit,
    },
    {
      content: ['Fullfillment Center are costing too much money'],
      tags: ['AMZN'],
      rating: Rating.Bearish,
      date: getUtcDate(2022, 10, 19),
      factType: FactType.challenges,
    },
    {
      content: [
        'Meta 10x next year earning valuation is too low and could pop due to any good news such as Tiktok Ban',
      ],
      tags: ['META'],
      actions: ['Sell put and use the money to buy long term call.'],
      date: getUtcDate(2022, 10, 19),
    },
  ],
};
