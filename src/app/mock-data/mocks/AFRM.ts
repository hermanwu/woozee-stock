import { Term } from 'src/app/risks/models/risk-level.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StrategyType } from 'src/app/stock/components/facts/data/stratgies.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const afrmRisks: Risk[] = [
  {
    uuid: 'afrm-r-3',
    name: 'Operating expenses (581M) is way larger than total revenue (354M).',
    level: Term.long,
  },

  {
    uuid: 'afrm-r-2',
    name: 'Consumer spending and delinquency rate could be negatively affected by high inflation.',
  },
  {
    uuid: 'afrm-r-1',
    name: 'Raising interest environment could discourage user from using Affirm.',
  },
  {
    uuid: 'afrm-r-3',
    name: 'Fintech product is hard to build a moat with many competitions in general.',
  },
];

export const afrmCatalysts: Catalyst[] = [
  {
    uuid: 'afrm-c-2',
    name: '81% of transactions were from repeat users',
    level: Term.long,
  },
  {
    uuid: 'afrm-c-1',
    name: 'Revenue increases 54% Q/Q while operating expenses only increased 32%',
  },

  {
    uuid: 'afrm-c-2',
    name: 'Directly integrated with half of top 10 largest retailers in the US. Addresses more than 60% of US ecommerce.',
  },
  {
    uuid: 'afrm-c-3',
    name: 'Active merchants increased 1698% percent (from 12K to 207K)',
  },
  {
    uuid: 'afrm-c-3',
    name: 'Active consumers increased 137% percent (from 5.4M to 12.7M)',
  },
];

export const afrm: StockAnalysis = {
  marketCap: 5.56 * BILLION,

  riskUuids: afrmRisks.map((r) => r.uuid),
  catalystUuids: afrmCatalysts.map((i) => i.uuid),

  logo: '',
  name: 'Affirm',
  description: [
    {
      content: 'Mission: Build honest financial products that improve lives.',
    },
    {
      content:
        'We believe that by using modern technology, strong engineering talent, and a mission-driven approach, we can reinvent payments and commerce.',
    },
    {
      content:
        'Our solutions, which are built on trust and transparency, are designed to make it easier for consumers to spend responsibly and with confidence, easier for merchants to convert sales and grow, and easier for commerce to thrive',
    },
    {
      content:
        'We believe that technology, underwriting, and risk management are collectively our key competitive advantage',
    },
    {
      content:
        'We believe our proprietary technology platform and data give us a unique advantage in understanding customers and merchants, as well as pricing risk — which we can almost always accomplish within seconds at checkout. Our approach to risk management is core to our business model, and has been proven to lead to low fraud rates, higher approval rates compared to traditional credit underwriting models, and low credit losses. Our models have been built on more than one billion data points, including data from over 30 million loans and over seven years of repayments.',
    },
    {
      content:
        'From merchants, we typically earn a fee when we help them convert a sale and power a payment.',
    },
    {
      content:
        'From consumers, we earn interest income on the simple interest loans that we purchase from our originating bank partners. Interest rates charged to our consumers vary depending on the transaction risk, creditworthiness of the consumer, the repayment term selected by the consumer, the amount of the loan, and the individual arrangement withamerchant. Because consumers are never charged deferred or compounding interest, late fees, or penalties on the loans, we are not incentivized to profit from our consumers’ mistakes or misfortunes.',
    },
  ],
  ticker: 'afrm',
  irAddress: 'https://investors.affirm.com/',
  business: {
    markets: [IndustryType.fintech, IndustryType.loan],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.userData },
    ],
  },
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 354.762 * MILLION,
      costOfRevenue: (46.853 + 66.294 + 15.824) * MILLION,
      totalOperatingExpense: 581.313 * MILLION,
      operatingIncome: -226.551 * MILLION,
      netIncome: -54.671 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 303 * MILLION,
      sellingGeneralAndAdministrative: 421 * MILLION,
      unusualExpenseIncome: 7 * MILLION,
      totalOperatingExpense: 499 * MILLION,
      operatingIncome: -196 * MILLION,
      otherIncomeNet: 36 * MILLION,
      netIncomeBeforeTaxes: -159 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -159 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 238 * MILLION,
      sellingGeneralAndAdministrative: 303 * MILLION,
      unusualExpenseIncome: 20 * MILLION,
      totalOperatingExpense: 404 * MILLION,
      operatingIncome: -166 * MILLION,
      otherIncomeNet: -140 * MILLION,
      netIncomeBeforeTaxes: -306 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -306 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 219 * MILLION,
      sellingGeneralAndAdministrative: 316 * MILLION,
      unusualExpenseIncome: 10 * MILLION,
      totalOperatingExpense: 368 * MILLION,
      operatingIncome: -149 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: -155 * MILLION,
      provisionForIncomeTaxes: -2 * MILLION,
      netIncome: -153 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 230 * MILLION,
      sellingGeneralAndAdministrative: 312 * MILLION,
      unusualExpenseIncome: 57 * MILLION,
      totalOperatingExpense: 383 * MILLION,
      operatingIncome: -169 * MILLION,
      otherIncomeNet: -77 * MILLION,
      netIncomeBeforeTaxes: -247 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -247 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 189 * MILLION,
      sellingGeneralAndAdministrative: 138 * MILLION,
      unusualExpenseIncome: 53 * MILLION,
      totalOperatingExpense: 216 * MILLION,
      operatingIncome: -26 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -26 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -26 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 157 * MILLION,
      sellingGeneralAndAdministrative: 102 * MILLION,
      unusualExpenseIncome: 49 * MILLION,
      totalOperatingExpense: 190 * MILLION,
      operatingIncome: -33 * MILLION,
      otherIncomeNet: 29 * MILLION,
      netIncomeBeforeTaxes: -3 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -3 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 141 * MILLION,
      sellingGeneralAndAdministrative: 83 * MILLION,
      unusualExpenseIncome: 43 * MILLION,
      totalOperatingExpense: 102 * MILLION,
      operatingIncome: 39 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: 34 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 34 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 128 * MILLION,
      sellingGeneralAndAdministrative: 85 * MILLION,
      unusualExpenseIncome: 33 * MILLION,
      totalOperatingExpense: 209 * MILLION,
      operatingIncome: -81 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: -85 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -85 * MILLION,
    },
  ],
};
