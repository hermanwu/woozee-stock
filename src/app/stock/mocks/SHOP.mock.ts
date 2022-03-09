import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { PredicationAction } from '../models/predication.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const shop: StockAnalysis = {
  marketCap: 80 * BILLION,

  predications: [
    {
      price: 400,
      days: 90,
      start: new Date('2022-01-19'),
      action: PredicationAction.Sell,
    },
  ],

  logo: '',
  name: 'SHOPIFY INC.',
  ticker: 'shop',
  irAddress: 'https://investors.shopify.com/home/default.aspx',
  secFilings:
    'https://investors.shopify.com/financial-reports/default.aspx#sec',

  // Demand
  painPoint: [''],
  competitors: ['amzn', 'sq', 'etsy'],
  risks: [
    {
      type: FactType.business,
      name: 'datacenter is hosted on Google Cloud',
    },
    {
      type: FactType.business,
      name: "Google has announced changes to the ways that third parties can use web browsers to obtain user information and Apple has implemented similar changes to iOS 14 that will impact how applications and third parties can access user information. These increasingly restrictive practices could affect our merchants ' ability to sell or market their offerings, which could affect the demand for our platform and lead to the loss of current or prospective merchants or other business relationships.",
    },
    {
      type: FactType.business,
      name: 'We currently rely on a single supplier to provide the technology we offer through Shopify Payments.',
    },
  ],

  // Earnings Report:
  earningsReports: [
    { year: 2022, quarter: 1, isForecast: true, revenue: 1300 * 1e6 },
    {
      year: 2021,
      quarter: 4,
      revenue: 1380.024 * 1e6,
      operatingIncome: 14.404 * 1e6,
      pressReleaseLink:
        'https://news.shopify.com/shopify-announces-fourth-quarter-and-full-year-2021-financial-results',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1123.74 * 1e6,
      operatingIncome: -4.1 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 1119.44 * 1e6,
      operatingIncome: 139.44 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 988.66 * 1e6,
      operatingIncome: 118.9 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 977.744 * 1e6,
      operatingIncome: 112.541 * 1e6,
    },
  ],

  description: [
    {
      content:
        'Shopify is a leading provider of essential internet infrastructure for commerce, offering trusted tools to start, grow, market, and manage a retail business of any size.',
    },
    {
      content:
        'A multi-channel front end. Our software enables merchants to easily display, manage, market and sell their products across over a dozen different sales channels, including web and mobile storefronts, physical retail locations, pop-up shops, social media storefronts, native mobile apps, buy buttons, and marketplaces.',
    },
    {
      content:
        'A single integrated back end. Our software provides one single integrated, easy-to-use back end that merchants use to manage their business and buyers across these multiple sales channels',
    },
  ],
  business: {
    markets: [{ type: MarketType.ecommerceTools }],
    revenues: [
      { type: RevenueType.softwareSelling },
      { type: RevenueType.b2b },
      { type: RevenueType.subscription },
    ],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.tool },
      { type: StrategyType.feature },
      { type: StrategyType.userData },
    ],
  },

  // note: {

  // },
};
