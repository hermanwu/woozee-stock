import { IndustryType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const snowflakeRisks: Risk[] = [
  {
    uuid: 'snowflake-r-1',
    content: 'Snowflake operating expenses is 161% of the gross profit.',
  },
];

export const snow: StockAnalysis = {
  marketCap: 45 * BILLION,
  riskUuids: snowflakeRisks.map((r) => r.uuid),
  business: {
    overview: [
      'Enabling customers to consolidate data into a single source of truth to drive meaningful business insights, build data-driven applications, and share data',
      'The more customers adopt our platform, the more data can be exchanged with other Snowflake customers, partners, data providers, and data consumers, enhancing the value of our platform for all users.',
    ],
    users: [{ type: 'Data Scientist' }, { type: 'Data Analyst' }],
    markets: [IndustryType.saas, IndustryType.b2b, IndustryType.dataAnalytics],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.tool },
      { type: StrategyType.feature },
      { type: StrategyType.networkEffect },
    ],
  },

  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 557.028 * MILLION,
      grossProfit: 366.307 * MILLION,
      operatingIncome: -206.019 * MILLION,
      netIncome: -201.442 * MILLION,
      forecastRevenueTop: 535 * MILLION,
      forecastRevenueBottom: 540 * MILLION,
      date: convertDateToUTC(new Date('2022-11-30')),
      links: [
        {
          name: 'Earnings Release',
          value:
            'https://investors.snowflake.com/news/news-details/2022/Snowflake-Reports-Financial-Results-for-the-Third-Quarter-of-Fiscal-2023/default.aspx',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 497.248 * MILLION,
      grossProfit: 324.016 * MILLION,
      operatingIncome: -207.732 * MILLION,
      netIncome: -222.806 * MILLION,
      forecastRevenueTop: 535 * MILLION,
      forecastRevenueBottom: 530 * MILLION,
      date: convertDateToUTC(new Date('2022-08-24')),
      links: [
        {
          name: 'Earnings Release',
          value:
            'https://investors.snowflake.com/news/news-details/2022/Snowflake-Reports-Financial-Results-for-the-Second-Quarter-of-Fiscal-2023/default.aspx',
        },
        {
          name: 'Investor Presentation',
          value:
            'https://s26.q4cdn.com/463892824/files/doc_financials/2023/q2/Q2-FY2023-Investor-Presentation_vF.pdf',
        },
        {
          name: 'Infographics',
          value:
            'https://s26.q4cdn.com/463892824/files/doc_financials/2023/q2/FY23-Q2-GLOBAL-Regional-Infographics.png',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 422.37 * MILLION,
      grossProfit: 274.44 * MILLION,
      operatingIncome: -188.77 * MILLION,
      netIncome: -165.79 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 383.77 * MILLION,
      costOfRevenue: 134 * MILLION,
      grossProfit: 249 * MILLION,
      sellingGeneralAndAdministrative: 278 * MILLION,
      researchAndDevelopment: 123 * MILLION,
      totalOperatingExpense: 535 * MILLION,
      operatingIncome: -152 * MILLION,
      interestIncomeNet: 21 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -130 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -132 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 334 * MILLION,
      costOfRevenue: 120 * MILLION,
      grossProfit: 213 * MILLION,
      sellingGeneralAndAdministrative: 255 * MILLION,
      researchAndDevelopment: 115 * MILLION,
      totalOperatingExpense: 491 * MILLION,
      operatingIncome: -157 * MILLION,
      interestIncomeNet: 2 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -153 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -154 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 272 * MILLION,
      costOfRevenue: 106 * MILLION,
      grossProfit: 166 * MILLION,
      sellingGeneralAndAdministrative: 248 * MILLION,
      researchAndDevelopment: 118 * MILLION,
      totalOperatingExpense: 472 * MILLION,
      operatingIncome: -200 * MILLION,
      interestIncomeNet: 10 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -189 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -189 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 228 * MILLION,
      costOfRevenue: 97 * MILLION,
      grossProfit: 131 * MILLION,
      sellingGeneralAndAdministrative: 227 * MILLION,
      researchAndDevelopment: 109 * MILLION,
      totalOperatingExpense: 434 * MILLION,
      operatingIncome: -205 * MILLION,
      interestIncomeNet: 2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -203 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -203 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 190 * MILLION,
      costOfRevenue: 82 * MILLION,
      grossProfit: 107 * MILLION,
      sellingGeneralAndAdministrative: 213 * MILLION,
      researchAndDevelopment: 94 * MILLION,
      totalOperatingExpense: 390 * MILLION,
      operatingIncome: -200 * MILLION,
      interestIncomeNet: 1 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -197 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -198 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 159 * MILLION,
      costOfRevenue: 66 * MILLION,
      grossProfit: 92 * MILLION,
      sellingGeneralAndAdministrative: 188 * MILLION,
      researchAndDevelopment: 74 * MILLION,
      totalOperatingExpense: 329 * MILLION,
      operatingIncome: -169 * MILLION,
      interestIncomeNet: 1 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -168 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -168 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 133 * MILLION,
      costOfRevenue: 50 * MILLION,
      grossProfit: 82 * MILLION,
      sellingGeneralAndAdministrative: 123 * MILLION,
      researchAndDevelopment: 36 * MILLION,
      totalOperatingExpense: 210 * MILLION,
      operatingIncome: -77 * MILLION,
      interestIncomeNet: 1 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -77 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -77 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 108 * MILLION,
      costOfRevenue: 42 * MILLION,
      grossProfit: 66 * MILLION,
      sellingGeneralAndAdministrative: 129 * MILLION,
      researchAndDevelopment: 33 * MILLION,
      totalOperatingExpense: 205 * MILLION,
      operatingIncome: -96 * MILLION,
      interestIncomeNet: 2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -93 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -93 * MILLION,
    },
  ],

  logo: '',
  name: 'Snowflake',
  shortName: 'Snowflake',
  description: [],
  ticker: 'snow',
  irAddress: 'https://investors.snowflake.com/overview/default.aspx',
  secFilings:
    'https://investors.snowflake.com/financials/sec-filings/default.aspx',
};
