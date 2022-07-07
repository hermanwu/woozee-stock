import { MarketType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { BenefitType } from '../components/business-overview/business.model';
import { PredicationAction } from '../models/predication.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const crmRisks = [];
export const crmCatalysts = [];

export const crm: StockAnalysis = {
  marketCap: 175 * BILLION,
  predications: [
    {
      start: new Date('2022-3-1'),
      days: 60,
      price: 130,
      action: PredicationAction.Sell,
    },
  ],
  shortName: 'Salesforce',
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 7.411 * BILLION,
      costOfRevenue: 2.045 * BILLION,
      grossProfit: 5.366 * BILLION,
      operatingIncome: 20 * MILLION,
      netIncome: 28 * MILLION,
      pressReleaseLink:
        'https://s23.q4cdn.com/574569502/files/doc_financials/2023/q1/CRM-Q1-FY23-Earnings-Press-Release-w-financials.pdf',
      slidesLink:
        'https://s23.q4cdn.com/574569502/files/doc_financials/2023/q1/CRM-Q1-FY23-Earnings-Presentation.pdf',
      transcript:
        'https://s23.q4cdn.com/574569502/files/doc_financials/2023/q1/final-053122-salesforce-q1-fy23-earnings-call-25004.pdf',
      webcast:
        'https://investor.salesforce.com/events-and-presentations/event-details/2022/Q1-FY23-Earnings-Conference-Call/default.aspx',
    },
    {
      pressReleaseLink:
        'https://s23.q4cdn.com/574569502/files/doc_financials/2022/q4/CRM-Q4-FY22-Earnings-Press-Release-w-financials.pdf',

      year: 2021,
      quarter: 4,
      totalRevenue: 7326 * MILLION,
      costOfRevenue: 2014 * MILLION,
      grossProfit: 5312 * MILLION,
      sellingGeneralAndAdministrative: 3961 * MILLION,
      researchAndDevelopment: 1291 * MILLION,
      unusualExpenseIncome: 6 * MILLION,
      totalOperatingExpense: 7508 * MILLION,
      operatingIncome: -182 * MILLION,
      interestIncomeNet: -31 * MILLION,
      otherIncomeNet: 16 * MILLION,
      netIncomeBeforeTaxes: -197 * MILLION,
      provisionForIncomeTaxes: -169 * MILLION,
      netIncome: -28 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 6863 * MILLION,
      costOfRevenue: 1844 * MILLION,
      grossProfit: 5019 * MILLION,
      sellingGeneralAndAdministrative: 3542 * MILLION,
      researchAndDevelopment: 1203 * MILLION,
      unusualExpenseIncome: 11 * MILLION,
      totalOperatingExpense: 6836 * MILLION,
      operatingIncome: 27 * MILLION,
      interestIncomeNet: 302 * MILLION,
      otherIncomeNet: -30 * MILLION,
      netIncomeBeforeTaxes: 299 * MILLION,
      provisionForIncomeTaxes: -169 * MILLION,
      netIncome: 468 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 6340 * MILLION,
      costOfRevenue: 1613 * MILLION,
      grossProfit: 4727 * MILLION,
      sellingGeneralAndAdministrative: 3240 * MILLION,
      researchAndDevelopment: 1020 * MILLION,
      unusualExpenseIncome: 20 * MILLION,
      totalOperatingExpense: 6028 * MILLION,
      operatingIncome: 312 * MILLION,
      interestIncomeNet: 506 * MILLION,
      otherIncomeNet: 8 * MILLION,
      netIncomeBeforeTaxes: 826 * MILLION,
      provisionForIncomeTaxes: 291 * MILLION,
      netIncome: 535 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 5963 * MILLION,
      costOfRevenue: 1555 * MILLION,
      grossProfit: 4408 * MILLION,
      sellingGeneralAndAdministrative: 2983 * MILLION,
      researchAndDevelopment: 951 * MILLION,
      unusualExpenseIncome: 14 * MILLION,
      totalOperatingExpense: 5623 * MILLION,
      operatingIncome: 340 * MILLION,
      interestIncomeNet: 269 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: 604 * MILLION,
      provisionForIncomeTaxes: 135 * MILLION,
      netIncome: 469 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 5817 * MILLION,
      costOfRevenue: 1479 * MILLION,
      grossProfit: 4338 * MILLION,
      sellingGeneralAndAdministrative: 3091 * MILLION,
      researchAndDevelopment: 939 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 5624 * MILLION,
      operatingIncome: 193 * MILLION,
      interestIncomeNet: 232 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: 425 * MILLION,
      provisionForIncomeTaxes: 135 * MILLION,
      netIncome: 267 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 5419 * MILLION,
      costOfRevenue: 1394 * MILLION,
      grossProfit: 4025 * MILLION,
      sellingGeneralAndAdministrative: 2785 * MILLION,
      researchAndDevelopment: 902 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 5195 * MILLION,
      operatingIncome: 224 * MILLION,
      interestIncomeNet: 1030 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: 1250 * MILLION,
      provisionForIncomeTaxes: 169 * MILLION,
      netIncome: 1081 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 5151 * MILLION,
      costOfRevenue: 1311 * MILLION,
      grossProfit: 3840 * MILLION,
      sellingGeneralAndAdministrative: 2646 * MILLION,
      researchAndDevelopment: 898 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 4973 * MILLION,
      operatingIncome: 178 * MILLION,
      interestIncomeNet: 676 * MILLION,
      otherIncomeNet: -15 * MILLION,
      netIncomeBeforeTaxes: 839 * MILLION,
      provisionForIncomeTaxes: -1786 * MILLION,
      netIncome: 2625 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 4865 * MILLION,
      costOfRevenue: 1254 * MILLION,
      grossProfit: 3611 * MILLION,
      sellingGeneralAndAdministrative: 2780 * MILLION,
      researchAndDevelopment: 859 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 5005 * MILLION,
      operatingIncome: -140 * MILLION,
      interestIncomeNet: 195 * MILLION,
      otherIncomeNet: -8 * MILLION,
      netIncomeBeforeTaxes: 47 * MILLION,
      provisionForIncomeTaxes: -52 * MILLION,
      netIncome: 99 * MILLION,
    },
  ],

  logo: '',
  name: 'Salesforce',
  description: [],
  ticker: 'crm',
  lastUpdated: new Date('2021-08-25'),
  irAddress: 'https://investor.salesforce.com/overview/default.aspx',
  secFilings: 'https://investor.salesforce.com/financials/default.aspx',
  business: {
    missions: ['We build bridges between companies and customers.'],
    markets: [MarketType.saas, MarketType.crm],
    users: [
      {
        type: 'Sales',
      },
    ],
    overview: [
      'customer relationship management (“CRM”) technology that brings companies and their customers together.',
      'connect with their customers through digital channels.',
    ],
    productBenefits: [
      {
        type: BenefitType.accessibility,
        note: 'Improve accessibility of customer data by delivering a single source of truth, connecting customer data across systems, apps and devices.',
      },
      {
        type: BenefitType.efficiency,
      },
    ],
    growthStrategy: [
      'Expand in the growing addressable markets',
      'Expand relationships with existing customers',
      'Extend go-to-market capabilities globally',
      'Expand into new categories and verticals',
      'Expand and strengthening our partner ecosystem',
    ],
    competitiveAdvantages: [
      {
        type: StrategyType.networkEffect,
      },
    ],
  },
};
