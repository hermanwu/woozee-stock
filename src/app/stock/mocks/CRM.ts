import { BenefitType } from 'src/app/business-overview/business.model';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { PredicationAction } from '../models/predication.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { crmMarket, saas } from './markets';

export const crm: StockAnalysis = {
  predications: [
    {
      start: new Date('2022-3-1'),
      days: 60,
      price: 130,
      action: PredicationAction.Sell,
    },
  ],
  marketCap: 203.45 * BILLION,
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 7.375 * BILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      revenue: 7.33 * BILLION,
      operatingIncome: -176 * MILLION,
      salesAndMarketingCost: 3.464 * BILLION,
      revenueRetention: 0.9,
      pressReleaseLink:
        'https://s23.q4cdn.com/574569502/files/doc_financials/2022/q4/CRM-Q4-FY22-Earnings-Press-Release-w-financials.pdf',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 6863 * 1e6,
      operatingIncome: 27 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 6340 * 1e6,
      operatingIncome: 312 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 5963 * 1e6,
      operatingIncome: 340 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 5817 * 1e6,
      operatingIncome: 193 * 1e6,
      salesAndMarketingCost: 2.632 * BILLION,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 5419 * 1e6,
      operatingIncome: 224 * 1e6,
    },
  ],

  logo: '',
  name: 'Salesforce',
  description: [],
  ticker: 'crm',
  lastUpdated: new Date('2021-08-25'),
  irAddress: 'https://investor.salesforce.com/overview/default.aspx',
  secFilings: 'https://investor.salesforce.com/financials/default.aspx',
  business: {
    missions: ['We build bridges between companies and customers.'],
    markets: [saas, crmMarket],
    users: [
      {
        type: 'Sales',
      },
    ],
    overview: [
      'customer relationship management (“CRM”) technology that brings companies and their customers together.',
      'connect with their customers through digital channels.',
    ],
    revenues: [
      {
        type: RevenueType.subscription,
      },
    ],
    productBenefits: [
      {
        type: BenefitType.accessibility,
        note: 'Improve accessibility of customer data by delivering a single source of truth, connecting customer data across systems, apps and devices.',
      },
      {
        type: BenefitType.efficiency,
      },
    ],
    growthStrategy: [
      'Expand in the growing addressable markets',
      'Expand relationships with existing customers',
      'Extend go-to-market capabilities globally',
      'Expand into new categories and verticals',
      'Expand and strengthening our partner ecosystem',
    ],
    competitiveAdvantages: [
      {
        type: StrategyType.networkEffect,
      },
    ],
  },
};
