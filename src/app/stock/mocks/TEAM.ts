import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';
export const teamRisks = [
  {
    name: 'no income',
    level: RiskLevel.medium,
  },
  {
    name: 'High price to sales ratio: 33.73',
    level: RiskLevel.medium,
    notes: [
      {
        content: 'ServiceNow: 19.29, Salesforce: 8.88',
      },
    ],
  },
  {
    name: 'Marketing and sales, General and administrative cost increases (+74% & +73%)',
    level: RiskLevel.medium,
    notes: [
      {
        content: 'Sales only increases 36%',
      },
    ],
  },
];

export const team: StockAnalysis = {
  marketCap: 64 * BILLION,
  logo: '',
  name: 'Atlassian Corporation Plc',
  description: [],
  ticker: 'team',
  shortName: 'Atlassian',

  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 688 * MILLION,
      costOfRevenue: 115 * MILLION,
      grossProfit: 573 * MILLION,
      sellingGeneralAndAdministrative: 262 * MILLION,
      researchAndDevelopment: 374 * MILLION,
      unusualExpenseIncome: 7 * MILLION,
      totalOperatingExpense: 755 * MILLION,
      operatingIncome: -66 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -73 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: -77 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 614 * MILLION,
      costOfRevenue: 98 * MILLION,
      grossProfit: 516 * MILLION,
      sellingGeneralAndAdministrative: 194 * MILLION,
      researchAndDevelopment: 279 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 574 * MILLION,
      operatingIncome: 39 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: -424 * MILLION,
      netIncomeBeforeTaxes: -392 * MILLION,
      provisionForIncomeTaxes: 7 * MILLION,
      netIncome: -400 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 559 * MILLION,
      costOfRevenue: 96 * MILLION,
      grossProfit: 463 * MILLION,
      sellingGeneralAndAdministrative: 218 * MILLION,
      researchAndDevelopment: 242 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 567 * MILLION,
      operatingIncome: -7 * MILLION,
      interestIncomeNet: -7 * MILLION,
      otherIncomeNet: -199 * MILLION,
      netIncomeBeforeTaxes: -214 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -213 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 568 * MILLION,
      costOfRevenue: 84 * MILLION,
      grossProfit: 483 * MILLION,
      sellingGeneralAndAdministrative: 167 * MILLION,
      researchAndDevelopment: 244 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 499 * MILLION,
      operatingIncome: 69 * MILLION,
      interestIncomeNet: -9 * MILLION,
      otherIncomeNet: 150 * MILLION,
      netIncomeBeforeTaxes: 211 * MILLION,
      provisionForIncomeTaxes: 51 * MILLION,
      netIncome: 159 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 501 * MILLION,
      costOfRevenue: 79 * MILLION,
      grossProfit: 421 * MILLION,
      sellingGeneralAndAdministrative: 150 * MILLION,
      researchAndDevelopment: 241 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 473 * MILLION,
      operatingIncome: 27 * MILLION,
      interestIncomeNet: -89 * MILLION,
      otherIncomeNet: -545 * MILLION,
      netIncomeBeforeTaxes: -607 * MILLION,
      provisionForIncomeTaxes: 14 * MILLION,
      netIncome: -621 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 459 * MILLION,
      costOfRevenue: 73 * MILLION,
      grossProfit: 385 * MILLION,
      sellingGeneralAndAdministrative: 139 * MILLION,
      researchAndDevelopment: 232 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 447 * MILLION,
      operatingIncome: 11 * MILLION,
      interestIncomeNet: -9 * MILLION,
      otherIncomeNet: -26 * MILLION,
      netIncomeBeforeTaxes: -24 * MILLION,
      provisionForIncomeTaxes: -2 * MILLION,
      netIncome: -21 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 430 * MILLION,
      costOfRevenue: 70 * MILLION,
      grossProfit: 360 * MILLION,
      sellingGeneralAndAdministrative: 150 * MILLION,
      researchAndDevelopment: 210 * MILLION,
      totalOperatingExpense: 433 * MILLION,
      operatingIncome: -3 * MILLION,
      interestIncomeNet: -9 * MILLION,
      otherIncomeNet: -383 * MILLION,
      netIncomeBeforeTaxes: -395 * MILLION,
      provisionForIncomeTaxes: -10 * MILLION,
      netIncome: -385 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 411 * MILLION,
      costOfRevenue: 70 * MILLION,
      grossProfit: 340 * MILLION,
      sellingGeneralAndAdministrative: 153 * MILLION,
      researchAndDevelopment: 204 * MILLION,
      totalOperatingExpense: 431 * MILLION,
      operatingIncome: -19 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: -141 * MILLION,
      netIncomeBeforeTaxes: -166 * MILLION,
      provisionForIncomeTaxes: -8 * MILLION,
      netIncome: -158 * MILLION,
    },
  ],
};
