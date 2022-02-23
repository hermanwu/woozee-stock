import { BusinessArea } from 'src/app/facts/data/area.enum';
import { RevenueModel } from 'src/app/facts/data/revenue-model.enum';
import { Strategy } from 'src/app/facts/data/stratgies.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const snow: StockAnalysis = {
  marketCap: 82.38 * BILLION,
  business: {
    overview: [
      'Enabling customers to consolidate data into a single source of truth to drive meaningful business insights, build data-driven applications, and share data',
      'The more customers adopt our platform, the more data can be exchanged with other Snowflake customers, partners, data providers, and data consumers, enhancing the value of our platform for all users.',
    ],
    marketSize: 81 * BILLION,
    areas: [BusinessArea.dataAnalytics],
    users: ['Data Scientist', 'Data Analyst'],
    revenues: [
      RevenueModel.b2b,
      RevenueModel.saas,
      RevenueModel.consumptionBased,
    ],
    strategies: [
      Strategy.platform,
      Strategy.tool,
      Strategy.feature,
      Strategy.networkEffect,
    ],
    competitions: [
      'public cloud providers that generally compete in all of our markets, including Amazon Web Services (AWS), Microsoft Azure(Azure), and Google Cloud Platform (GCP);',
    ],
  },
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 347.5 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 334.44 * 1e6,
      operatingIncome: -157.27 * 1e6,
      salesAndMarketingCost: -190.971 * MILLION,
      userCount: 5416,
      revenueRetention: 1.73,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/71156b3e-d36b-4768-ac1f-f64f88d9704b.pdf',
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 272.2 * 1e6,
      operatingIncome: -200.14 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 228.91 * 1e6,
      operatingIncome: -205.59 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 190.47 * 1e6,
      operatingIncome: -200.4 * 1e6,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/13f710c7-3329-4ce0-8804-55e95f5f29f5.pdf',
      isAnnual: true,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 159.62 * 1e6,
      operatingIncome: -169.45 * 1e6,
    },
  ],

  logo: '',
  name: 'Snowflake',
  description: [],
  ticker: 'snow',
  irAddress: 'https://investors.snowflake.com/overview/default.aspx',
  secFilings:
    'https://investors.snowflake.com/financials/sec-filings/default.aspx',
  tenK: 'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/13f710c7-3329-4ce0-8804-55e95f5f29f5.pdf',
};
