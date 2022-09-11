import { IndustryType } from 'src/app/facts/data/area.enum';
import { rmbToDollar } from 'src/app/shared/currency';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const nio: StockAnalysis = {
  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dEyysKrE1fUvRVtEaFZvJPhvsXli4kawy6Pm_gg-KL5fDqPt3oCs4OepM2OFoD1P1awbxwv2dw4lI_R_KXOwQm2HmJmABVMNm1ymbNwhaOtAdB9OCC7qzhUc2LzaK0iVjwG-HZMKWHSwGluSmB84raUg=w678-h336-no?authuser=3',
  description: [
    {
      content:
        'NIO设计于2014年11月开始， 在中国生产和销售高档电动汽车。 它的 车辆具有车辆连通性，自动驾驶 驾驶和人工智能。 它的首款量产车型ES8是一款7人座电动SUV， 在12月的NIO日活动上首次亮相 自2017年6月起，NIO已开始交付ES8。 2018年交付ES6（5人座电动SUV） 2019年6月。',
    },
  ],
  name: 'NIO Inc,',
  shortName: 'NIO',
  ticker: 'NIO',
  irAddress: 'https://ir.nio.com/financials/quarterly-results',
  industries: [IndustryType.ev],

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 1.536 * BILLION,
      grossProfit: 200.101 * MILLION,
      operatingIncome: -624.933 * MILLION,
      netIncome: -411.689 * MILLION,
      forecastRevenueTop: 2030 * MILLION,
      forecastRevenueBottom: 1918 * MILLION,
      date: convertDateToUTC(new Date('2022-09-07')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://ir.nio.com/static-files/dde74435-b5a6-4eea-a8b3-13c03a48adae',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 9910 * MILLION * rmbToDollar,
      costOfRevenue: 8463 * MILLION * rmbToDollar,
      grossProfit: 1446 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 2014 * MILLION * rmbToDollar,
      researchAndDevelopment: 1761 * MILLION * rmbToDollar,
      totalOperatingExpense: 12099 * MILLION * rmbToDollar,
      operatingIncome: -2188 * MILLION * rmbToDollar,
      interestIncomeNet: 349 * MILLION * rmbToDollar,
      otherIncomeNet: 86 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -1752 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 30 * MILLION * rmbToDollar,
      netIncome: -1825 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 9900 * MILLION * rmbToDollar,
      costOfRevenue: 8201 * MILLION * rmbToDollar,
      grossProfit: 1699 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 2358 * MILLION * rmbToDollar,
      researchAndDevelopment: 1828 * MILLION * rmbToDollar,
      totalOperatingExpense: 12345 * MILLION * rmbToDollar,
      operatingIncome: -2445 * MILLION * rmbToDollar,
      interestIncomeNet: 281 * MILLION * rmbToDollar,
      otherIncomeNet: 53 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -2110 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 33 * MILLION * rmbToDollar,
      netIncome: -2179 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 9805 * MILLION * rmbToDollar,
      costOfRevenue: 7812 * MILLION * rmbToDollar,
      grossProfit: 1993 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 1824 * MILLION * rmbToDollar,
      researchAndDevelopment: 1193 * MILLION * rmbToDollar,
      totalOperatingExpense: 10797 * MILLION * rmbToDollar,
      operatingIncome: -991 * MILLION * rmbToDollar,
      interestIncomeNet: 127 * MILLION * rmbToDollar,
      otherIncomeNet: 32 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -832 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 3 * MILLION * rmbToDollar,
      netIncome: -2858 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 8448 * MILLION * rmbToDollar,
      costOfRevenue: 6874 * MILLION * rmbToDollar,
      grossProfit: 1573 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 1497 * MILLION * rmbToDollar,
      researchAndDevelopment: 883 * MILLION * rmbToDollar,
      totalOperatingExpense: 9211 * MILLION * rmbToDollar,
      operatingIncome: -763 * MILLION * rmbToDollar,
      interestIncomeNet: 129 * MILLION * rmbToDollar,
      otherIncomeNet: 48 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -585 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 1 * MILLION * rmbToDollar,
      netIncome: -659 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 7982 * MILLION * rmbToDollar,
      costOfRevenue: 6427 * MILLION * rmbToDollar,
      grossProfit: 1554 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 1197 * MILLION * rmbToDollar,
      researchAndDevelopment: 686 * MILLION * rmbToDollar,
      totalOperatingExpense: 8278 * MILLION * rmbToDollar,
      operatingIncome: -295 * MILLION * rmbToDollar,
      interestIncomeNet: -200 * MILLION * rmbToDollar,
      otherIncomeNet: 49 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -447 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 3 * MILLION * rmbToDollar,
      netIncome: -4874 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 6641 * MILLION * rmbToDollar,
      costOfRevenue: 5499 * MILLION * rmbToDollar,
      grossProfit: 1141 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 1206 * MILLION * rmbToDollar,
      researchAndDevelopment: 829 * MILLION * rmbToDollar,
      totalOperatingExpense: 7572 * MILLION * rmbToDollar,
      operatingIncome: -931 * MILLION * rmbToDollar,
      interestIncomeNet: -50 * MILLION * rmbToDollar,
      otherIncomeNet: -404 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -1386 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 1 * MILLION * rmbToDollar,
      netIncome: -1492 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 4525 * MILLION * rmbToDollar,
      costOfRevenue: 3940 * MILLION * rmbToDollar,
      grossProfit: 585 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 940 * MILLION * rmbToDollar,
      researchAndDevelopment: 590 * MILLION * rmbToDollar,
      totalOperatingExpense: 5471 * MILLION * rmbToDollar,
      operatingIncome: -945 * MILLION * rmbToDollar,
      interestIncomeNet: -70 * MILLION * rmbToDollar,
      otherIncomeNet: -29 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -1045 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 1 * MILLION * rmbToDollar,
      netIncome: -1187 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 3718 * MILLION * rmbToDollar,
      costOfRevenue: 3405 * MILLION * rmbToDollar,
      grossProfit: 313 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 936 * MILLION * rmbToDollar,
      researchAndDevelopment: 545 * MILLION * rmbToDollar,
      totalOperatingExpense: 4878 * MILLION * rmbToDollar,
      operatingIncome: -1160 * MILLION * rmbToDollar,
      interestIncomeNet: -96 * MILLION * rmbToDollar,
      otherIncomeNet: 82 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -1174 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 2 * MILLION * rmbToDollar,
      netIncome: -1207 * MILLION * rmbToDollar,
    },
  ],
};
