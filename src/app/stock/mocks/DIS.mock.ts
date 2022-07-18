import { IndustryType } from 'src/app/facts/data/area.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const disneyCatalysts: Catalyst[] = [
  {
    uuid: 'dis-c-2',
    content:
      'Disney Parks, Experiences and Products revenues grow from 3.2B to 6.7B in the latest quarter benefiting from Post-COVID recovery.',
  },
  {
    uuid: 'dis-c-1',
    content:
      'Disney+ subscribers continue to grow and could exceeds Netflix in future.',
    notes: [
      {
        content: 'Disney+ has 138M subscribers right now.',
      },
      {
        content:
          'Disney plan to have between 230 million and 260 million global subscribers by 2024, which exceeds Netflix current 222M subscriber count.',
      },
    ],
  },
];

export const disneyRisks: Risk[] = [
  {
    uuid: 'dis-r-1',
    content: 'COVID impact in Asia, specifically lockdown in China.',
    notes: [
      {
        content: 'Parks have been closed in Shanghai and Hongkong.',
      },
    ],
    level: RiskLevel.longTerm,
  },
  {
    uuid: 'dis-r-2',
    content: 'Higher programming and production cost is across all areas.',
    level: RiskLevel.longTerm,
  },
  {
    uuid: 'dis-r-3',
    level: RiskLevel.shortTerm,
    content: '70+ PE ratio is relatively high',
  },
];

export const dis: StockAnalysis = {
  uuid: 'dis',
  price: 107.33,
  marketCap: 190 * BILLION,
  riskUuids: disneyRisks.map((r) => r.uuid),
  catalystUuids: disneyCatalysts.map((c) => c.uuid),
  name: 'Disney',
  shortName: 'Disney',
  description: [],
  trends: [],
  logo: '',
  ticker: 'dis',
  ceoQuote: [],
  advantage: [],
  business: {
    markets: [IndustryType.streaming, IndustryType.entertainment],
  },
  irAddress: 'https://thewaltdisneycompany.com/investor-relations/',
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      pressReleaseLink:
        'https://thewaltdisneycompany.com/the-walt-disney-company-reports-second-quarter-and-six-months-earnings-for-fiscal-2022/',
      totalRevenue: 19249 * MILLION,
      costOfRevenue: 12594 * MILLION,
      totalOperatingExpense: 17649 * MILLION,
      operatingIncome: 1.62 * BILLION,
      netIncome: 470 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 21819 * MILLION,
      costOfRevenue: 14567 * MILLION,
      grossProfit: 7252 * MILLION,
      sellingGeneralAndAdministrative: 3787 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 19627 * MILLION,
      operatingIncome: 2192 * MILLION,
      interestIncomeNet: -520 * MILLION,
      otherIncomeNet: 16 * MILLION,
      netIncomeBeforeTaxes: 1688 * MILLION,
      provisionForIncomeTaxes: 488 * MILLION,
      netIncome: 1104 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 18534 * MILLION,
      costOfRevenue: 12341 * MILLION,
      grossProfit: 6193 * MILLION,
      sellingGeneralAndAdministrative: 4319 * MILLION,
      unusualExpenseIncome: 92 * MILLION,
      totalOperatingExpense: 17927 * MILLION,
      operatingIncome: 607 * MILLION,
      interestIncomeNet: -317 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: 290 * MILLION,
      provisionForIncomeTaxes: 34 * MILLION,
      netIncome: 159 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 17022 * MILLION,
      costOfRevenue: 11233 * MILLION,
      grossProfit: 5789 * MILLION,
      sellingGeneralAndAdministrative: 3168 * MILLION,
      unusualExpenseIncome: -91 * MILLION,
      totalOperatingExpense: 15576 * MILLION,
      operatingIncome: 1446 * MILLION,
      interestIncomeNet: -419 * MILLION,
      otherIncomeNet: -32 * MILLION,
      netIncomeBeforeTaxes: 995 * MILLION,
      provisionForIncomeTaxes: -133 * MILLION,
      netIncome: 918 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 15613 * MILLION,
      costOfRevenue: 9782 * MILLION,
      grossProfit: 5831 * MILLION,
      sellingGeneralAndAdministrative: 3113 * MILLION,
      unusualExpenseIncome: 414 * MILLION,
      totalOperatingExpense: 14581 * MILLION,
      operatingIncome: 1032 * MILLION,
      interestIncomeNet: 234 * MILLION,
      otherIncomeNet: -36 * MILLION,
      netIncomeBeforeTaxes: 1230 * MILLION,
      provisionForIncomeTaxes: 108 * MILLION,
      netIncome: 901 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 16249 * MILLION,
      costOfRevenue: 11775 * MILLION,
      grossProfit: 4474 * MILLION,
      sellingGeneralAndAdministrative: 2917 * MILLION,
      unusualExpenseIncome: 113 * MILLION,
      totalOperatingExpense: 16103 * MILLION,
      operatingIncome: 146 * MILLION,
      interestIncomeNet: -67 * MILLION,
      otherIncomeNet: -33 * MILLION,
      netIncomeBeforeTaxes: 46 * MILLION,
      provisionForIncomeTaxes: 16 * MILLION,
      netIncome: 17 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 14707 * MILLION,
      costOfRevenue: 11013 * MILLION,
      grossProfit: 3694 * MILLION,
      sellingGeneralAndAdministrative: 2812 * MILLION,
      unusualExpenseIncome: 393 * MILLION,
      totalOperatingExpense: 15553 * MILLION,
      operatingIncome: -846 * MILLION,
      interestIncomeNet: 274 * MILLION,
      otherIncomeNet: -8 * MILLION,
      netIncomeBeforeTaxes: -580 * MILLION,
      provisionForIncomeTaxes: 49 * MILLION,
      netIncome: -710 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 11779 * MILLION,
      costOfRevenue: 7896 * MILLION,
      grossProfit: 3883 * MILLION,
      sellingGeneralAndAdministrative: 2455 * MILLION,
      unusualExpenseIncome: 5047 * MILLION,
      totalOperatingExpense: 16775 * MILLION,
      operatingIncome: -4996 * MILLION,
      interestIncomeNet: 153 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: -4840 * MILLION,
      provisionForIncomeTaxes: -331 * MILLION,
      netIncome: -4721 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 18025 * MILLION,
      costOfRevenue: 11937 * MILLION,
      grossProfit: 6088 * MILLION,
      sellingGeneralAndAdministrative: 3393 * MILLION,
      unusualExpenseIncome: 145 * MILLION,
      totalOperatingExpense: 16809 * MILLION,
      operatingIncome: 1216 * MILLION,
      interestIncomeNet: -167 * MILLION,
      otherIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: 1051 * MILLION,
      provisionForIncomeTaxes: 523 * MILLION,
      netIncome: 460 * MILLION,
    },
  ],
};
