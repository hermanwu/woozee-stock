import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const cost: StockAnalysis = {
  uuid: 'us-cost',
  name: 'Costco',
  shortName: 'Costco',
  ticker: 'COST',
  irAddress: 'https://investor.costco.com/',
  marketCap: 215.8 * BILLION,

  earningsReports: [
    {
      year: 2022,
      quarter: 4,
      date: getUtcDate(2022, 9, 22),
      totalRevenue: 72.091 * BILLION,
      grossProfit: 72.091 * BILLION - 63.558 * BILLION,
      operatingIncome: 2.497 * BILLION,
      netIncome: 1.868 * BILLION,
      links: [
        {
          name: 'Press Release',
          value:
            'https://investor.costco.com/news-releases/news-release-details/costco-wholesale-corporation-reports-fourth-quarter-and-14',
        },
      ],
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 52596 * MILLION,
      costOfRevenue: 46355 * MILLION,
      grossProfit: 6241 * MILLION,
      sellingGeneralAndAdministrative: 4450 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 50805 * MILLION,
      operatingIncome: 1791 * MILLION,
      interestIncomeNet: 27 * MILLION,
      otherIncomeNet: 9 * MILLION,
      netIncomeBeforeTaxes: 1827 * MILLION,
      provisionForIncomeTaxes: 455 * MILLION,
      netIncome: 1353 * MILLION,
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 51904 * MILLION,
      costOfRevenue: 45517 * MILLION,
      grossProfit: 6387 * MILLION,
      sellingGeneralAndAdministrative: 4575 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 50092 * MILLION,
      operatingIncome: 1812 * MILLION,
      interestIncomeNet: -18 * MILLION,
      otherIncomeNet: 7 * MILLION,
      netIncomeBeforeTaxes: 1801 * MILLION,
      provisionForIncomeTaxes: 481 * MILLION,
      netIncome: 1299 * MILLION,
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 50363 * MILLION,
      costOfRevenue: 43952 * MILLION,
      grossProfit: 6411 * MILLION,
      sellingGeneralAndAdministrative: 4600 * MILLION,
      unusualExpenseIncome: 118 * MILLION,
      totalOperatingExpense: 48670 * MILLION,
      operatingIncome: 1693 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: 8 * MILLION,
      netIncomeBeforeTaxes: 1696 * MILLION,
      provisionForIncomeTaxes: 351 * MILLION,
      netIncome: 1324 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 62675 * MILLION,
      costOfRevenue: 54733 * MILLION,
      grossProfit: 7942 * MILLION,
      sellingGeneralAndAdministrative: 5583 * MILLION,
      unusualExpenseIncome: 84 * MILLION,
      totalOperatingExpense: 60400 * MILLION,
      operatingIncome: 2275 * MILLION,
      interestIncomeNet: 3 * MILLION,
      otherIncomeNet: 13 * MILLION,
      netIncomeBeforeTaxes: 2291 * MILLION,
      provisionForIncomeTaxes: 597 * MILLION,
      netIncome: 1670 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 45277 * MILLION,
      costOfRevenue: 39415 * MILLION,
      grossProfit: 5862 * MILLION,
      sellingGeneralAndAdministrative: 4142 * MILLION,
      unusualExpenseIncome: 57 * MILLION,
      totalOperatingExpense: 43614 * MILLION,
      operatingIncome: 1663 * MILLION,
      interestIncomeNet: -26 * MILLION,
      otherIncomeNet: 13 * MILLION,
      netIncomeBeforeTaxes: 1650 * MILLION,
      provisionForIncomeTaxes: 417 * MILLION,
      netIncome: 1220 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 44769 * MILLION,
      costOfRevenue: 39078 * MILLION,
      grossProfit: 5691 * MILLION,
      sellingGeneralAndAdministrative: 4105 * MILLION,
      unusualExpenseIncome: 246 * MILLION,
      totalOperatingExpense: 43429 * MILLION,
      operatingIncome: 1340 * MILLION,
      interestIncomeNet: -30 * MILLION,
      otherIncomeNet: 9 * MILLION,
      netIncomeBeforeTaxes: 1319 * MILLION,
      provisionForIncomeTaxes: 348 * MILLION,
      netIncome: 951 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 43208 * MILLION,
      costOfRevenue: 37458 * MILLION,
      grossProfit: 5750 * MILLION,
      sellingGeneralAndAdministrative: 4108 * MILLION,
      unusualExpenseIncome: 212 * MILLION,
      totalOperatingExpense: 41778 * MILLION,
      operatingIncome: 1430 * MILLION,
      interestIncomeNet: -21 * MILLION,
      otherIncomeNet: 11 * MILLION,
      netIncomeBeforeTaxes: 1420 * MILLION,
      provisionForIncomeTaxes: 239 * MILLION,
      netIncome: 1166 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 53383 * MILLION,
      costOfRevenue: 46337 * MILLION,
      grossProfit: 7046 * MILLION,
      sellingGeneralAndAdministrative: 4731 * MILLION,
      unusualExpenseIncome: 370 * MILLION,
      totalOperatingExpense: 51454 * MILLION,
      operatingIncome: 1929 * MILLION,
      interestIncomeNet: -36 * MILLION,
      otherIncomeNet: -24 * MILLION,
      netIncomeBeforeTaxes: 1869 * MILLION,
      provisionForIncomeTaxes: 465 * MILLION,
      netIncome: 1389 * MILLION,
    },
  ],
};
