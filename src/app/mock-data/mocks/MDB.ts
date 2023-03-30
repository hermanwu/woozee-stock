import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const mdb: StockAnalysis = {
  marketCap: 13.5 * BILLION,
  logo: '',
  name: 'Mongodb Inc',
  description: [],
  ticker: 'mdb',
  displayName: 'MongoDB',
  industries: [IndustryType.saas],
  irAddress: 'https://investors.mongodb.com/corporate-profile/default.aspx',
  secFilings:
    'https://investors.mongodb.com/financial-information/sec-filings/default.aspx',
  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      date: convertDateToUTC(new Date('2022-12-06')),
      totalRevenue: 333.6 * MILLION,
      grossProfit: 239.969 * MILLION,
      operatingIncome: -82.923 * MILLION,
      netIncome: -84.841 * MILLION,
      forecastRevenueTop: 337 * MILLION,
      forecastRevenueBottom: 334 * MILLION,
      links: [
        {
          name: 'Third Quarter Fiscal 2023 Financial Results',
          value:
            'https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-third-quarter-fiscal-2023-financial',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      date: convertDateToUTC(new Date('2022-08-31')),
      totalRevenue: 303.7 * MILLION,
      grossProfit: 215.4 * MILLION,
      operatingIncome: -114.8 * MILLION,
      netIncome: -118.9 * MILLION,
      forecastRevenueTop: 303 * MILLION,
      forecastRevenueBottom: 300 * MILLION,
      links: [
        {
          name: 'Q2 Financial Results',
          value:
            'https://investors.mongodb.com/news-and-events/news-releases/news-details/2022/MongoDB-Inc.-Announces-Second-Quarter-Fiscal-2023-Financial-Results/default.aspx',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 285 * MILLION,
      costOfRevenue: 78 * MILLION,
      grossProfit: 207 * MILLION,
      sellingGeneralAndAdministrative: 186 * MILLION,
      researchAndDevelopment: 96 * MILLION,
      totalOperatingExpense: 361 * MILLION,
      operatingIncome: -75 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -76 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -77 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 266 * MILLION,
      costOfRevenue: 75 * MILLION,
      grossProfit: 190 * MILLION,
      sellingGeneralAndAdministrative: 179 * MILLION,
      researchAndDevelopment: 89 * MILLION,
      totalOperatingExpense: 345 * MILLION,
      operatingIncome: -78 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: -82 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -84 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 226 * MILLION,
      costOfRevenue: 68 * MILLION,
      grossProfit: 158 * MILLION,
      sellingGeneralAndAdministrative: 152 * MILLION,
      researchAndDevelopment: 82 * MILLION,
      totalOperatingExpense: 303 * MILLION,
      operatingIncome: -76 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -79 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -81 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 198 * MILLION,
      costOfRevenue: 60 * MILLION,
      grossProfit: 138 * MILLION,
      sellingGeneralAndAdministrative: 138 * MILLION,
      researchAndDevelopment: 72 * MILLION,
      totalOperatingExpense: 271 * MILLION,
      operatingIncome: -72 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -75 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -77 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 181 * MILLION,
      costOfRevenue: 54 * MILLION,
      grossProfit: 127 * MILLION,
      sellingGeneralAndAdministrative: 123 * MILLION,
      researchAndDevelopment: 64 * MILLION,
      totalOperatingExpense: 243 * MILLION,
      operatingIncome: -61 * MILLION,
      interestIncomeNet: -3 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -65 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: -63 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 171 * MILLION,
      costOfRevenue: 50 * MILLION,
      grossProfit: 120 * MILLION,
      sellingGeneralAndAdministrative: 123 * MILLION,
      researchAndDevelopment: 55 * MILLION,
      totalOperatingExpense: 230 * MILLION,
      operatingIncome: -59 * MILLION,
      interestIncomeNet: -14 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -73 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -75 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 150 * MILLION,
      costOfRevenue: 46 * MILLION,
      grossProfit: 104 * MILLION,
      sellingGeneralAndAdministrative: 108 * MILLION,
      researchAndDevelopment: 54 * MILLION,
      totalOperatingExpense: 208 * MILLION,
      operatingIncome: -58 * MILLION,
      interestIncomeNet: -13 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -71 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -72 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 138 * MILLION,
      costOfRevenue: 42 * MILLION,
      grossProfit: 95 * MILLION,
      sellingGeneralAndAdministrative: 96 * MILLION,
      researchAndDevelopment: 49 * MILLION,
      totalOperatingExpense: 188 * MILLION,
      operatingIncome: -49 * MILLION,
      interestIncomeNet: -12 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -63 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -64 * MILLION,
    },
  ],
};