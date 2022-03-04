import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const crm: StockAnalysis = {
  predications: [
    {
      start: new Date('2022-3-1'),
      days: 60,
      price: 150,
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
    mission: ['We build bridges between companies and customers.'],
    markets: [
      { type: MarketType.customerRelationManagement, size: 57.9 * BILLION },
    ],
    overview: [
      'customer relationship management (“CRM”) technology that brings companies and their customers together.',
      'connect with their customers through digital channels.',
    ],
    notes: [
      'm, we deliver a single source of truth, connecting customer data across systems, apps and devices to help companies sell, service, market andconduct commerce from anywhere.',
    ],
  },
};
