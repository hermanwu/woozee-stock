import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const lulu: StockAnalysis = {
  name: 'Lululemon',
  ticker: 'lulu',
  irAddress: 'https://corporate.lululemon.com/investors',
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 1.868328 * BILLION,
      grossProfit: 1.055476 * BILLION,
      operatingIncome: 401.208 * MILLION,
      netIncome: 289.521 * MILLION,
      forecastRevenueTop: 1.805 * BILLION,
      forecastRevenueBottom: 1.78 * BILLION,
      date: convertDateToUTC(new Date('2022-09-01')),
      links: [
        {
          name: 'Earnings Results',
          value:
            'https://corporate.lululemon.com/media/press-releases/2022/09-01-2022-210532821',
        },
        {
          name: 'Infographic',
          value:
            'https://corporate.lululemon.com/~/media/Files/L/Lululemon/investors/results-center/2q22-infographic.pdf',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 1613 * MILLION,
      costOfRevenue: 743 * MILLION,
      grossProfit: 870 * MILLION,
      sellingGeneralAndAdministrative: 607 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1353 * MILLION,
      operatingIncome: 260 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 260 * MILLION,
      provisionForIncomeTaxes: 70 * MILLION,
      netIncome: 190 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 2129 * MILLION,
      costOfRevenue: 892 * MILLION,
      grossProfit: 1236 * MILLION,
      sellingGeneralAndAdministrative: 641 * MILLION,
      unusualExpenseIncome: 1 * MILLION,
      totalOperatingExpense: 1538 * MILLION,
      operatingIncome: 590 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 590 * MILLION,
      provisionForIncomeTaxes: 156 * MILLION,
      netIncome: 434 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1450 * MILLION,
      costOfRevenue: 621 * MILLION,
      grossProfit: 829 * MILLION,
      sellingGeneralAndAdministrative: 545 * MILLION,
      unusualExpenseIncome: 24 * MILLION,
      totalOperatingExpense: 1192 * MILLION,
      operatingIncome: 257 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 257 * MILLION,
      provisionForIncomeTaxes: 70 * MILLION,
      netIncome: 187 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1450 * MILLION,
      costOfRevenue: 607 * MILLION,
      grossProfit: 842 * MILLION,
      sellingGeneralAndAdministrative: 541 * MILLION,
      unusualExpenseIncome: 8 * MILLION,
      totalOperatingExpense: 1159 * MILLION,
      operatingIncome: 291 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 291 * MILLION,
      provisionForIncomeTaxes: 83 * MILLION,
      netIncome: 208 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1226 * MILLION,
      costOfRevenue: 526 * MILLION,
      grossProfit: 700 * MILLION,
      sellingGeneralAndAdministrative: 496 * MILLION,
      unusualExpenseIncome: 7 * MILLION,
      totalOperatingExpense: 1032 * MILLION,
      operatingIncome: 193 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 194 * MILLION,
      provisionForIncomeTaxes: 49 * MILLION,
      netIncome: 144 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 1729 * MILLION,
      costOfRevenue: 716 * MILLION,
      grossProfit: 1012 * MILLION,
      sellingGeneralAndAdministrative: 544 * MILLION,
      unusualExpenseIncome: 7 * MILLION,
      totalOperatingExpense: 1271 * MILLION,
      operatingIncome: 457 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 457 * MILLION,
      provisionForIncomeTaxes: 127 * MILLION,
      netIncome: 329 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 1117 * MILLION,
      costOfRevenue: 490 * MILLION,
      grossProfit: 627 * MILLION,
      sellingGeneralAndAdministrative: 411 * MILLION,
      unusualExpenseIncome: 8 * MILLION,
      totalOperatingExpense: 912 * MILLION,
      operatingIncome: 204 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 204 * MILLION,
      provisionForIncomeTaxes: 60 * MILLION,
      netIncome: 143 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 902 * MILLION,
      costOfRevenue: 413 * MILLION,
      grossProfit: 489 * MILLION,
      sellingGeneralAndAdministrative: 352 * MILLION,
      unusualExpenseIncome: 11 * MILLION,
      totalOperatingExpense: 778 * MILLION,
      operatingIncome: 124 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 124 * MILLION,
      provisionForIncomeTaxes: 37 * MILLION,
      netIncome: 86 * MILLION,
    },
  ],
};
