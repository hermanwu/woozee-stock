import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const msftRisks = [
  {
    name: 'Cloud services decelerate',
  },
];

export const msft: StockAnalysis = {
  uuid: 'msft',
  marketCap: capMock.msft,
  logo: '',
  name: 'MICROSOFT CORPORATION',
  description: [],

  ticker: 'msft',
  irAddress: 'https://www.microsoft.com/en-us/investor',
  displayName: 'Microsoft',
  earningsReports: [
    {
      year: 2023,
      quarter: 1,
      totalRevenue: 50.1 * BILLION,
      grossProfit: 34.67 * BILLION,
      operatingIncome: 21.5 * BILLION,
      netIncome: 17.6 * BILLION,
      date: convertDateToUTC(new Date('2022-10-25')),
      links: [
        {
          name: 'FY23 Q1 Press Release',
          value:
            'https://www.microsoft.com/en-us/Investor/earnings/FY-2023-Q1/press-release-webcast',
        },
      ],
    },
    {
      year: 2022,
      quarter: 4,
      totalRevenue: 51.865 * BILLION,
      costOfRevenue: 16.429 * BILLION,
      operatingIncome: 20.534 * BILLION,
      netIncome: 16.74 * BILLION,
      date: convertDateToUTC(new Date('2022-07-15')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://www.microsoft.com/en-us/investor/earnings/FY-2022-Q4/press-release-webcast',
        },
      ],
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 49.36 * BILLION,
      costOfRevenue: 15.615 * BILLION,
      operatingIncome: 20.314 * BILLION,
      netIncome: 16.728 * BILLION,
      date: convertDateToUTC(new Date('2022-07-15')),
    },
    {
      pressReleaseLink:
        'https://www.microsoft.com/en-us/investor/earnings/fy-2022-q2/press-release-webcast',
      year: 2022,
      quarter: 2,
      totalRevenue: 51728 * MILLION,
      costOfRevenue: 16960 * MILLION,
      grossProfit: 34768 * MILLION,
      sellingGeneralAndAdministrative: 6763 * MILLION,
      researchAndDevelopment: 5758 * MILLION,
      unusualExpenseIncome: 5 * MILLION,
      totalOperatingExpense: 29486 * MILLION,
      operatingIncome: 22242 * MILLION,
      interestIncomeNet: 263 * MILLION,
      otherIncomeNet: 10 * MILLION,
      netIncomeBeforeTaxes: 22515 * MILLION,
      provisionForIncomeTaxes: 3750 * MILLION,
      netIncome: 18765 * MILLION,
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 45317 * MILLION,
      costOfRevenue: 13646 * MILLION,
      grossProfit: 31671 * MILLION,
      sellingGeneralAndAdministrative: 5834 * MILLION,
      researchAndDevelopment: 5599 * MILLION,
      unusualExpenseIncome: 3 * MILLION,
      totalOperatingExpense: 25082 * MILLION,
      operatingIncome: 20235 * MILLION,
      interestIncomeNet: 283 * MILLION,
      otherIncomeNet: 6 * MILLION,
      netIncomeBeforeTaxes: 20524 * MILLION,
      provisionForIncomeTaxes: 19 * MILLION,
      netIncome: 20505 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 46152 * MILLION,
      costOfRevenue: 13991 * MILLION,
      grossProfit: 32161 * MILLION,
      sellingGeneralAndAdministrative: 7379 * MILLION,
      researchAndDevelopment: 5687 * MILLION,
      unusualExpenseIncome: -5 * MILLION,
      totalOperatingExpense: 27052 * MILLION,
      operatingIncome: 19100 * MILLION,
      interestIncomeNet: 283 * MILLION,
      otherIncomeNet: 22 * MILLION,
      netIncomeBeforeTaxes: 19405 * MILLION,
      provisionForIncomeTaxes: 2947 * MILLION,
      netIncome: 16458 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 41706 * MILLION,
      costOfRevenue: 13045 * MILLION,
      grossProfit: 28661 * MILLION,
      sellingGeneralAndAdministrative: 6409 * MILLION,
      researchAndDevelopment: 5204 * MILLION,
      unusualExpenseIncome: 10 * MILLION,
      totalOperatingExpense: 24668 * MILLION,
      operatingIncome: 17038 * MILLION,
      interestIncomeNet: 192 * MILLION,
      otherIncomeNet: 6 * MILLION,
      netIncomeBeforeTaxes: 17236 * MILLION,
      provisionForIncomeTaxes: 1779 * MILLION,
      netIncome: 15457 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 43076 * MILLION,
      costOfRevenue: 14194 * MILLION,
      grossProfit: 28882 * MILLION,
      sellingGeneralAndAdministrative: 6086 * MILLION,
      researchAndDevelopment: 4899 * MILLION,
      unusualExpenseIncome: 2 * MILLION,
      totalOperatingExpense: 25181 * MILLION,
      operatingIncome: 17895 * MILLION,
      interestIncomeNet: 372 * MILLION,
      otherIncomeNet: 70 * MILLION,
      netIncomeBeforeTaxes: 18337 * MILLION,
      provisionForIncomeTaxes: 2874 * MILLION,
      netIncome: 15463 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 37154 * MILLION,
      costOfRevenue: 11002 * MILLION,
      grossProfit: 26152 * MILLION,
      sellingGeneralAndAdministrative: 5350 * MILLION,
      researchAndDevelopment: 4926 * MILLION,
      unusualExpenseIncome: 6 * MILLION,
      totalOperatingExpense: 21284 * MILLION,
      operatingIncome: 15870 * MILLION,
      interestIncomeNet: 254 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 16124 * MILLION,
      provisionForIncomeTaxes: 2231 * MILLION,
      netIncome: 13893 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 38033 * MILLION,
      costOfRevenue: 12339 * MILLION,
      grossProfit: 25694 * MILLION,
      sellingGeneralAndAdministrative: 7073 * MILLION,
      researchAndDevelopment: 5214 * MILLION,
      unusualExpenseIncome: 21 * MILLION,
      totalOperatingExpense: 24647 * MILLION,
      operatingIncome: 13386 * MILLION,
      interestIncomeNet: 36 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 13422 * MILLION,
      provisionForIncomeTaxes: 2220 * MILLION,
      netIncome: 11202 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 35021 * MILLION,
      costOfRevenue: 10975 * MILLION,
      grossProfit: 24046 * MILLION,
      sellingGeneralAndAdministrative: 6184 * MILLION,
      researchAndDevelopment: 4887 * MILLION,
      unusualExpenseIncome: 76 * MILLION,
      totalOperatingExpense: 22122 * MILLION,
      operatingIncome: 12899 * MILLION,
      interestIncomeNet: -104 * MILLION,
      otherIncomeNet: 48 * MILLION,
      netIncomeBeforeTaxes: 12843 * MILLION,
      provisionForIncomeTaxes: 2091 * MILLION,
      netIncome: 10752 * MILLION,
    },
  ],

  business: {
    markets: [IndustryType.cloudService],
  },
};
