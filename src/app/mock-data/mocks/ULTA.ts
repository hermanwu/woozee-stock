import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const ultaCatalysts: Catalyst[] = [
  {
    uuid: 'ulta-c-1',
    content:
      'Strong tailwind from more in-person activities and travel during post COVID era.',
    tickers: ['ulta'],
  },
];

export const ultaRisks: Risk[] = [
  {
    uuid: 'ulta-r-1',
    content:
      'Face strong competitions from mass retailers like Walmart, Amazon.',
  },
  {
    uuid: 'ulta-r-2',
    content:
      'Depending on the relationship with brands and influencers on social media.',
  },
  {
    uuid: 'ulta-r-3',
    content: 'E-commerce sales were 4% lower than last year.',
    tickers: ['ulta'],
  },
  {
    uuid: 'ulta-r-4',
    content:
      'Limited visibility in supply chain and wage cost under current economic environment.',
    tickers: ['ulta'],
  },
];

export const ulta: StockAnalysis = {
  logo: '',
  name: { English: null },
  description: [],
  ticker: 'ULTA',
  shortName: 'Ulta Beauty',
  marketCap: 22 * BILLION,
  catalystUuids: ultaCatalysts.map((c) => c.uuid),
  riskUuids: ultaRisks.map((r) => r.uuid),

  business: {
    markets: [IndustryType.beauty],
  },
  irAddress: 'https://www.ulta.com/investor',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 2345.901 * MILLION,
      costOfRevenue: 1404.875 * MILLION,
      grossProfit: 941.026 * MILLION,
      operatingIncome: 437.708 * MILLION,
      netIncome: 331.395 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 2729 * MILLION,
      costOfRevenue: 1702 * MILLION,
      grossProfit: 1027 * MILLION,
      sellingGeneralAndAdministrative: 651 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 2353 * MILLION,
      operatingIncome: 375 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 375 * MILLION,
      provisionForIncomeTaxes: 85 * MILLION,
      netIncome: 289 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1995 * MILLION,
      costOfRevenue: 1206 * MILLION,
      grossProfit: 789 * MILLION,
      sellingGeneralAndAdministrative: 505 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1711 * MILLION,
      operatingIncome: 284 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 283 * MILLION,
      provisionForIncomeTaxes: 68 * MILLION,
      netIncome: 215 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1967 * MILLION,
      costOfRevenue: 1169 * MILLION,
      grossProfit: 797 * MILLION,
      sellingGeneralAndAdministrative: 465 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1634 * MILLION,
      operatingIncome: 332 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 331 * MILLION,
      provisionForIncomeTaxes: 80 * MILLION,
      netIncome: 250 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1938 * MILLION,
      costOfRevenue: 1184 * MILLION,
      grossProfit: 753 * MILLION,
      sellingGeneralAndAdministrative: 448 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 1633 * MILLION,
      operatingIncome: 305 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 304 * MILLION,
      provisionForIncomeTaxes: 74 * MILLION,
      netIncome: 230 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 2198 * MILLION,
      costOfRevenue: 1427 * MILLION,
      grossProfit: 771 * MILLION,
      sellingGeneralAndAdministrative: 516 * MILLION,
      unusualExpenseIncome: 30 * MILLION,
      totalOperatingExpense: 1974 * MILLION,
      operatingIncome: 224 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 223 * MILLION,
      provisionForIncomeTaxes: 52 * MILLION,
      netIncome: 171 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 1552 * MILLION,
      costOfRevenue: 1006 * MILLION,
      grossProfit: 545 * MILLION,
      sellingGeneralAndAdministrative: 420 * MILLION,
      unusualExpenseIncome: 23 * MILLION,
      totalOperatingExpense: 1450 * MILLION,
      operatingIncome: 101 * MILLION,
      interestIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 99 * MILLION,
      provisionForIncomeTaxes: 25 * MILLION,
      netIncome: 74 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 1228 * MILLION,
      costOfRevenue: 899 * MILLION,
      grossProfit: 329 * MILLION,
      sellingGeneralAndAdministrative: 275 * MILLION,
      unusualExpenseIncome: 40 * MILLION,
      totalOperatingExpense: 1215 * MILLION,
      operatingIncome: 12 * MILLION,
      interestIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: 10 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: 8 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 1173 * MILLION,
      costOfRevenue: 869 * MILLION,
      grossProfit: 303 * MILLION,
      sellingGeneralAndAdministrative: 385 * MILLION,
      unusualExpenseIncome: 19 * MILLION,
      totalOperatingExpense: 1274 * MILLION,
      operatingIncome: -101 * MILLION,
      interestIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -102 * MILLION,
      provisionForIncomeTaxes: -24 * MILLION,
      netIncome: -78 * MILLION,
    },
  ],
};
