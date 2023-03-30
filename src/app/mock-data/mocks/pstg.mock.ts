import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const pstg: StockAnalysis = {
  name: 'Pure Storage',
  ticker: 'pstg',
  irAddress: 'https://investor.purestorage.com/investor-home/default.aspx',
  earningsReports: [
    {
      year: 2023,
      quarter: 2,
      totalRevenue: 646.772 * MILLION,
      grossProfit: 443.568 * MILLION,
      operatingIncome: 14.363 * MILLION,
      netIncome: 10.922 * MILLION,
      forecastRevenueBottom: 570 * MILLION,
      forecastRevenueTop: 570 * MILLION,
      date: convertDateToUTC(new Date('2022-08-31')),
      links: [
        {
          name: 'Press Relese',
          value:
            'https://investor.purestorage.com/news-and-events/press-releases/press-release-details/2022/Pure-Storage-Announces-Second-Quarter-Fiscal-2023-Financial-Results/default.aspx',
        },
      ],
    },
    {
      year: 2023,
      quarter: 1,
      totalRevenue: 620 * MILLION,
      costOfRevenue: 193 * MILLION,
      grossProfit: 426 * MILLION,
      sellingGeneralAndAdministrative: 269 * MILLION,
      researchAndDevelopment: 161 * MILLION,
      totalOperatingExpense: 624 * MILLION,
      operatingIncome: -4 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -10 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -11 * MILLION,
    },
    {
      year: 2022,
      quarter: 4,
      totalRevenue: 708 * MILLION,
      costOfRevenue: 232 * MILLION,
      grossProfit: 475 * MILLION,
      sellingGeneralAndAdministrative: 283 * MILLION,
      researchAndDevelopment: 162 * MILLION,
      totalOperatingExpense: 678 * MILLION,
      operatingIncome: 29 * MILLION,
      interestIncomeNet: -10 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 19 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: 14 * MILLION,
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 562 * MILLION,
      costOfRevenue: 187 * MILLION,
      grossProfit: 374 * MILLION,
      sellingGeneralAndAdministrative: 245 * MILLION,
      researchAndDevelopment: 147 * MILLION,
      totalOperatingExpense: 580 * MILLION,
      operatingIncome: -18 * MILLION,
      interestIncomeNet: -8 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -26 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -28 * MILLION,
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 496 * MILLION,
      costOfRevenue: 156 * MILLION,
      grossProfit: 340 * MILLION,
      sellingGeneralAndAdministrative: 233 * MILLION,
      researchAndDevelopment: 140 * MILLION,
      totalOperatingExpense: 530 * MILLION,
      operatingIncome: -33 * MILLION,
      interestIncomeNet: -7 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -41 * MILLION,
      provisionForIncomeTaxes: 3 * MILLION,
      netIncome: -45 * MILLION,
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 412 * MILLION,
      costOfRevenue: 130 * MILLION,
      grossProfit: 281 * MILLION,
      sellingGeneralAndAdministrative: 226 * MILLION,
      researchAndDevelopment: 131 * MILLION,
      totalOperatingExpense: 488 * MILLION,
      operatingIncome: -76 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -80 * MILLION,
      provisionForIncomeTaxes: 3 * MILLION,
      netIncome: -84 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 502 * MILLION,
      costOfRevenue: 161 * MILLION,
      grossProfit: 340 * MILLION,
      sellingGeneralAndAdministrative: 249 * MILLION,
      researchAndDevelopment: 130 * MILLION,
      totalOperatingExpense: 549 * MILLION,
      operatingIncome: -46 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -49 * MILLION,
      provisionForIncomeTaxes: 3 * MILLION,
      netIncome: -52 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 410 * MILLION,
      costOfRevenue: 134 * MILLION,
      grossProfit: 276 * MILLION,
      sellingGeneralAndAdministrative: 218 * MILLION,
      researchAndDevelopment: 122 * MILLION,
      totalOperatingExpense: 475 * MILLION,
      operatingIncome: -65 * MILLION,
      interestIncomeNet: -4 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -70 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: -74 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 403 * MILLION,
      costOfRevenue: 129 * MILLION,
      grossProfit: 274 * MILLION,
      sellingGeneralAndAdministrative: 215 * MILLION,
      researchAndDevelopment: 114 * MILLION,
      totalOperatingExpense: 467 * MILLION,
      operatingIncome: -64 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -62 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -64 * MILLION,
    },
  ],
};