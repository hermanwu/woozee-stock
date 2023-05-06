import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const dash: StockAnalysis = {
  uuid: 'doordash',
  marketCap: 40 * BILLION,
  name: 'Doordash',
  description: [],
  ticker: 'dash',
  displayName: 'DoorDash',
  irAddress: 'https://ir.doordash.com/overview/default.aspx',
  logoLink: 'https://i.ibb.co/XVGJwF6/Oav-Did-Hn-400x400.jpg',

  industries: [IndustryType.foodDelivery],

  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 1818 * MILLION,
      costOfRevenue: 1014 * MILLION,
      operatingIncome: -370 * MILLION,
      netIncome: -305 * MILLION,

      date: convertDateToUTC(new Date('2023-02-16')),
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 1701 * MILLION,
      costOfRevenue: 931 * MILLION,
      operatingIncome: -308 * MILLION,
      netIncome: -301 * MILLION,

      date: convertDateToUTC(new Date('2022-11-03')),
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 1608 * MILLION,
      costOfRevenue: 880 * MILLION,
      operatingIncome: -273 * MILLION,
      netIncome: -263 * MILLION,
      forecastRevenueTop: 1.62 * BILLION,
      forecastRevenueBottom: 1.608 * BILLION,
      date: convertDateToUTC(new Date('2022-08-04')),
      pressReleaseLink:
        'https://s22.q4cdn.com/280253921/files/doc_financials/2022/q2/DASH-Q2-2022-Shareholder-Letter_FINAL.pdf',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 1456 * MILLION,
      costOfRevenue: 763 * MILLION,
      grossProfit: 693 * MILLION,
      operatingIncome: -173 * MILLION,
      netIncome: -167 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1300 * MILLION,
      costOfRevenue: 635 * MILLION,
      grossProfit: 665 * MILLION,
      sellingGeneralAndAdministrative: 629 * MILLION,
      researchAndDevelopment: 120 * MILLION,
      totalOperatingExpense: 1454 * MILLION,
      operatingIncome: -154 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -153 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -155 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1275 * MILLION,
      costOfRevenue: 585 * MILLION,
      grossProfit: 690 * MILLION,
      sellingGeneralAndAdministrative: 625 * MILLION,
      researchAndDevelopment: 108 * MILLION,
      totalOperatingExpense: 1375 * MILLION,
      operatingIncome: -100 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -101 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -101 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1236 * MILLION,
      costOfRevenue: 555 * MILLION,
      grossProfit: 681 * MILLION,
      sellingGeneralAndAdministrative: 635 * MILLION,
      researchAndDevelopment: 95 * MILLION,
      totalOperatingExpense: 1335 * MILLION,
      operatingIncome: -99 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -100 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -102 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1077 * MILLION,
      costOfRevenue: 563 * MILLION,
      grossProfit: 514 * MILLION,
      sellingGeneralAndAdministrative: 499 * MILLION,
      researchAndDevelopment: 77 * MILLION,
      totalOperatingExpense: 1176 * MILLION,
      operatingIncome: -99 * MILLION,
      interestIncomeNet: -10 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -109 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -110 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 970 * MILLION,
      costOfRevenue: 469 * MILLION,
      grossProfit: 501 * MILLION,
      sellingGeneralAndAdministrative: 566 * MILLION,
      researchAndDevelopment: 209 * MILLION,
      totalOperatingExpense: 1275 * MILLION,
      operatingIncome: -305 * MILLION,
      interestIncomeNet: -9 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: -311 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -312 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 879 * MILLION,
      costOfRevenue: 382 * MILLION,
      grossProfit: 497 * MILLION,
      sellingGeneralAndAdministrative: 457 * MILLION,
      researchAndDevelopment: 41 * MILLION,
      totalOperatingExpense: 914 * MILLION,
      operatingIncome: -35 * MILLION,
      interestIncomeNet: -8 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -42 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -43 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 675 * MILLION,
      costOfRevenue: 323 * MILLION,
      grossProfit: 352 * MILLION,
      sellingGeneralAndAdministrative: 256 * MILLION,
      researchAndDevelopment: 38 * MILLION,
      totalOperatingExpense: 648 * MILLION,
      operatingIncome: 27 * MILLION,
      interestIncomeNet: -7 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: 23 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 23 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 362 * MILLION,
      costOfRevenue: 194 * MILLION,
      grossProfit: 168 * MILLION,
      sellingGeneralAndAdministrative: 234 * MILLION,
      researchAndDevelopment: 33 * MILLION,
      totalOperatingExpense: 485 * MILLION,
      operatingIncome: -123 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: -128 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -129 * MILLION,
    },
  ],
};
