import { MarketType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const uberRisks: Risk[] = [
  {
    uuid: 'risk-uber-1',
    content: 'Delivery gross booking only increase 12% Y/Y',
  },
];

export const uber: StockAnalysis = {
  marketCap: 59.38 * BILLION,
  logo: '',
  name: 'Uber',
  description: [],
  ticker: 'uber',
  shortName: 'Uber',
  irAddress: 'https://investor.uber.com/home/default.aspx',

  business: {
    markets: [MarketType.foodDelivery, MarketType.shared_economy],
  },

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 6854 * MILLION,
      costOfRevenue: 4026 * MILLION,
      totalOperatingExpense: 7336 * MILLION,
      operatingIncome: -482 * MILLION,
      netIncome: -5918 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 5778 * MILLION,
      costOfRevenue: 3651 * MILLION,
      grossProfit: 2127 * MILLION,
      sellingGeneralAndAdministrative: 1873 * MILLION,
      researchAndDevelopment: 558 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 6328 * MILLION,
      operatingIncome: -550 * MILLION,
      interestIncomeNet: 1461 * MILLION,
      otherIncomeNet: -120 * MILLION,
      netIncomeBeforeTaxes: 791 * MILLION,
      provisionForIncomeTaxes: -97 * MILLION,
      netIncome: 892 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 4845 * MILLION,
      costOfRevenue: 2913 * MILLION,
      grossProfit: 1932 * MILLION,
      sellingGeneralAndAdministrative: 1793 * MILLION,
      researchAndDevelopment: 493 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 5417 * MILLION,
      operatingIncome: -572 * MILLION,
      interestIncomeNet: -2157 * MILLION,
      otherIncomeNet: 202 * MILLION,
      netIncomeBeforeTaxes: -2527 * MILLION,
      provisionForIncomeTaxes: -101 * MILLION,
      netIncome: -2424 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 3929 * MILLION,
      costOfRevenue: 2531 * MILLION,
      grossProfit: 1398 * MILLION,
      sellingGeneralAndAdministrative: 1872 * MILLION,
      researchAndDevelopment: 488 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 5117 * MILLION,
      operatingIncome: -1188 * MILLION,
      interestIncomeNet: 1810 * MILLION,
      otherIncomeNet: 18 * MILLION,
      netIncomeBeforeTaxes: 640 * MILLION,
      provisionForIncomeTaxes: -479 * MILLION,
      netIncome: 1144 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 2903 * MILLION,
      costOfRevenue: 2133 * MILLION,
      grossProfit: 770 * MILLION,
      sellingGeneralAndAdministrative: 1567 * MILLION,
      researchAndDevelopment: 515 * MILLION,
      unusualExpenseIncome: -1684 * MILLION,
      totalOperatingExpense: 2743 * MILLION,
      operatingIncome: 160 * MILLION,
      interestIncomeNet: -72 * MILLION,
      otherIncomeNet: -17 * MILLION,
      netIncomeBeforeTaxes: 71 * MILLION,
      provisionForIncomeTaxes: 185 * MILLION,
      netIncome: -108 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3165 * MILLION,
      costOfRevenue: 1820 * MILLION,
      grossProfit: 1345 * MILLION,
      sellingGeneralAndAdministrative: 1572 * MILLION,
      researchAndDevelopment: 484 * MILLION,
      unusualExpenseIncome: -91 * MILLION,
      totalOperatingExpense: 3965 * MILLION,
      operatingIncome: -800 * MILLION,
      interestIncomeNet: -140 * MILLION,
      otherIncomeNet: 8 * MILLION,
      netIncomeBeforeTaxes: -932 * MILLION,
      provisionForIncomeTaxes: 23 * MILLION,
      netIncome: -967 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 2813 * MILLION,
      costOfRevenue: 1663 * MILLION,
      grossProfit: 1150 * MILLION,
      sellingGeneralAndAdministrative: 1635 * MILLION,
      researchAndDevelopment: 493 * MILLION,
      unusualExpenseIncome: -160 * MILLION,
      totalOperatingExpense: 3769 * MILLION,
      operatingIncome: -956 * MILLION,
      interestIncomeNet: -159 * MILLION,
      otherIncomeNet: 38 * MILLION,
      netIncomeBeforeTaxes: -1077 * MILLION,
      provisionForIncomeTaxes: 23 * MILLION,
      netIncome: -1089 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 1913 * MILLION,
      costOfRevenue: 1506 * MILLION,
      grossProfit: 407 * MILLION,
      sellingGeneralAndAdministrative: 1301 * MILLION,
      researchAndDevelopment: 584 * MILLION,
      unusualExpenseIncome: 14 * MILLION,
      totalOperatingExpense: 3534 * MILLION,
      operatingIncome: -1621 * MILLION,
      interestIncomeNet: -135 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: -1761 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: -1775 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 3248 * MILLION,
      costOfRevenue: 1994 * MILLION,
      grossProfit: 1254 * MILLION,
      sellingGeneralAndAdministrative: 1551 * MILLION,
      researchAndDevelopment: 645 * MILLION,
      unusualExpenseIncome: 1902 * MILLION,
      totalOperatingExpense: 6220 * MILLION,
      operatingIncome: -2972 * MILLION,
      interestIncomeNet: -222 * MILLION,
      otherIncomeNet: 18 * MILLION,
      netIncomeBeforeTaxes: -3176 * MILLION,
      provisionForIncomeTaxes: -242 * MILLION,
      netIncome: -2936 * MILLION,
    },
  ],
};
