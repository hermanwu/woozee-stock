import { IndustryType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const pltrRisks = [
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
];

export const pltr: StockAnalysis = {
  marketCap: 15 * BILLION,

  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 473 * MILLION,
      costOfRevenue: 102.224 * MILLION,
      operatingIncome: -41.745 * MILLION,
      netIncome: -179.329 * MILLION,
      pressReleaseLink:
        'https://investors.palantir.com/news-details/2022/Palantir-Reports-Revenue-Growth-of-26-YY-for-Q2-2022-US-Commercial-Revenue-Up-120-YY-in-Q2-2022',
      slidesLink:
        'https://investors.palantir.com/files/Palantir%20Q2%202022%20Business%20Update.pdf',
      stats: [
        {
          name: 'US revenue',
          value: 290 * MILLION,
          changeRate: 0.45,
        },
        {
          name: 'Commercial revenue',
          changeRate: 0.46,
        },
        {
          name: 'US government revenue',
          changeRate: 0.27,
        },
        {
          name: 'US commercial customer count',
          changeRate: 0.27,
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 446.357 * MILLION,
      costOfRevenue: 94.403 * MILLION,
      grossProfit: 351.954 * MILLION,
      totalOperatingExpense: 391.393 * MILLION,
      operatingIncome: -39.439 * MILLION,
      netIncome: -101.379 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 432 * MILLION,
      costOfRevenue: 87 * MILLION,
      grossProfit: 345 * MILLION,
      sellingGeneralAndAdministrative: 320 * MILLION,
      researchAndDevelopment: 84 * MILLION,
      totalOperatingExpense: 491 * MILLION,
      operatingIncome: -58 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -64 * MILLION,
      netIncomeBeforeTaxes: -123 * MILLION,
      provisionForIncomeTaxes: 33 * MILLION,
      netIncome: -156 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 392 * MILLION,
      costOfRevenue: 86 * MILLION,
      grossProfit: 305 * MILLION,
      sellingGeneralAndAdministrative: 302 * MILLION,
      researchAndDevelopment: 94 * MILLION,
      totalOperatingExpense: 484 * MILLION,
      operatingIncome: -91 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -8 * MILLION,
      netIncomeBeforeTaxes: -100 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -102 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 375 * MILLION,
      costOfRevenue: 90 * MILLION,
      grossProfit: 284 * MILLION,
      sellingGeneralAndAdministrative: 320 * MILLION,
      researchAndDevelopment: 110 * MILLION,
      totalOperatingExpense: 521 * MILLION,
      operatingIncome: -146 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: -144 * MILLION,
      provisionForIncomeTaxes: -5 * MILLION,
      netIncome: -138 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 341 * MILLION,
      costOfRevenue: 74 * MILLION,
      grossProfit: 267 * MILLION,
      sellingGeneralAndAdministrative: 282 * MILLION,
      researchAndDevelopment: 98 * MILLION,
      totalOperatingExpense: 455 * MILLION,
      operatingIncome: -114 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: -120 * MILLION,
      provisionForIncomeTaxes: 3 * MILLION,
      netIncome: -123 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 322 * MILLION,
      costOfRevenue: 70 * MILLION,
      grossProfit: 251 * MILLION,
      sellingGeneralAndAdministrative: 314 * MILLION,
      researchAndDevelopment: 94 * MILLION,
      totalOperatingExpense: 478 * MILLION,
      operatingIncome: -156 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: -155 * MILLION,
      provisionForIncomeTaxes: -7 * MILLION,
      netIncome: -148 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 289 * MILLION,
      costOfRevenue: 149 * MILLION,
      grossProfit: 140 * MILLION,
      sellingGeneralAndAdministrative: 673 * MILLION,
      researchAndDevelopment: 313 * MILLION,
      totalOperatingExpense: 1137 * MILLION,
      operatingIncome: -847 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: -12 * MILLION,
      netIncomeBeforeTaxes: -861 * MILLION,
      provisionForIncomeTaxes: -8 * MILLION,
      netIncome: -853 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 251 * MILLION,
      costOfRevenue: 68 * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 195 * MILLION,
      researchAndDevelopment: 86 * MILLION,
      totalOperatingExpense: NaN * MILLION,
      operatingIncome: NaN * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: -109 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: NaN * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 229 * MILLION,
      costOfRevenue: 64 * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 169 * MILLION,
      researchAndDevelopment: 65 * MILLION,
      totalOperatingExpense: NaN * MILLION,
      operatingIncome: NaN * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: 19 * MILLION,
      netIncomeBeforeTaxes: -51 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: NaN * MILLION,
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
    // {
    //   content: 'Strength',
    //   notes: [
    //     {
    //       content: 'New Generation of software compared to MSFt and SAP',
    //     },
    //     {
    //       content: 'Privacy and security seriously (worked for CIA and FBI)',
    //     },
    //     {
    //       content:
    //         'Simulate the what if situation with AI based suggestion, and eliminate code',
    //     },

    //     {
    //       content: 'Central Operating System for Data',
    //     },
    //     {
    //       content:
    //         'Our Software Does Not Displace Existing Systems, It Augments Them',
    //     },
    //     {
    //       content:
    //         ' identify  patterns  hidden  deep  within  datasets,  ranging  from  signals  intelligence  sources  to  reports  from  confidential informants',
    //     },
    //     {
    //       content: 'We have chosen sides.',
    //     },
    //     {
    //       content:
    //         'Our software engineers are on the front lines. Our forward deployed engineers (“FDEs”) have travelled to bases in Afghanistan and factories in the industrial Midwest to deploy our platforms',
    //     },
    //   ],
    // },
    // {
    //   content: 'Growth',
    //   notes: [
    //     {
    //       content: 'Continue expansion into the commercial sector.',
    //     },
    //     {
    //       content:
    //         'Become the default operating system for data across the U.S. government.',
    //     },
    //     {
    //       content: 'Expand our reach with U.S. allies abroad.',
    //     },
    //   ],
    // },
    // {
    //   content: 'Principles',
    //   notes: [
    //     {
    //       content:
    //         'Decisions that can affect individuals’ rights and liberties cannot be left solely to computers.',
    //     },
    //     {
    //       content: 'Technology is not the answer to every problem',
    //     },
    //   ],
    // },
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

    competitiveAdvantages: [
      { type: StrategyType.userData },
      { type: StrategyType.technology },
    ],
    markets: [IndustryType.dataAnalytics, IndustryType.defense],
    users: [{ type: 'Any Employee' }],
  },
};
