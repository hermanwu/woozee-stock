import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const mrvl: StockAnalysis = {
  logo: '',
  name: 'Marvell Technology, Inc.',
  shortName: 'Marvell Technology',
  irAddress: 'https://investor.marvell.com/',
  marketCap: 48 * BILLION,

  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      date: new Date('2022-8-25'),
      totalRevenue: 1516.9 * MILLION,
      grossProfit: 786.0 * MILLION,
      operatingIncome: 39.1 * MILLION,
      netIncome: 4.3 * MILLION,

      forecastRevenueTop: 1.56 * BILLION * 1.03,
      forecastRevenueBottom: 1.56 * BILLION * 0.97,

      links: [
        {
          name: 'Financial Results',
          value:
            'https://investor.marvell.com/2022-08-25-Marvell-Technology,-Inc-Reports-Second-Quarter-of-Fiscal-Year-2023-Financial-Results',
        },
        {
          name: 'Additional Earnings Information',
          value:
            "https://investor.marvell.com/download/MRVL+Q2'23+Additional+Information_FINAL.pdf",
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 1446 * MILLION,
      costOfRevenue: 696 * MILLION,
      grossProfit: 750 * MILLION,
      sellingGeneralAndAdministrative: 223 * MILLION,
      researchAndDevelopment: 444 * MILLION,
      unusualExpenseIncome: 13 * MILLION,
      totalOperatingExpense: 1377 * MILLION,
      operatingIncome: 69 * MILLION,
      interestIncomeNet: -35 * MILLION,
      otherIncomeNet: 5 * MILLION,
      netIncomeBeforeTaxes: 39 * MILLION,
      provisionForIncomeTaxes: 204 * MILLION,
      netIncome: -165 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1342 * MILLION,
      costOfRevenue: 656 * MILLION,
      grossProfit: 686 * MILLION,
      sellingGeneralAndAdministrative: 251 * MILLION,
      researchAndDevelopment: 399 * MILLION,
      unusualExpenseIncome: 1 * MILLION,
      totalOperatingExpense: 1308 * MILLION,
      operatingIncome: 34 * MILLION,
      interestIncomeNet: -34 * MILLION,
      otherIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: 2 * MILLION,
      provisionForIncomeTaxes: -4 * MILLION,
      netIncome: 6 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1211 * MILLION,
      costOfRevenue: 623 * MILLION,
      grossProfit: 587 * MILLION,
      sellingGeneralAndAdministrative: 243 * MILLION,
      researchAndDevelopment: 371 * MILLION,
      unusualExpenseIncome: 5 * MILLION,
      totalOperatingExpense: 1244 * MILLION,
      operatingIncome: -33 * MILLION,
      interestIncomeNet: -35 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -67 * MILLION,
      provisionForIncomeTaxes: -5 * MILLION,
      netIncome: -62 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1075 * MILLION,
      costOfRevenue: 704 * MILLION,
      grossProfit: 371 * MILLION,
      sellingGeneralAndAdministrative: 254 * MILLION,
      researchAndDevelopment: 367 * MILLION,
      unusualExpenseIncome: 17 * MILLION,
      totalOperatingExpense: 1342 * MILLION,
      operatingIncome: -266 * MILLION,
      interestIncomeNet: -33 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -301 * MILLION,
      provisionForIncomeTaxes: -25 * MILLION,
      netIncome: -276 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 832 * MILLION,
      costOfRevenue: 414 * MILLION,
      grossProfit: 418 * MILLION,
      sellingGeneralAndAdministrative: 155 * MILLION,
      researchAndDevelopment: 286 * MILLION,
      unusualExpenseIncome: 58 * MILLION,
      totalOperatingExpense: 914 * MILLION,
      operatingIncome: -82 * MILLION,
      interestIncomeNet: -34 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -116 * MILLION,
      provisionForIncomeTaxes: -27 * MILLION,
      netIncome: -88 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 797 * MILLION,
      costOfRevenue: 376 * MILLION,
      grossProfit: 421 * MILLION,
      sellingGeneralAndAdministrative: 112 * MILLION,
      researchAndDevelopment: 271 * MILLION,
      unusualExpenseIncome: 52 * MILLION,
      totalOperatingExpense: 799 * MILLION,
      operatingIncome: -1 * MILLION,
      interestIncomeNet: -20 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -22 * MILLION,
      provisionForIncomeTaxes: -39 * MILLION,
      netIncome: 16 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 750 * MILLION,
      costOfRevenue: 369 * MILLION,
      grossProfit: 381 * MILLION,
      sellingGeneralAndAdministrative: 112 * MILLION,
      researchAndDevelopment: 252 * MILLION,
      unusualExpenseIncome: 16 * MILLION,
      totalOperatingExpense: 759 * MILLION,
      operatingIncome: -9 * MILLION,
      interestIncomeNet: -15 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -24 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: -22 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 727 * MILLION,
      costOfRevenue: 368 * MILLION,
      grossProfit: 359 * MILLION,
      sellingGeneralAndAdministrative: 99 * MILLION,
      researchAndDevelopment: 272 * MILLION,
      unusualExpenseIncome: 127 * MILLION,
      totalOperatingExpense: 878 * MILLION,
      operatingIncome: -151 * MILLION,
      interestIncomeNet: -15 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -166 * MILLION,
      provisionForIncomeTaxes: -8 * MILLION,
      netIncome: -157 * MILLION,
    },
  ],
};
