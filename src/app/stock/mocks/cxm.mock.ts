import { IndustryType } from 'src/app/facts/data/area.enum';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const cxm: StockAnalysis = {
  logo: '',
  name: 'Sprinklr',
  shortName: 'Sprinklr',
  description: [],
  ticker: 'cxm',
  irAddress: 'https://investors.sprinklr.com/',
  business: {
    markets: [IndustryType.cybersecurity],
  },
  marketCap: 3 * BILLION,

  // Earnings Report:
  earningsReports: [
    {
      year: 2023,
      quarter: 2,
      totalRevenue: 150.63 * MILLION,
      grossProfit: 108.471 * MILLION,
      operatingIncome: -21.675 * MILLION,
      netIncome: -23.927 * MILLION,
      forecastRevenueTop: 157 * MILLION,
      forecastRevenueBottom: 155 * MILLION,
      date: convertDateToUTC(new Date('2022-09-08')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://d1io3yog0oux5.cloudfront.net/_bad8739dd2bb1d680452f3f48b41425a/sprinklr/news/2022-09-08_Sprinklr_Announces_Second_Quarter_Fiscal_2023_132.pdf',
        },
      ],
    },
    {
      year: 2023,
      quarter: 1,
      totalRevenue: 144 * MILLION,
      costOfRevenue: 41 * MILLION,
      grossProfit: 103 * MILLION,
      sellingGeneralAndAdministrative: 108 * MILLION,
      researchAndDevelopment: 17 * MILLION,
      unusualExpenseIncome: 12 * MILLION,
      totalOperatingExpense: 168 * MILLION,
      operatingIncome: -23 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -22 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -25 * MILLION,
    },
    {
      year: 2022,
      quarter: 4,
      totalRevenue: 135 * MILLION,
      costOfRevenue: 39 * MILLION,
      grossProfit: 95 * MILLION,
      sellingGeneralAndAdministrative: 101 * MILLION,
      researchAndDevelopment: 15 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 168 * MILLION,
      operatingIncome: -33 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -33 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -34 * MILLION,
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 127 * MILLION,
      costOfRevenue: 38 * MILLION,
      grossProfit: 88 * MILLION,
      sellingGeneralAndAdministrative: 97 * MILLION,
      researchAndDevelopment: 16 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 153 * MILLION,
      operatingIncome: -26 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -27 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -29 * MILLION,
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 118 * MILLION,
      costOfRevenue: 37 * MILLION,
      grossProfit: 81 * MILLION,
      sellingGeneralAndAdministrative: 95 * MILLION,
      researchAndDevelopment: 15 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 148 * MILLION,
      operatingIncome: -29 * MILLION,
      interestIncomeNet: NaN * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -30 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -33 * MILLION,
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 110 * MILLION,
      costOfRevenue: 31 * MILLION,
      grossProfit: 79 * MILLION,
      sellingGeneralAndAdministrative: 76 * MILLION,
      researchAndDevelopment: 13 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 121 * MILLION,
      operatingIncome: -10 * MILLION,
      interestIncomeNet: NaN * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: -12 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -14 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 104 * MILLION,
      costOfRevenue: 33 * MILLION,
      grossProfit: 71 * MILLION,
      sellingGeneralAndAdministrative: 64 * MILLION,
      researchAndDevelopment: 13 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 111 * MILLION,
      operatingIncome: -7 * MILLION,
      interestIncomeNet: NaN * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: -9 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -10 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 96 * MILLION,
      costOfRevenue: 30 * MILLION,
      grossProfit: 66 * MILLION,
      sellingGeneralAndAdministrative: 70 * MILLION,
      researchAndDevelopment: 10 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 111 * MILLION,
      operatingIncome: -15 * MILLION,
      interestIncomeNet: NaN * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: -17 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -18 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 93 * MILLION,
      costOfRevenue: 27 * MILLION,
      grossProfit: 66 * MILLION,
      sellingGeneralAndAdministrative: 53 * MILLION,
      researchAndDevelopment: 8 * MILLION,
      totalOperatingExpense: 88 * MILLION,
      operatingIncome: 4 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 3 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 3 * MILLION,
    },
  ],
};
