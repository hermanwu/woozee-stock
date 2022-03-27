import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const docu: StockAnalysis = {
  marketCap: 14.329 * BILLION,
  logo: '',
  name: 'DOCUSIGN, INC.',
  description: [],
  ticker: 'docu',
  irAddress: 'https://investor.docusign.com/investors/home/default.aspx',
  shortName: 'DocuSign',
  competitors: ['googl', 'crm', 'intu'],

  risks: [
    {
      type: FactType.growth,
      name: 'Profession service revenue decreases 19% (16.8 Million)',
      notes: [
        {
          content: 'Indicate less large customers',
        },
      ],
    },
    {
      type: FactType.business,
      name: 'Small percent are enterprise customers: (170K out of 1.17M)',
      notes: [
        {
          content: 'Indicate less large customers',
        },
      ],
    },
  ],

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 581 * MILLION,
      fullyYearForecastRevenue: 2476 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 580.8 * MILLION,
      operatingIncome: -25.178 * MILLION,
      activeUserCount: 1.17 * MILLION,
      salesAndMarketingCost: 299.417 * MILLION,
      pressReleaseLink:
        'https://investor.docusign.com/investors/press-releases/press-release-details/2022/DocuSign-Announces-Fourth-Quarter-and-Fiscal-Year-2022-Financial-Results/',
      slidesLink:
        'https://s22.q4cdn.com/408980645/files/doc_financials/2022/q4/DS-Q4-FY2022-Earnings-Slides_Final.pdf',
      revenueRetention: 1.19,
    },

    {
      year: 2021,
      quarter: 3,
      activeUserCount: 1.11 * MILLION,
      totalRevenue: 545.46 * MILLION,
      operatingIncome: -3.36 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 511.84 * MILLION,
      operatingIncome: -22.61 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 469.08 * MILLION,
      operatingIncome: -10.74 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 430.9 * MILLION,
      operatingIncome: -24.897 * MILLION,
      salesAndMarketingCost: 221.896 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 382.92 * MILLION,
      operatingIncome: -48.47 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 342.21 * MILLION,
      operatingIncome: -58.63 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 297.02 * MILLION,
      operatingIncome: -41.85 * MILLION,
    },
  ],
  business: {
    revenues: [
      {
        name: 'Subscription',
        type: RevenueType.subscription,
        amount: 564 * MILLION,
      },
      {
        name: 'Professional Services',
        type: RevenueType.professionService,
        amount: 16.8 * MILLION,
      },
    ],
    markets: [
      {
        type: MarketType.saas,
      },
    ],
  },
};
