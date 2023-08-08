import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StrategyType } from 'src/app/stock/components/facts/data/stratgies.enum';
import { PredicationAction } from '../../stock/models/predication.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const shopRisks = [
  {
    type: FactType.business,
    name: 'datacenter is hosted on Google Cloud',
  },
  {
    type: FactType.business,
    name: "Google has announced changes to the ways that third parties can use web browsers to obtain user information and Apple has implemented similar changes to iOS 14 that will impact how applications and third parties can access user information. These increasingly restrictive practices could affect our merchants ' ability to sell or market their offerings, which could affect the demand for our platform and lead to the loss of current or prospective merchants or other business relationships.",
  },
  {
    type: FactType.business,
    name: 'We currently rely on a single supplier to provide the technology we offer through Shopify Payments.',
  },
];

export const shop: StockAnalysis = {
  marketCap: 34 * BILLION,

  predications: [
    {
      price: 400,
      days: 90,
      start: new Date('2022-01-19'),
      action: PredicationAction.Sell,
    },
  ],

  logo: '',
  name: 'SHOPIFY INC.',
  displayName: 'Shopify',
  ticker: 'shop',
  irAddress: 'https://investors.shopify.com/home/default.aspx',
  secFilings:
    'https://investors.shopify.com/financial-reports/default.aspx#sec',

  logoLink: 'https://i.ibb.co/X2786r1/vn6-Edh-Rg-400x400.jpg',
  // Demand

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1380 * MILLION,
      costOfRevenue: 687 * MILLION,
      grossProfit: 692 * MILLION,
      sellingGeneralAndAdministrative: 403 * MILLION,
      researchAndDevelopment: 273 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1365 * MILLION,
      operatingIncome: 14 * MILLION,
      interestIncomeNet: -503 * MILLION,
      netIncomeBeforeTaxes: -488 * MILLION,
      provisionForIncomeTaxes: -117 * MILLION,
      netIncome: -371 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1123 * MILLION,
      costOfRevenue: 514 * MILLION,
      grossProfit: 608 * MILLION,
      sellingGeneralAndAdministrative: 361 * MILLION,
      researchAndDevelopment: 220 * MILLION,
      unusualExpenseIncome: 30 * MILLION,
      totalOperatingExpense: 1127 * MILLION,
      operatingIncome: -4 * MILLION,
      interestIncomeNet: 1344 * MILLION,
      netIncomeBeforeTaxes: 1340 * MILLION,
      provisionForIncomeTaxes: 192 * MILLION,
      netIncome: 1148 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1119 * MILLION,
      costOfRevenue: 498 * MILLION,
      grossProfit: 620 * MILLION,
      sellingGeneralAndAdministrative: 297 * MILLION,
      researchAndDevelopment: 183 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 980 * MILLION,
      operatingIncome: 139 * MILLION,
      interestIncomeNet: 779 * MILLION,
      netIncomeBeforeTaxes: 919 * MILLION,
      provisionForIncomeTaxes: 40 * MILLION,
      netIncome: 879 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 988 * MILLION,
      costOfRevenue: 429 * MILLION,
      grossProfit: 558 * MILLION,
      sellingGeneralAndAdministrative: 263 * MILLION,
      researchAndDevelopment: 175 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 869 * MILLION,
      operatingIncome: 118 * MILLION,
      interestIncomeNet: 1250 * MILLION,
      netIncomeBeforeTaxes: 1369 * MILLION,
      provisionForIncomeTaxes: 111 * MILLION,
      netIncome: 1258 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 977 * MILLION,
      costOfRevenue: 473 * MILLION,
      grossProfit: 504 * MILLION,
      sellingGeneralAndAdministrative: 227 * MILLION,
      researchAndDevelopment: 158 * MILLION,
      unusualExpenseIncome: 4 * MILLION,
      totalOperatingExpense: 865 * MILLION,
      operatingIncome: 112 * MILLION,
      interestIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: 109 * MILLION,
      provisionForIncomeTaxes: -14 * MILLION,
      netIncome: 123 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 767 * MILLION,
      costOfRevenue: 362 * MILLION,
      grossProfit: 405 * MILLION,
      sellingGeneralAndAdministrative: 201 * MILLION,
      researchAndDevelopment: 143 * MILLION,
      unusualExpenseIncome: 9 * MILLION,
      totalOperatingExpense: 716 * MILLION,
      operatingIncome: 50 * MILLION,
      interestIncomeNet: 135 * MILLION,
      netIncomeBeforeTaxes: 186 * MILLION,
      provisionForIncomeTaxes: -4 * MILLION,
      netIncome: 191 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 714 * MILLION,
      costOfRevenue: 339 * MILLION,
      grossProfit: 375 * MILLION,
      sellingGeneralAndAdministrative: 225 * MILLION,
      researchAndDevelopment: 133 * MILLION,
      unusualExpenseIncome: 15 * MILLION,
      totalOperatingExpense: 714 * MILLION,
      operatingIncome: 0 * MILLION,
      interestIncomeNet: 4 * MILLION,
      netIncomeBeforeTaxes: 4 * MILLION,
      provisionForIncomeTaxes: -31 * MILLION,
      netIncome: 36 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 470 * MILLION,
      costOfRevenue: 213 * MILLION,
      grossProfit: 256 * MILLION,
      sellingGeneralAndAdministrative: 200 * MILLION,
      researchAndDevelopment: 116 * MILLION,
      unusualExpenseIncome: 12 * MILLION,
      totalOperatingExpense: 543 * MILLION,
      operatingIncome: -73 * MILLION,
      interestIncomeNet: 13 * MILLION,
      netIncomeBeforeTaxes: -60 * MILLION,
      provisionForIncomeTaxes: -28 * MILLION,
      netIncome: -31 * MILLION,
    },
  ],

  description: [
    {
      content:
        'Shopify is a leading provider of essential internet infrastructure for commerce, offering trusted tools to start, grow, market, and manage a retail business of any size.',
    },
    {
      content:
        'A multi-channel front end. Our software enables merchants to easily display, manage, market and sell their products across over a dozen different sales channels, including web and mobile storefronts, physical retail locations, pop-up shops, social media storefronts, native mobile apps, buy buttons, and marketplaces.',
    },
    {
      content:
        'A single integrated back end. Our software provides one single integrated, easy-to-use back end that merchants use to manage their business and buyers across these multiple sales channels',
    },
  ],
  business: {
    markets: [IndustryType.ecommerceTools, IndustryType.saas],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.tool },
      { type: StrategyType.feature },
      { type: StrategyType.userData },
    ],
  },

  // note: {

  // },
};
