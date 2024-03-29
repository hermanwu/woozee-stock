import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const etsy: StockAnalysis = {
  logo: '',
  name: 'Etsy',
  description: [],
  ticker: 'etsy',
  lastUpdated: new Date('2021-08-23'),
  irAddress: 'https://investors.etsy.com/home/default.aspx',
  marketCap: 15.725 * BILLION,

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 717 * MILLION,
      costOfRevenue: 208 * MILLION,
      grossProfit: 508 * MILLION,
      sellingGeneralAndAdministrative: 283 * MILLION,
      researchAndDevelopment: 82 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 574 * MILLION,
      operatingIncome: 142 * MILLION,
      interestIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: 144 * MILLION,
      provisionForIncomeTaxes: -12 * MILLION,
      netIncome: 161 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 532 * MILLION,
      costOfRevenue: 153 * MILLION,
      grossProfit: 378 * MILLION,
      sellingGeneralAndAdministrative: 221 * MILLION,
      researchAndDevelopment: 73 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 448 * MILLION,
      operatingIncome: 83 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 83 * MILLION,
      provisionForIncomeTaxes: -6 * MILLION,
      netIncome: 89 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 528 * MILLION,
      costOfRevenue: 148 * MILLION,
      grossProfit: 379 * MILLION,
      sellingGeneralAndAdministrative: 229 * MILLION,
      researchAndDevelopment: 61 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 439 * MILLION,
      operatingIncome: 89 * MILLION,
      interestIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 85 * MILLION,
      provisionForIncomeTaxes: -12 * MILLION,
      netIncome: 98 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 550 * MILLION,
      costOfRevenue: 142 * MILLION,
      grossProfit: 407 * MILLION,
      sellingGeneralAndAdministrative: 203 * MILLION,
      researchAndDevelopment: 53 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 400 * MILLION,
      operatingIncome: 150 * MILLION,
      interestIncomeNet: 7 * MILLION,
      netIncomeBeforeTaxes: 157 * MILLION,
      provisionForIncomeTaxes: 13 * MILLION,
      netIncome: 143 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 617 * MILLION,
      costOfRevenue: 150 * MILLION,
      grossProfit: 466 * MILLION,
      sellingGeneralAndAdministrative: 254 * MILLION,
      researchAndDevelopment: 51 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 456 * MILLION,
      operatingIncome: 161 * MILLION,
      interestIncomeNet: -8 * MILLION,
      netIncomeBeforeTaxes: 153 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 148 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 451 * MILLION,
      costOfRevenue: 120 * MILLION,
      grossProfit: 331 * MILLION,
      sellingGeneralAndAdministrative: 167 * MILLION,
      researchAndDevelopment: 45 * MILLION,
      unusualExpenseIncome: 16 * MILLION,
      totalOperatingExpense: 350 * MILLION,
      operatingIncome: 101 * MILLION,
      interestIncomeNet: -10 * MILLION,
      netIncomeBeforeTaxes: 90 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: 91 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 428 * MILLION,
      costOfRevenue: 111 * MILLION,
      grossProfit: 317 * MILLION,
      sellingGeneralAndAdministrative: 152 * MILLION,
      researchAndDevelopment: 45 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 309 * MILLION,
      operatingIncome: 119 * MILLION,
      interestIncomeNet: -6 * MILLION,
      netIncomeBeforeTaxes: 112 * MILLION,
      provisionForIncomeTaxes: 15 * MILLION,
      netIncome: 96 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 228 * MILLION,
      costOfRevenue: 82 * MILLION,
      grossProfit: 145 * MILLION,
      sellingGeneralAndAdministrative: 82 * MILLION,
      researchAndDevelopment: 37 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 202 * MILLION,
      operatingIncome: 25 * MILLION,
      interestIncomeNet: -15 * MILLION,
      netIncomeBeforeTaxes: 9 * MILLION,
      provisionForIncomeTaxes: -2 * MILLION,
      netIncome: 12 * MILLION,
    },
  ],

  business: {
    markets: [IndustryType.ecommerce],
  },
};
