import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const chwy: StockAnalysis = {
  logo: '',
  name: 'CHEWY, INC.',
  displayName: 'Chewy',
  description: [],
  ticker: 'chwy',
  irAddress: 'https://investor.chewy.com/overview/default.aspx',
  industries: [IndustryType.ecommerce],
  marketCap: 15.73 * BILLION,

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 2.43 * BILLION,
      grossProfit: 2.43 * BILLION * 0.281,
      operatingIncome: 21.655 * MILLION,
      netIncome: 22.3 * MILLION,
      forecastRevenueTop: 2.46 * BILLION,
      forecastRevenueBottom: 2.44 * BILLION,
      date: convertDateToUTC(new Date('2022-08-30')),
      links: [
        {
          name: '2022 Q2 Finanical Results',
          value:
            'https://s23.q4cdn.com/610444331/files/doc_financials/2022/q2/Q2-2022-Chewy-Earnings-Press-Release-FINAL-(2).pdf',
        },
        {
          name: '2022 Q2 Shareholder Letter',
          value:
            'https://s23.q4cdn.com/610444331/files/doc_financials/2022/q2/Q2-2022_ShareholderLetter-FINAL.pdf',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 2428 * MILLION,
      costOfRevenue: 1760 * MILLION,
      grossProfit: 667 * MILLION,
      sellingGeneralAndAdministrative: 636 * MILLION,
      totalOperatingExpense: 2409 * MILLION,
      operatingIncome: 18 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 18 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 18 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 2388 * MILLION,
      costOfRevenue: 1782 * MILLION,
      grossProfit: 605 * MILLION,
      sellingGeneralAndAdministrative: 652 * MILLION,
      totalOperatingExpense: 2451 * MILLION,
      operatingIncome: -63 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -63 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -63 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 2212 * MILLION,
      costOfRevenue: 1627 * MILLION,
      grossProfit: 584 * MILLION,
      sellingGeneralAndAdministrative: 602 * MILLION,
      totalOperatingExpense: 2244 * MILLION,
      operatingIncome: -31 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -32 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -32 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 2155 * MILLION,
      costOfRevenue: 1561 * MILLION,
      grossProfit: 593 * MILLION,
      sellingGeneralAndAdministrative: 596 * MILLION,
      totalOperatingExpense: 2171 * MILLION,
      operatingIncome: -16 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -16 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -16 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 2135 * MILLION,
      costOfRevenue: 1545 * MILLION,
      grossProfit: 589 * MILLION,
      sellingGeneralAndAdministrative: 539 * MILLION,
      totalOperatingExpense: 2096 * MILLION,
      operatingIncome: 39 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 38 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 38 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 2043 * MILLION,
      costOfRevenue: 1488 * MILLION,
      grossProfit: 554 * MILLION,
      sellingGeneralAndAdministrative: 521 * MILLION,
      totalOperatingExpense: 2021 * MILLION,
      operatingIncome: 21 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 21 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 21 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 1782 * MILLION,
      costOfRevenue: 1327 * MILLION,
      grossProfit: 454 * MILLION,
      sellingGeneralAndAdministrative: 477 * MILLION,
      totalOperatingExpense: 1814 * MILLION,
      operatingIncome: -32 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -32 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -32 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 1699 * MILLION,
      costOfRevenue: 1266 * MILLION,
      grossProfit: 433 * MILLION,
      sellingGeneralAndAdministrative: 457 * MILLION,
      totalOperatingExpense: 1732 * MILLION,
      operatingIncome: -32 * MILLION,
      interestIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -32 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -32 * MILLION,
    },
  ],
};
