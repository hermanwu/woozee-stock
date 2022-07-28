import { IndustryType } from 'src/app/facts/data/area.enum';
import { allNews } from 'src/app/media/news/news.const';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const fbRisks = [
  {
    name: 'Financial Health',
    level: RiskLevel.shortTerm,
    type: FactType.profit,
    notes: [
      {
        content: 'Earning report: No debt, health cash flow',
        link: 'https://s21.q4cdn.com/399680738/files/doc_financials/2021/q4/FB-12.31.2021-Exhibit-99.1-Final.pdf',
      },
      {
        content: 'Quarterly loss from metaverse investment totals $3.3 billion',
      },
    ],
  },
  {
    name: 'Value',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content:
          'PE Ratio 180+ (US market: 16.3, Auto industry: 12.8, Tech industry: 25.1)',
      },
      {
        content: 'PEG Ratio is 8.82 (Apple: 2.1)',
      },
    ],
  },
  {
    name: 'Future Growth',
    level: RiskLevel.shortTerm,
    notes: [allNews[2]],
  },
  {
    name: 'Management',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content: "Elon Musk's health and focus",
      },
      {
        content: 'Overpromise',
        notes: [{ content: 'However, he would achieve the goal eventually.' }],
      },
    ],
  },
  {
    name: 'Investors Sentiment',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content:
          'Elon musk has many fans. General public owns 36.1% of the stocks (GM 12.8%)',
      },
      {
        content:
          'Institution do not like the factor Tesla will not be focusing on auto production in 2022.',
        notes: [
          {
            content:
              'Elon was talking mainly about FSD and robot during earning call',
          },
        ],
      },
      {
        content: '17 out of 31 analysts on Wall Street give a BUY rating.',
        notes: [
          {
            content: '7 with HOLD rating and 7 with SELL rating.',
          },
        ],
      },
    ],
  },
  {
    name: 'Competitors',
    level: RiskLevel.shortTerm,
    notes: [allNews[3]],
  },
  {
    name: 'Technical Chart',
    level: RiskLevel.shortTerm,
    notes: [
      {
        content: 'RSI is below average',
      },
      {
        content: 'Did not break 200 SMA',
      },
    ],
  },
  {
    name: 'Macroeconomics',
    level: RiskLevel.shortTerm,
    notes: [],
  },
];

export const meta: StockAnalysis = {
  marketCap: 496 * BILLION,
  shortName: 'Meta',
  predications: [
    {
      price: 140,
      days: 120,
      start: new Date('2022-3-7'),
    },
  ],
  logo: '',
  name: 'Meta',
  description: [],
  ticker: 'meta',
  lastUpdated: new Date('2021-08-23'),
  irAddress: 'https://investor.fb.com/home/default.aspx',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 28.822 * BILLION,
      costOfRevenue: 5.192 * BILLION,
      operatingIncome: 8.358 * BILLION,
      netIncome: 6.687 * BILLION,
      slidesLink:
        'https://s21.q4cdn.com/399680738/files/doc_financials/2022/q2/Q2-2022_Earnings-Presentation.pdf',
      pressReleaseLink:
        'https://s21.q4cdn.com/399680738/files/doc_financials/2022/q2/Meta-06.30.2022-Exhibit-99.1-Final.pdf',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 27908 * MILLION,
      costOfRevenue: 6005 * MILLION,
      totalOperatingExpense: 19384 * MILLION,
      netIncome: 7465 * MILLION,
      operatingIncome: 8524 * MILLION,
      slidesLink:
        'https://s21.q4cdn.com/399680738/files/doc_financials/2022/q1/Q1-2022_Earnings-Presentation_Final.pdf',
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 33671 * MILLION,
      costOfRevenue: 6348 * MILLION,
      grossProfit: 27323 * MILLION,
      sellingGeneralAndAdministrative: 7692 * MILLION,
      researchAndDevelopment: 7046 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 21086 * MILLION,
      operatingIncome: 12585 * MILLION,
      interestIncomeNet: 103 * MILLION,
      otherIncomeNet: 15 * MILLION,
      netIncomeBeforeTaxes: 12703 * MILLION,
      provisionForIncomeTaxes: 2418 * MILLION,
      netIncome: 10285 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 29010 * MILLION,
      costOfRevenue: 5771 * MILLION,
      grossProfit: 23239 * MILLION,
      sellingGeneralAndAdministrative: 6500 * MILLION,
      researchAndDevelopment: 6316 * MILLION,
      totalOperatingExpense: 18587 * MILLION,
      operatingIncome: 10423 * MILLION,
      interestIncomeNet: 72 * MILLION,
      otherIncomeNet: 70 * MILLION,
      netIncomeBeforeTaxes: 10565 * MILLION,
      provisionForIncomeTaxes: 1371 * MILLION,
      netIncome: 9194 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 29077 * MILLION,
      costOfRevenue: 5399 * MILLION,
      grossProfit: 23678 * MILLION,
      sellingGeneralAndAdministrative: 5215 * MILLION,
      researchAndDevelopment: 6096 * MILLION,
      totalOperatingExpense: 16710 * MILLION,
      operatingIncome: 12367 * MILLION,
      interestIncomeNet: 121 * MILLION,
      otherIncomeNet: 25 * MILLION,
      netIncomeBeforeTaxes: 12513 * MILLION,
      provisionForIncomeTaxes: 2119 * MILLION,
      netIncome: 10394 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 26171 * MILLION,
      costOfRevenue: 5131 * MILLION,
      grossProfit: 21040 * MILLION,
      sellingGeneralAndAdministrative: 4465 * MILLION,
      researchAndDevelopment: 5197 * MILLION,
      totalOperatingExpense: 14793 * MILLION,
      operatingIncome: 11378 * MILLION,
      interestIncomeNet: 118 * MILLION,
      otherIncomeNet: 7 * MILLION,
      netIncomeBeforeTaxes: 11503 * MILLION,
      provisionForIncomeTaxes: 2006 * MILLION,
      netIncome: 9497 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 28072 * MILLION,
      costOfRevenue: 5210 * MILLION,
      grossProfit: 22862 * MILLION,
      sellingGeneralAndAdministrative: 4880 * MILLION,
      researchAndDevelopment: 5207 * MILLION,
      totalOperatingExpense: 15297 * MILLION,
      operatingIncome: 12775 * MILLION,
      interestIncomeNet: 7 * MILLION,
      otherIncomeNet: 273 * MILLION,
      netIncomeBeforeTaxes: 13055 * MILLION,
      provisionForIncomeTaxes: 1836 * MILLION,
      netIncome: 11219 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 21470 * MILLION,
      costOfRevenue: 4194 * MILLION,
      grossProfit: 17276 * MILLION,
      sellingGeneralAndAdministrative: 4473 * MILLION,
      researchAndDevelopment: 4763 * MILLION,
      totalOperatingExpense: 13430 * MILLION,
      operatingIncome: 8040 * MILLION,
      interestIncomeNet: 146 * MILLION,
      otherIncomeNet: -53 * MILLION,
      netIncomeBeforeTaxes: 8133 * MILLION,
      provisionForIncomeTaxes: 287 * MILLION,
      netIncome: 7846 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 18687 * MILLION,
      costOfRevenue: 3829 * MILLION,
      grossProfit: 14858 * MILLION,
      sellingGeneralAndAdministrative: 4433 * MILLION,
      researchAndDevelopment: 4462 * MILLION,
      totalOperatingExpense: 12724 * MILLION,
      operatingIncome: 5963 * MILLION,
      interestIncomeNet: 162 * MILLION,
      otherIncomeNet: 6 * MILLION,
      netIncomeBeforeTaxes: 6131 * MILLION,
      provisionForIncomeTaxes: 953 * MILLION,
      netIncome: 5178 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 17737 * MILLION,
      costOfRevenue: 3459 * MILLION,
      grossProfit: 14278 * MILLION,
      sellingGeneralAndAdministrative: 4370 * MILLION,
      researchAndDevelopment: 4015 * MILLION,
      totalOperatingExpense: 11844 * MILLION,
      operatingIncome: 5893 * MILLION,
      interestIncomeNet: 228 * MILLION,
      otherIncomeNet: -260 * MILLION,
      netIncomeBeforeTaxes: 5861 * MILLION,
      provisionForIncomeTaxes: 959 * MILLION,
      netIncome: 4902 * MILLION,
    },
  ],

  business: {
    markets: [
      IndustryType.social,
      IndustryType.adTech,
      IndustryType.vr,
      IndustryType.digitalMedia,
    ],
  },
};
