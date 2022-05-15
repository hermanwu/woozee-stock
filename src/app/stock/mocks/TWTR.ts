import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const twtrCatalysts = [
  {
    name: 'Elon Musk became the largest stakeholder of Twitter (9.2%)',
    level: CatalystLevel.strong,
    type: FactType.sentiment,
    date: new Date('2022-04-18'),
  },
  {
    name: 'P/S and P/Gross Profit are relatively low.',
    level: CatalystLevel.moderate,
    type: FactType.valuation,
    date: new Date('2022-04-18'),
  },
  {
    name: 'Both operating income and net income are positive this quarter.',
    level: CatalystLevel.moderate,
    type: FactType.profit,
    date: new Date('2022-04-18'),
  },
];

export const twtrRisks = [
  {
    uuid: 'risk-6',
    content: "Twitter's future is unknown under current acquisition drama",
    level: RiskLevel.shortTerm,
    tickers: ['TWTR'],
    type: FactType.event,
  },
  {
    name: 'Revenue is not growing fast enough. (low to mid 20% range)',
    type: FactType.growth,
    level: RiskLevel.longTerm,
    notes: [
      {
        content: 'Q4 2021 revenue growth is 22%.',
      },
      {
        content: 'Total ad engagements decreased 12% in Q4 2021.',
      },
      {
        content:
          'Expect full-year revenue to grow in the low to mid 20% range in 2022.',
      },
    ],
  },
  {
    name: 'Expense grows faster than income.',
    type: FactType.profit,
    level: RiskLevel.shortTerm,
    notes: [
      {
        content:
          'Gross profit only increased 23% while operating expenses increased 42% Q/Q.',
      },
      {
        content: 'Sales and marketing expenses grew 39% Q/Q',
      },
      {
        content:
          'General and administrative expenses increased 55% due to higher personnel-related costs and professional fees.',
      },
      {
        content:
          'Operating margin and net margin decreased in the quarter (20% -> 11%, 17% -> 12%).',
      },
      {
        content:
          'In Q1 2022, GAAP operating loss to be between $225 million and $175 million ',
      },
    ],
  },
];

export const twtr: StockAnalysis = {
  marketCap: 31.47 * BILLION,
  logo: '',
  name: 'Twitter, Inc.',
  description: [],
  ticker: 'twtr',
  shortName: 'Twitter',
  irAddress: 'https://investor.twitterinc.com/home/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      isForecast: true,
      fullyYearForecastRevenue: 5.08 * BILLION * 1.22,
      totalRevenue: 1.22 * BILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1567 * MILLION,
      costOfRevenue: 515 * MILLION,
      grossProfit: 1052 * MILLION,
      sellingGeneralAndAdministrative: 512 * MILLION,
      researchAndDevelopment: 371 * MILLION,
      unusualExpenseIncome: -23 * MILLION,
      totalOperatingExpense: 1376 * MILLION,
      operatingIncome: 191 * MILLION,
      interestIncomeNet: -3 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 184 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: 181 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1283 * MILLION,
      costOfRevenue: 484 * MILLION,
      grossProfit: 799 * MILLION,
      sellingGeneralAndAdministrative: 451 * MILLION,
      researchAndDevelopment: 324 * MILLION,
      unusualExpenseIncome: 740 * MILLION,
      totalOperatingExpense: 2001 * MILLION,
      operatingIncome: -717 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: -727 * MILLION,
      provisionForIncomeTaxes: -190 * MILLION,
      netIncome: -536 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1190 * MILLION,
      costOfRevenue: 416 * MILLION,
      grossProfit: 773 * MILLION,
      sellingGeneralAndAdministrative: 443 * MILLION,
      researchAndDevelopment: 299 * MILLION,
      unusualExpenseIncome: -51 * MILLION,
      totalOperatingExpense: 1108 * MILLION,
      operatingIncome: 82 * MILLION,
      interestIncomeNet: -4 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: 81 * MILLION,
      provisionForIncomeTaxes: 15 * MILLION,
      netIncome: 65 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1036 * MILLION,
      costOfRevenue: 381 * MILLION,
      grossProfit: 655 * MILLION,
      sellingGeneralAndAdministrative: 352 * MILLION,
      researchAndDevelopment: 250 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 983 * MILLION,
      operatingIncome: 52 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 50 * MILLION,
      provisionForIncomeTaxes: -18 * MILLION,
      netIncome: 68 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 1289 * MILLION,
      costOfRevenue: 432 * MILLION,
      grossProfit: 856 * MILLION,
      sellingGeneralAndAdministrative: 356 * MILLION,
      researchAndDevelopment: 247 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1037 * MILLION,
      operatingIncome: 251 * MILLION,
      interestIncomeNet: -27 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 224 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: 222 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 936 * MILLION,
      costOfRevenue: 361 * MILLION,
      grossProfit: 574 * MILLION,
      sellingGeneralAndAdministrative: 309 * MILLION,
      researchAndDevelopment: 208 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 880 * MILLION,
      operatingIncome: 55 * MILLION,
      interestIncomeNet: -22 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 29 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: 28 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 683 * MILLION,
      costOfRevenue: 288 * MILLION,
      grossProfit: 395 * MILLION,
      sellingGeneralAndAdministrative: 453 * MILLION,
      researchAndDevelopment: 215 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 957 * MILLION,
      operatingIncome: -274 * MILLION,
      interestIncomeNet: -14 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -289 * MILLION,
      provisionForIncomeTaxes: 1088 * MILLION,
      netIncome: -1378 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 807 * MILLION,
      costOfRevenue: 284 * MILLION,
      grossProfit: 523 * MILLION,
      sellingGeneralAndAdministrative: 330 * MILLION,
      researchAndDevelopment: 200 * MILLION,
      unusualExpenseIncome: 8 * MILLION,
      totalOperatingExpense: 823 * MILLION,
      operatingIncome: -15 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -15 * MILLION,
      provisionForIncomeTaxes: -7 * MILLION,
      netIncome: -8 * MILLION,
    },
  ],

  business: {
    markets: [MarketType.adTech],
  },
};
