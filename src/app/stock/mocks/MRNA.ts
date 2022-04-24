import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const mrna: StockAnalysis = {
  marketCap: 52 * BILLION,
  logo: '',
  name: 'Moderna, Inc.',
  description: [],
  ticker: 'mrna',
  shortName: 'Moderna',
  irAddress: 'https://investors.modernatx.com/',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 7211 * MILLION,
      costOfRevenue: 952 * MILLION,
      grossProfit: 6259 * MILLION,
      sellingGeneralAndAdministrative: 201 * MILLION,
      researchAndDevelopment: 648 * MILLION,
      totalOperatingExpense: 1801 * MILLION,
      operatingIncome: 5410 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 5410 * MILLION,
      provisionForIncomeTaxes: 542 * MILLION,
      netIncome: 4868 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 4969 * MILLION,
      costOfRevenue: 722 * MILLION,
      grossProfit: 4247 * MILLION,
      sellingGeneralAndAdministrative: 168 * MILLION,
      researchAndDevelopment: 521 * MILLION,
      totalOperatingExpense: 1411 * MILLION,
      operatingIncome: 3558 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -6 * MILLION,
      netIncomeBeforeTaxes: 3552 * MILLION,
      provisionForIncomeTaxes: 219 * MILLION,
      netIncome: 3333 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 4354 * MILLION,
      costOfRevenue: 750 * MILLION,
      grossProfit: 3604 * MILLION,
      sellingGeneralAndAdministrative: 121 * MILLION,
      researchAndDevelopment: 421 * MILLION,
      totalOperatingExpense: 1292 * MILLION,
      operatingIncome: 3062 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 3063 * MILLION,
      provisionForIncomeTaxes: 283 * MILLION,
      netIncome: 2780 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1937 * MILLION,
      costOfRevenue: 193 * MILLION,
      grossProfit: 1744 * MILLION,
      sellingGeneralAndAdministrative: 77 * MILLION,
      researchAndDevelopment: 401 * MILLION,
      totalOperatingExpense: 671 * MILLION,
      operatingIncome: 1266 * MILLION,
      interestIncomeNet: 1 * MILLION,
      otherIncomeNet: -7 * MILLION,
      netIncomeBeforeTaxes: 1260 * MILLION,
      provisionForIncomeTaxes: 39 * MILLION,
      netIncome: 1221 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 570 * MILLION,
      costOfRevenue: 7 * MILLION,
      grossProfit: 562 * MILLION,
      sellingGeneralAndAdministrative: 78 * MILLION,
      researchAndDevelopment: 758 * MILLION,
      totalOperatingExpense: 845 * MILLION,
      operatingIncome: -275 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: -271 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -272 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 157 * MILLION,
      costOfRevenue: NaN * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 48 * MILLION,
      researchAndDevelopment: 344 * MILLION,
      totalOperatingExpense: 393 * MILLION,
      operatingIncome: -235 * MILLION,
      interestIncomeNet: 2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -232 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -233 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 66 * MILLION,
      costOfRevenue: NaN * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 36 * MILLION,
      researchAndDevelopment: 151 * MILLION,
      totalOperatingExpense: 188 * MILLION,
      operatingIncome: -122 * MILLION,
      interestIncomeNet: 5 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -116 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -116 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 8 * MILLION,
      costOfRevenue: NaN * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 24 * MILLION,
      researchAndDevelopment: 115 * MILLION,
      totalOperatingExpense: 139 * MILLION,
      operatingIncome: -130 * MILLION,
      interestIncomeNet: 6 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -124 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -124 * MILLION,
    },
  ],
};
