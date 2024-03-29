import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const mu: StockAnalysis = {
  marketCap: 57.63 * BILLION,
  logoLink: 'https://i.imgur.com/lrJpoxN.png',
  largeLogoLink: 'https://i.imgur.com/6hcUA6y.png',
  name: 'Micron Technology Inc.',
  description: [],
  ticker: 'mu',
  displayName: 'Micron',
  business: {
    markets: [IndustryType.semi, IndustryType.hardware],
    products: [
      'Crucial Solid State Drive',
      'DDR4 Memory Card',
      'Graphic memory solution in NVIDIA ',
    ],
    revenues: [
      {
        name: 'DRAM Memory',
        size: 6.271 * BILLION,
      },
      {
        name: 'NAND Storage',
        size: 2.228 * BILLION,
      },
      {
        name: 'Other',
        size: 83 * MILLION,
      },
    ],
  },
  irAddress: 'https://investors.micron.com/',

  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 7.2 * BILLION,
      isForecast: true,
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 8.642 * BILLION,
      costOfRevenue: 4.607 * BILLION,
      grossProfit: 4.035 * BILLION,
      operatingIncome: 3.004 * BILLION,
      netIncome: 2.626 * BILLION,
      pressReleaseLink:
        'https://investors.micron.com/news-releases/news-release-details/micron-technology-inc-reports-results-third-quarter-fiscal-2022',
      slidesLink:
        'https://investors.micron.com/static-files/a56cc9d6-1f78-4fe4-960f-afa00e70613a',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 7786 * MILLION,
      costOfRevenue: 4110 * MILLION,
      grossProfit: 3676 * MILLION,
      sellingGeneralAndAdministrative: 263 * MILLION,
      researchAndDevelopment: 792 * MILLION,
      unusualExpenseIncome: 5 * MILLION,
      totalOperatingExpense: 5240 * MILLION,
      operatingIncome: 2546 * MILLION,
      interestIncomeNet: -43 * MILLION,
      otherIncomeNet: 6 * MILLION,
      netIncomeBeforeTaxes: 2509 * MILLION,
      provisionForIncomeTaxes: 255 * MILLION,
      netIncome: 2263 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 7687 * MILLION,
      costOfRevenue: 4122 * MILLION,
      grossProfit: 3565 * MILLION,
      sellingGeneralAndAdministrative: 259 * MILLION,
      researchAndDevelopment: 712 * MILLION,
      unusualExpenseIncome: 121 * MILLION,
      totalOperatingExpense: 5139 * MILLION,
      operatingIncome: 2548 * MILLION,
      interestIncomeNet: -25 * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: 2521 * MILLION,
      provisionForIncomeTaxes: 219 * MILLION,
      netIncome: 2306 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 8274 * MILLION,
      costOfRevenue: 4362 * MILLION,
      grossProfit: 3912 * MILLION,
      sellingGeneralAndAdministrative: 236 * MILLION,
      researchAndDevelopment: 705 * MILLION,
      unusualExpenseIncome: 23 * MILLION,
      totalOperatingExpense: 5320 * MILLION,
      operatingIncome: 2954 * MILLION,
      interestIncomeNet: -17 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 2936 * MILLION,
      provisionForIncomeTaxes: 230 * MILLION,
      netIncome: 2720 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 7422 * MILLION,
      costOfRevenue: 4296 * MILLION,
      grossProfit: 3126 * MILLION,
      sellingGeneralAndAdministrative: 230 * MILLION,
      researchAndDevelopment: 670 * MILLION,
      unusualExpenseIncome: 453 * MILLION,
      totalOperatingExpense: 5623 * MILLION,
      operatingIncome: 1799 * MILLION,
      interestIncomeNet: 7 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: 1806 * MILLION,
      provisionForIncomeTaxes: 65 * MILLION,
      netIncome: 1735 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 6236 * MILLION,
      costOfRevenue: 4538 * MILLION,
      grossProfit: 1698 * MILLION,
      sellingGeneralAndAdministrative: 214 * MILLION,
      researchAndDevelopment: 641 * MILLION,
      unusualExpenseIncome: 49 * MILLION,
      totalOperatingExpense: 5573 * MILLION,
      operatingIncome: 663 * MILLION,
      interestIncomeNet: -32 * MILLION,
      otherIncomeNet: 4 * MILLION,
      netIncomeBeforeTaxes: 635 * MILLION,
      provisionForIncomeTaxes: 48 * MILLION,
      netIncome: 603 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 5773 * MILLION,
      costOfRevenue: 4037 * MILLION,
      grossProfit: 1736 * MILLION,
      sellingGeneralAndAdministrative: 214 * MILLION,
      researchAndDevelopment: 647 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 4907 * MILLION,
      operatingIncome: 866 * MILLION,
      interestIncomeNet: -38 * MILLION,
      otherIncomeNet: 13 * MILLION,
      netIncomeBeforeTaxes: 841 * MILLION,
      provisionForIncomeTaxes: 51 * MILLION,
      netIncome: 803 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 6056 * MILLION,
      costOfRevenue: 3988 * MILLION,
      grossProfit: 2068 * MILLION,
      sellingGeneralAndAdministrative: 231 * MILLION,
      researchAndDevelopment: 630 * MILLION,
      unusualExpenseIncome: 47 * MILLION,
      totalOperatingExpense: 4899 * MILLION,
      operatingIncome: 1157 * MILLION,
      interestIncomeNet: -38 * MILLION,
      otherIncomeNet: 6 * MILLION,
      netIncomeBeforeTaxes: 1125 * MILLION,
      provisionForIncomeTaxes: 136 * MILLION,
      netIncome: 988 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 5438 * MILLION,
      costOfRevenue: 3675 * MILLION,
      grossProfit: 1763 * MILLION,
      sellingGeneralAndAdministrative: 216 * MILLION,
      researchAndDevelopment: 649 * MILLION,
      unusualExpenseIncome: 6 * MILLION,
      totalOperatingExpense: 4552 * MILLION,
      operatingIncome: 886 * MILLION,
      interestIncomeNet: -31 * MILLION,
      otherIncomeNet: 15 * MILLION,
      netIncomeBeforeTaxes: 870 * MILLION,
      provisionForIncomeTaxes: 68 * MILLION,
      netIncome: 803 * MILLION,
    },
  ],
};
