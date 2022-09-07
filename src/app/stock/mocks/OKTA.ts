import { IndustryType } from 'src/app/facts/data/area.enum';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const okta: StockAnalysis = {
  logo: '',
  name: 'Okta',
  description: [],
  ticker: 'OKTA',
  irAddress: 'https://investor.okta.com/',
  industries: [IndustryType.saas],
  shortName: 'Okta',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 451.807 * MILLION,
      grossProfit: 314.113 * MILLION,
      operatingIncome: -208.062 * MILLION,
      netIncome: -210.472 * MILLION,
      forecastRevenueTop: 465 * MILLION,
      forecastRevenueBottom: 463 * MILLION,
      date: convertDateToUTC(new Date('2022-08-31')),
      links: [
        {
          name: 'Fiscal 2023 Q2 Financial Results',
          value:
            'https://investor.okta.com/news-releases/news-release-details/okta-announces-second-quarter-fiscal-year-2023-financial-results',
        },
        {
          name: 'Investor Presentation',
          value:
            'https://investor.okta.com/static-files/22e1872c-bc72-4256-ab19-31ca0a43d783',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 414 * MILLION,
      costOfRevenue: 131 * MILLION,
      grossProfit: 283 * MILLION,
      sellingGeneralAndAdministrative: 361 * MILLION,
      researchAndDevelopment: 161 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 654 * MILLION,
      operatingIncome: -239 * MILLION,
      interestIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -240 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -242 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 383 * MILLION,
      costOfRevenue: 119 * MILLION,
      grossProfit: 263 * MILLION,
      sellingGeneralAndAdministrative: 330 * MILLION,
      researchAndDevelopment: 147 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 597 * MILLION,
      operatingIncome: -214 * MILLION,
      interestIncomeNet: -21 * MILLION,
      netIncomeBeforeTaxes: -235 * MILLION,
      provisionForIncomeTaxes: 5 * MILLION,
      netIncome: -241 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 350 * MILLION,
      costOfRevenue: 109 * MILLION,
      grossProfit: 241 * MILLION,
      sellingGeneralAndAdministrative: 309 * MILLION,
      researchAndDevelopment: 130 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 549 * MILLION,
      operatingIncome: -198 * MILLION,
      interestIncomeNet: -22 * MILLION,
      netIncomeBeforeTaxes: -220 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -221 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 315 * MILLION,
      costOfRevenue: 101 * MILLION,
      grossProfit: 214 * MILLION,
      sellingGeneralAndAdministrative: 355 * MILLION,
      researchAndDevelopment: 122 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 578 * MILLION,
      operatingIncome: -263 * MILLION,
      interestIncomeNet: -20 * MILLION,
      netIncomeBeforeTaxes: -284 * MILLION,
      provisionForIncomeTaxes: -7 * MILLION,
      netIncome: -276 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 251 * MILLION,
      costOfRevenue: 66 * MILLION,
      grossProfit: 184 * MILLION,
      sellingGeneralAndAdministrative: 206 * MILLION,
      researchAndDevelopment: 68 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 341 * MILLION,
      operatingIncome: -90 * MILLION,
      interestIncomeNet: -18 * MILLION,
      netIncomeBeforeTaxes: -109 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -109 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 234 * MILLION,
      costOfRevenue: 61 * MILLION,
      grossProfit: 173 * MILLION,
      sellingGeneralAndAdministrative: 165 * MILLION,
      researchAndDevelopment: 62 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 289 * MILLION,
      operatingIncome: -54 * MILLION,
      interestIncomeNet: -20 * MILLION,
      netIncomeBeforeTaxes: -75 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -75 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 217 * MILLION,
      costOfRevenue: 56 * MILLION,
      grossProfit: 160 * MILLION,
      sellingGeneralAndAdministrative: 154 * MILLION,
      researchAndDevelopment: 58 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 269 * MILLION,
      operatingIncome: -52 * MILLION,
      interestIncomeNet: -20 * MILLION,
      netIncomeBeforeTaxes: -72 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -72 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 200 * MILLION,
      costOfRevenue: 51 * MILLION,
      grossProfit: 149 * MILLION,
      sellingGeneralAndAdministrative: 140 * MILLION,
      researchAndDevelopment: 53 * MILLION,
      unusualExpenseIncome: 2 * MILLION,
      totalOperatingExpense: 248 * MILLION,
      operatingIncome: -47 * MILLION,
      interestIncomeNet: -12 * MILLION,
      netIncomeBeforeTaxes: -60 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -60 * MILLION,
    },
  ],
};
