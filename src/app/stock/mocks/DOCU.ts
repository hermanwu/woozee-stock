import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const docuRisks = [
  {
    type: FactType.growth,
    name: 'Profession service revenue decreases 19% (16.8 Million)',
    notes: [
      {
        content: 'Indicate less large customers',
      },
    ],
  },
  {
    type: FactType.business,
    name: 'Small percent are enterprise customers: (170K out of 1.17M)',
    notes: [
      {
        content: 'Indicate less large customers',
      },
    ],
  },
];

export const docu: StockAnalysis = {
  marketCap: 17.46 * BILLION,
  logo: '',
  name: 'DOCUSIGN, INC.',
  description: [],
  ticker: 'docu',
  irAddress: 'https://investor.docusign.com/investors/home/default.aspx',
  shortName: 'DocuSign',

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 588.692 * MILLION,
      costOfRevenue: 132.416 * MILLION,
      operatingIncome: -19.226 * MILLION,
      netIncome: -27.373 * MILLION,
      fullyYearForecastRevenue: 2476 * MILLION,

      reportLink:
        'https://s22.q4cdn.com/408980645/files/doc_financials/2023/q1/cab9d609-89e9-43c1-b276-71e08ecfe329.pdf',
    },
    {
      pressReleaseLink:
        'https://investor.docusign.com/investors/press-releases/press-release-details/2022/DocuSign-Announces-Fourth-Quarter-and-Fiscal-Year-2022-Financial-Results/',
      slidesLink:
        'https://s22.q4cdn.com/408980645/files/doc_financials/2022/q4/DS-Q4-FY2022-Earnings-Slides_Final.pdf',
      revenueRetention: 1.19,
      year: 2021,
      quarter: 4,
      totalRevenue: 580 * MILLION,
      costOfRevenue: 131 * MILLION,
      grossProfit: 449 * MILLION,
      sellingGeneralAndAdministrative: 363 * MILLION,
      researchAndDevelopment: 110 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 606 * MILLION,
      operatingIncome: -25 * MILLION,
      interestIncomeNet: -4 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -29 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -30 * MILLION,
      quarterHighlights: [],
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 545 * MILLION,
      costOfRevenue: 115 * MILLION,
      grossProfit: 429 * MILLION,
      sellingGeneralAndAdministrative: 330 * MILLION,
      researchAndDevelopment: 102 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 548 * MILLION,
      operatingIncome: -3 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -5 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -5 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 511 * MILLION,
      costOfRevenue: 113 * MILLION,
      grossProfit: 398 * MILLION,
      sellingGeneralAndAdministrative: 322 * MILLION,
      researchAndDevelopment: 94 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 534 * MILLION,
      operatingIncome: -22 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -25 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -25 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 469 * MILLION,
      costOfRevenue: 105 * MILLION,
      grossProfit: 363 * MILLION,
      sellingGeneralAndAdministrative: 285 * MILLION,
      researchAndDevelopment: 85 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 479 * MILLION,
      operatingIncome: -10 * MILLION,
      interestIncomeNet: 4 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -6 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -8 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 430 * MILLION,
      costOfRevenue: 101 * MILLION,
      grossProfit: 329 * MILLION,
      sellingGeneralAndAdministrative: 270 * MILLION,
      researchAndDevelopment: 80 * MILLION,
      unusualExpenseIncome: 33 * MILLION,
      totalOperatingExpense: 489 * MILLION,
      operatingIncome: -58 * MILLION,
      interestIncomeNet: -4 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -63 * MILLION,
      provisionForIncomeTaxes: 8 * MILLION,
      netIncome: -72 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 382 * MILLION,
      costOfRevenue: 97 * MILLION,
      grossProfit: 285 * MILLION,
      sellingGeneralAndAdministrative: 256 * MILLION,
      researchAndDevelopment: 73 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 431 * MILLION,
      operatingIncome: -48 * MILLION,
      interestIncomeNet: -7 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -56 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -58 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 342 * MILLION,
      costOfRevenue: 90 * MILLION,
      grossProfit: 251 * MILLION,
      sellingGeneralAndAdministrative: 242 * MILLION,
      researchAndDevelopment: 63 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 400 * MILLION,
      operatingIncome: -58 * MILLION,
      interestIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: -63 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -64 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 297 * MILLION,
      costOfRevenue: 74 * MILLION,
      grossProfit: 222 * MILLION,
      sellingGeneralAndAdministrative: 207 * MILLION,
      researchAndDevelopment: 54 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 338 * MILLION,
      operatingIncome: -41 * MILLION,
      interestIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: -45 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -47 * MILLION,
    },
  ],
  business: {
    markets: [MarketType.saas],
  },
};
