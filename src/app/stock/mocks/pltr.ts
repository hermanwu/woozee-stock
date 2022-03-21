import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const pltr: StockAnalysis = {
  marketCap: 23.71 * BILLION,
  risks: [
    {
      type: FactType.business,
      name: 'Big commercial company own the data and has their own data team.',
    },
    {
      type: FactType.business,
      name: 'How to compete with competitors that are specilizing in one domain?. i.e. CrowdStrike',
    },
    {
      type: FactType.business,
      name: 'What Platiner wants to create?',
    },
  ],

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 443 * 1e6,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      revenue: 432.87 * 1e6,
      revenueRetention: 1.31,
      operatingIncome: -58.94 * 1e6,
      salesAndMarketingCost: 162.593 * MILLION,
      activeUserCount: 237,
      notes: [
        { content: 'Commercial revenue grew 47% year-over-year' },
        { content: 'US commercial revenue grew 132% year-over-year' },
        { content: 'Government revenue grew 26% year-over-year' },
        { content: 'Total net dollar retention of 131%' },
        { content: 'Annual revenue growth of 30% or greater through 2025' },
      ],
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 392.15 * 1e6,
      operatingIncome: -91.94 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 375.64 * 1e6,
      operatingIncome: -146.15 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 341.23 * 1e6,
      operatingIncome: -114.01 * 1e6,
      isAnnual: true,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001321655/97b89af1-0ad9-4daf-a411-6ca576744e7e.pdf',
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 322.09 * 1e6,
      operatingIncome: -156.57 * 1e6,
      activeUserCount: 139,
    },
  ],

  logo: '',
  name: 'Palantir',
  ticker: 'PLTR',
  irAddress: 'https://investors.palantir.com/',
  secFilings: 'https://investors.palantir.com/financials/sec-filings',
  description: [
    {
      content: 'Help eliminate data sciene team in a company',
    },
    {
      content:
        ' palantir is cheaper and lets users create low-code/no-code applications. This enables the cost savings since coding requires time, money, and expertise which may not be available',
    },
    {
      content: 'Government money is sticky',
    },
    {
      content: 'Strength',
      notes: [
        {
          content: 'New Generation of software compared to MSFt and SAP',
        },
        {
          content: 'Privacy and security seriously (worked for CIA and FBI)',
        },
        {
          content:
            'Simulate the what if situation with AI based suggestion, and eliminate code',
        },

        {
          content: 'Central Operating System for Data',
        },
        {
          content:
            'Our Software Does Not Displace Existing Systems, It Augments Them',
        },
        {
          content:
            ' identify  patterns  hidden  deep  within  datasets,  ranging  from  signals  intelligence  sources  to  reports  from  confidential informants',
        },
        {
          content: 'We have chosen sides.',
        },
        {
          content:
            'Our software engineers are on the front lines. Our forward deployed engineers (“FDEs”) have travelled to bases in Afghanistan and factories in the industrial Midwest to deploy our platforms',
        },
      ],
    },
    {
      content: 'Growth',
      notes: [
        {
          content: 'Continue expansion into the commercial sector.',
        },
        {
          content:
            'Become the default operating system for data across the U.S. government.',
        },
        {
          content: 'Expand our reach with U.S. allies abroad.',
        },
      ],
    },
    {
      content: 'Principles',
      notes: [
        {
          content:
            'Decisions that can affect individuals’ rights and liberties cannot be left solely to computers.',
        },
        {
          content: 'Technology is not the answer to every problem',
        },
      ],
    },
  ],
  business: {
    overview: [
      'Build software platforms ... that must be able to function in times of stability as well as crisis and uncertainty.',
      'Creates a Central Operating System for Data',
      'Transform massive amounts of information into an integrated data asset that reflects their operations.',
      'We do not sell features, tools, or one-off custom applications.',
      'Our forward deployed engineers (“FDEs”) have travelled to bases in Afghanistan and factories in the industrial Midwest to deploy our platforms.',
      ' its ability to construct a model of the real world from countless data points',
      ' We build software platforms that become part of the institutions we serve. ',
    ],
    revenues: [
      { type: RevenueType.softwareSelling },
      { type: RevenueType.b2b },
    ],
    competitiveAdvantages: [
      { type: StrategyType.userData },
      { type: StrategyType.technology },
    ],
    markets: [{ type: MarketType.dataAnalytics }],
    users: [{ type: 'Any Employee' }],
  },
  competitors: ['snow'], //'ai', 'crwd', 'CRM', 'DATA'
};
