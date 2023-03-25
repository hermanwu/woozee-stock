import {
  convertDateToUTC,
  getUtcDate,
} from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StrategyType } from 'src/app/stock/components/facts/data/stratgies.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const abnbRisks = [
  {
    uuid: 'abnb-r-1',
    content:
      'Airbnb Q1 compound annual growth rate in the past three years is only 21%',
  },
  {
    uuid: 'abnb-r-2',
    content: 'Travel and tourism industry has a slow growth rate (10%)',
  },
  {
    uuid: 'abnb-r-3',
    content:
      'Raising inflation could increase cost and reduce the demand for travel.',
  },
];
export const abnbCatalysts = [
  {
    uuid: 'abnb-c-1',
    content: 'Post-COVID travel demand.',
  },
  {
    uuid: 'abnb-c-2',
    content:
      'High inflation pushes travelers to look for cheap options on Airbnb instead of hotels.',
  },
];

export const abnb: StockAnalysis = {
  marketCap: 61 * BILLION,
  riskUuids: abnbRisks.map((r) => r.uuid),
  catalystUuids: abnbCatalysts.map((c) => c.uuid),
  displayName: 'Airbnb',
  logo: '',
  name: 'Airbnb',
  description: [
    {
      content: 'Airbnb is a community based on connection and belonging',
    },
    {
      content:
        'Airbnb’s hosts are the foundation of our community and business',
    },
    {
      content:
        'Airbnb enables hosts to provide guests access to a vast world of unique homes and experiences that were previously inaccessible, or even undiscovered. The role of the host is about more than opening their door. A great host enables guests to find a deeper connection to the places they visit and the people who live there.',
    },
    {
      content:
        'Guest arrivals represent an individual and all co-travelers included on a reservation for a stay for completed check-ins during a given period. Our guests are not transactions — they are engaged, contributing members of our community. ',
    },
  ],
  ticker: 'abnb',
  irAddress: 'https://airbnb2020ipo.q4web.com/home/default.aspx',
  business: {
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.userData },
      { type: StrategyType.feature },
    ],
  },
  industries: [IndustryType.shared_economy, IndustryType.travel],

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 4,
      totalRevenue: 1.902 * BILLION,
      costOfRevenue: 0.345 * BILLION,
      operatingIncome: 0.235 * BILLION,
      netIncome: 0.319 * BILLION,
      date: getUtcDate(2022, 2, 14),
      forecastRevenueTop: 1.82 * BILLION,
      forecastRevenueBottom: 1.75 * BILLION,
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 2.884 * BILLION,
      costOfRevenue: 401.149 * MILLION,
      operatingIncome: 1.203 * BILLION,
      netIncome: 1.214 * BILLION,
      date: getUtcDate(2022, 11, 1),
      forecastRevenueTop: 2.88 * BILLION,
      forecastRevenueBottom: 2.78 * BILLION,
      links: [
        {
          name: 'Shareholder Letter',
          value:
            'https://s26.q4cdn.com/656283129/files/doc_financials/2022/q3/Airbnb_Q3-2022-Shareholder-Letter_Final.pdf',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 2.104 * BILLION,
      costOfRevenue: 390.107 * MILLION,
      operatingIncome: 368.823 * MILLION,
      netIncome: 383.111 * MILLION,
      date: convertDateToUTC(new Date('2022-08-02')),
      forecastRevenueTop: 2.88 * BILLION,
      forecastRevenueBottom: 2.78 * BILLION,
      pressReleaseLink:
        'https://s26.q4cdn.com/656283129/files/doc_financials/2022/q2/Airbnb_Q2-2022-Shareholder-Letter_Final.pdf',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 1508.937 * MILLION,
      costOfRevenue: 362.623 * MILLION,
      totalOperatingExpense: 1514.068 * MILLION,
      operatingIncome: -5.131 * MILLION,
      netIncome: -18.792 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 1532 * MILLION,
      costOfRevenue: 520 * MILLION,
      grossProfit: 1011 * MILLION,
      sellingGeneralAndAdministrative: 567 * MILLION,
      researchAndDevelopment: 367 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1456 * MILLION,
      operatingIncome: 75 * MILLION,
      interestIncomeNet: 1 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: 72 * MILLION,
      provisionForIncomeTaxes: 17 * MILLION,
      netIncome: 54 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 2237 * MILLION,
      costOfRevenue: 539 * MILLION,
      grossProfit: 1697 * MILLION,
      sellingGeneralAndAdministrative: 501 * MILLION,
      researchAndDevelopment: 344 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1385 * MILLION,
      operatingIncome: 851 * MILLION,
      interestIncomeNet: -2 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 850 * MILLION,
      provisionForIncomeTaxes: 16 * MILLION,
      netIncome: 833 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1335 * MILLION,
      costOfRevenue: 502 * MILLION,
      grossProfit: 832 * MILLION,
      sellingGeneralAndAdministrative: 533 * MILLION,
      researchAndDevelopment: 349 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1386 * MILLION,
      operatingIncome: -51 * MILLION,
      interestIncomeNet: -3 * MILLION,
      otherIncomeNet: -2 * MILLION,
      netIncomeBeforeTaxes: -56 * MILLION,
      provisionForIncomeTaxes: 11 * MILLION,
      netIncome: -68 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 886 * MILLION,
      costOfRevenue: 439 * MILLION,
      grossProfit: 446 * MILLION,
      sellingGeneralAndAdministrative: 418 * MILLION,
      researchAndDevelopment: 363 * MILLION,
      unusualExpenseIncome: 489 * MILLION,
      totalOperatingExpense: 1711 * MILLION,
      operatingIncome: -824 * MILLION,
      interestIncomeNet: -44 * MILLION,
      otherIncomeNet: -297 * MILLION,
      netIncomeBeforeTaxes: -1165 * MILLION,
      provisionForIncomeTaxes: 6 * MILLION,
      netIncome: -1172 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 859 * MILLION,
      costOfRevenue: 539 * MILLION,
      grossProfit: 319 * MILLION,
      sellingGeneralAndAdministrative: 1339 * MILLION,
      researchAndDevelopment: 2062 * MILLION,
      unusualExpenseIncome: 18 * MILLION,
      totalOperatingExpense: 3959 * MILLION,
      operatingIncome: -3100 * MILLION,
      interestIncomeNet: -63 * MILLION,
      otherIncomeNet: -828 * MILLION,
      netIncomeBeforeTaxes: -3992 * MILLION,
      provisionForIncomeTaxes: -104 * MILLION,
      netIncome: -3887 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 1342 * MILLION,
      costOfRevenue: 393 * MILLION,
      grossProfit: 948 * MILLION,
      sellingGeneralAndAdministrative: 293 * MILLION,
      researchAndDevelopment: 213 * MILLION,
      unusualExpenseIncome: 22 * MILLION,
      totalOperatingExpense: 923 * MILLION,
      operatingIncome: 418 * MILLION,
      interestIncomeNet: -55 * MILLION,
      otherIncomeNet: -56 * MILLION,
      netIncomeBeforeTaxes: 307 * MILLION,
      provisionForIncomeTaxes: 87 * MILLION,
      netIncome: 219 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 334 * MILLION,
      costOfRevenue: 321 * MILLION,
      grossProfit: 13 * MILLION,
      sellingGeneralAndAdministrative: 264 * MILLION,
      researchAndDevelopment: 217 * MILLION,
      unusualExpenseIncome: 114 * MILLION,
      totalOperatingExpense: 917 * MILLION,
      operatingIncome: -583 * MILLION,
      interestIncomeNet: -43 * MILLION,
      otherIncomeNet: -12 * MILLION,
      netIncomeBeforeTaxes: -639 * MILLION,
      provisionForIncomeTaxes: -63 * MILLION,
      netIncome: -575 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 841 * MILLION,
      costOfRevenue: 499 * MILLION,
      grossProfit: 342 * MILLION,
      sellingGeneralAndAdministrative: 408 * MILLION,
      researchAndDevelopment: 258 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1167 * MILLION,
      operatingIncome: -325 * MILLION,
      interestIncomeNet: 15 * MILLION,
      otherIncomeNet: -46 * MILLION,
      netIncomeBeforeTaxes: -357 * MILLION,
      provisionForIncomeTaxes: -16 * MILLION,
      netIncome: -340 * MILLION,
    },
  ],
};
