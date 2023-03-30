import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';

export const ai: StockAnalysis = {
  marketCap: 18.69 * BILLION,
  logo: '',
  name: 'C3.ai',
  description: [],
  displayName: 'C3.ai',
  ticker: 'ai',
  irAddress: 'https://ir.c3.ai/',
  earningsReports: [
    {
      date: convertDateToUTC(new Date('2022-08-31')),
      year: 2022,
      quarter: 2,
      totalRevenue: 65.308 * MILLION,
      grossProfit: 46.902 * MILLION,
      operatingIncome: -73.209 * MILLION,
      netIncome: -71.871 * MILLION,
      forecastRevenueTop: 62 * MILLION,
      forecastRevenueBottom: 60 * MILLION,
      links: [
        {
          name: 'Fiscal 2023 Q1 Financial Results',
          value:
            'https://ir.c3.ai/news-releases/news-release-details/c3-ai-announces-fiscal-first-quarter-2023-financial-results',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 72 * MILLION,
      costOfRevenue: 17 * MILLION,
      grossProfit: 54 * MILLION,
      sellingGeneralAndAdministrative: 65 * MILLION,
      researchAndDevelopment: 46 * MILLION,
      totalOperatingExpense: 128 * MILLION,
      operatingIncome: -56 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: -58 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -58 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 69 * MILLION,
      costOfRevenue: 17 * MILLION,
      grossProfit: 52 * MILLION,
      sellingGeneralAndAdministrative: 58 * MILLION,
      researchAndDevelopment: 40 * MILLION,
      totalOperatingExpense: 117 * MILLION,
      operatingIncome: -47 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 7 * MILLION,
      netIncomeBeforeTaxes: -39 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -39 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 58 * MILLION,
      costOfRevenue: 15 * MILLION,
      grossProfit: 42 * MILLION,
      sellingGeneralAndAdministrative: 61 * MILLION,
      researchAndDevelopment: 36 * MILLION,
      totalOperatingExpense: 113 * MILLION,
      operatingIncome: -55 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -56 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -56 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 52 * MILLION,
      costOfRevenue: 13 * MILLION,
      grossProfit: 39 * MILLION,
      sellingGeneralAndAdministrative: 49 * MILLION,
      researchAndDevelopment: 26 * MILLION,
      totalOperatingExpense: 88 * MILLION,
      operatingIncome: -36 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -37 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -37 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 52 * MILLION,
      costOfRevenue: 11 * MILLION,
      grossProfit: 40 * MILLION,
      sellingGeneralAndAdministrative: 43 * MILLION,
      researchAndDevelopment: 20 * MILLION,
      totalOperatingExpense: 76 * MILLION,
      operatingIncome: -23 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -23 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -24 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 49 * MILLION,
      costOfRevenue: 12 * MILLION,
      grossProfit: 36 * MILLION,
      sellingGeneralAndAdministrative: 36 * MILLION,
      researchAndDevelopment: 18 * MILLION,
      totalOperatingExpense: 67 * MILLION,
      operatingIncome: -18 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -16 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -16 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 41 * MILLION,
      costOfRevenue: 10 * MILLION,
      grossProfit: 31 * MILLION,
      sellingGeneralAndAdministrative: 29 * MILLION,
      researchAndDevelopment: 16 * MILLION,
      totalOperatingExpense: 55 * MILLION,
      operatingIncome: -14 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -14 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -14 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 40 * MILLION,
      costOfRevenue: 10 * MILLION,
      grossProfit: 29 * MILLION,
      sellingGeneralAndAdministrative: 20 * MILLION,
      researchAndDevelopment: 13 * MILLION,
      totalOperatingExpense: 43 * MILLION,
      operatingIncome: -3 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: 0 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 0 * MILLION,
    },
  ],
};