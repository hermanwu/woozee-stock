import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ddog: StockAnalysis = {
  marketCap: 45 * BILLION,
  risks: [
    {
      name: 'Market size might be too small',
    },
  ],
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 326 * MILLION,
      costOfRevenue: 67 * MILLION,
      grossProfit: 259 * MILLION,
      sellingGeneralAndAdministrative: 117 * MILLION,
      researchAndDevelopment: 133 * MILLION,
      totalOperatingExpense: 317 * MILLION,
      operatingIncome: 8 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 8 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: 7 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 270 * MILLION,
      costOfRevenue: 63 * MILLION,
      grossProfit: 207 * MILLION,
      sellingGeneralAndAdministrative: 99 * MILLION,
      researchAndDevelopment: 112 * MILLION,
      totalOperatingExpense: 275 * MILLION,
      operatingIncome: -4 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -4 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -5 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 233 * MILLION,
      costOfRevenue: 57 * MILLION,
      grossProfit: 176 * MILLION,
      sellingGeneralAndAdministrative: 91 * MILLION,
      researchAndDevelopment: 94 * MILLION,
      totalOperatingExpense: 243 * MILLION,
      operatingIncome: -9 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -9 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -9 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 198 * MILLION,
      costOfRevenue: 46 * MILLION,
      grossProfit: 151 * MILLION,
      sellingGeneralAndAdministrative: 85 * MILLION,
      researchAndDevelopment: 79 * MILLION,
      totalOperatingExpense: 211 * MILLION,
      operatingIncome: -12 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -12 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -13 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 177 * MILLION,
      costOfRevenue: 40 * MILLION,
      grossProfit: 136 * MILLION,
      sellingGeneralAndAdministrative: 77 * MILLION,
      researchAndDevelopment: 67 * MILLION,
      totalOperatingExpense: 186 * MILLION,
      operatingIncome: -8 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: -15 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -16 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 154 * MILLION,
      costOfRevenue: 33 * MILLION,
      grossProfit: 120 * MILLION,
      sellingGeneralAndAdministrative: 73 * MILLION,
      researchAndDevelopment: 56 * MILLION,
      totalOperatingExpense: 163 * MILLION,
      operatingIncome: -9 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: -14 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -15 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 140 * MILLION,
      costOfRevenue: 28 * MILLION,
      grossProfit: 111 * MILLION,
      sellingGeneralAndAdministrative: 64 * MILLION,
      researchAndDevelopment: 45 * MILLION,
      totalOperatingExpense: 139 * MILLION,
      operatingIncome: 0 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: 0 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 0 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 131 * MILLION,
      costOfRevenue: 26 * MILLION,
      grossProfit: 104 * MILLION,
      sellingGeneralAndAdministrative: 60 * MILLION,
      researchAndDevelopment: 40 * MILLION,
      totalOperatingExpense: 127 * MILLION,
      operatingIncome: 3 * MILLION,
      interestIncomeNet: NaN * MILLION,
      otherIncomeNet: 2 * MILLION,
      netIncomeBeforeTaxes: 6 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: 6 * MILLION,
    },
  ],
  logo: '',
  name: 'Datadog',
  description: [],
  ticker: 'ddog',
  irAddress: 'https://investors.datadoghq.com/',
  secFilings:
    'https://investors.datadoghq.com/financial-information/sec-filings',

  business: {
    markets: [MarketType.dataAnalytics],
    overview: [
      'Datadog is the monitoring and analytics platform for developers, IT operations teams and business users in the cloud age.',
    ],
  },
  competitors: ['pltr', 'snow'],
};
