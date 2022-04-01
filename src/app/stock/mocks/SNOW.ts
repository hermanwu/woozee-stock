import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const snow: StockAnalysis = {
  marketCap: 75 * BILLION,
  business: {
    overview: [
      'Enabling customers to consolidate data into a single source of truth to drive meaningful business insights, build data-driven applications, and share data',
      'The more customers adopt our platform, the more data can be exchanged with other Snowflake customers, partners, data providers, and data consumers, enhancing the value of our platform for all users.',
    ],
    markets: [
      {
        type: MarketType.dataAnalytics,
      },
      {
        type: MarketType.saas,
      },
    ],
    users: [{ type: 'Data Scientist' }, { type: 'Data Analyst' }],
    revenues: [
      { name: '', type: RevenueType.b2b },
      { name: '', type: RevenueType.saas },
      { name: '', type: RevenueType.consumptionBased },
    ],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.tool },
      { type: StrategyType.feature },
      { type: StrategyType.networkEffect },
    ],
  },
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 383.774 * MILLION,
      grossProfit: 249.59 * MILLION,
      activeUserCount: 5944,
      revenueRetention: 1.78,
      operatingIncome: -152.029 * MILLION,
      salesAndMarketingCost: 203.287 * MILLION,
      pressReleaseLink:
        'https://investors.snowflake.com/news/news-details/2022/Snowflake-Reports-Financial-Results-for-the-Fourth-Quarter-and-Full-Year-of-Fiscal-2022/default.aspx',
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 334.44 * MILLION,
      grossProfit: 213.66 * MILLION,
      operatingIncome: -157.27 * MILLION,
      salesAndMarketingCost: 190.971 * MILLION,
      activeUserCount: 5416,
      revenueRetention: 1.73,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/71156b3e-d36b-4768-ac1f-f64f88d9704b.pdf',
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 272.2 * MILLION,
      grossProfit: 166.08 * MILLION,
      operatingIncome: -200.14 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 228.91 * MILLION,
      grossProfit: 131.57 * MILLION,
      operatingIncome: -205.59 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 190.465 * MILLION,
      grossProfit: 107.56 * MILLION,
      operatingIncome: -200.4 * MILLION,
      salesAndMarketingCost: 154.05 * MILLION,
      activeUserCount: 4139,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/13f710c7-3329-4ce0-8804-55e95f5f29f5.pdf',
      isAnnual: true,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 159.62 * MILLION,
      grossProfit: 92.94 * MILLION,
      operatingIncome: -169.45 * MILLION,
      activeUserCount: 3554,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 133.15 * MILLION,
      grossProfit: 82.7 * MILLION,
      operatingIncome: -77.68 * MILLION,
      activeUserCount: 3554,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 108.81 * MILLION,
      grossProfit: 66.26 * MILLION,
      operatingIncome: -96.4 * MILLION,
      activeUserCount: 3554,
    },
  ],

  logo: '',
  name: 'Snowflake',
  description: [],
  ticker: 'snow',
  irAddress: 'https://investors.snowflake.com/overview/default.aspx',
  secFilings:
    'https://investors.snowflake.com/financials/sec-filings/default.aspx',
};
