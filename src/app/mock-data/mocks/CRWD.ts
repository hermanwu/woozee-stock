import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const crwd: StockAnalysis = {
  uuid: 'crwd-uuid-1',
  marketCap: 40.57 * BILLION,
  predications: [
    {
      uuid: 'crwd-prediction-1',
      betterOptionUuids: ['better-options-1'],
    },
  ],
  earningsReports: [
    {
      year: 2022,
      quarter: 4,
      date: convertDateToUTC(new Date('2022-3-7')),
      totalRevenue: 637.367 * MILLION,
      grossProfit: 461.763 * MILLION,
      operatingIncome: -61.5 * MILLION,
      netIncome: -48.932 * MILLION,
      forecastRevenueTop: 678.2 * MILLION,
      forecastRevenueBottom: 674.9 * MILLION,
      links: [
        {
          name: 'Q2 Financial Results',
          value:
            'https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-second-quarter-fiscal-year-2023-financial',
        },
        {
          name: 'Form 10-Q',
          value:
            'https://ir.crowdstrike.com/static-files/49137c3e-100d-4ad7-8487-b64d33d3fa41',
        },
      ],
    },
    {
      year: 2022,
      quarter: 3,
      date: convertDateToUTC(new Date('2022-11-30')),
      totalRevenue: 580.882 * MILLION,
      grossProfit: 422.654 * MILLION,
      operatingIncome: -56.422 * MILLION,
      netIncome: -54.631 * MILLION,
      forecastRevenueTop: 628.2 * MILLION,
      forecastRevenueBottom: 619.1 * MILLION,
      links: [
        {
          name: 'Q2 Financial Results',
          value:
            'https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-second-quarter-fiscal-year-2023-financial',
        },
        {
          name: 'Form 10-Q',
          value:
            'https://ir.crowdstrike.com/static-files/49137c3e-100d-4ad7-8487-b64d33d3fa41',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      date: convertDateToUTC(new Date('2022-08-31')),
      totalRevenue: 535.153 * MILLION,
      grossProfit: 394.586 * MILLION,
      operatingIncome: -48.307 * MILLION,
      netIncome: -48.313 * MILLION,
      forecastRevenueTop: 575.9 * MILLION,
      forecastRevenueBottom: 569.1 * MILLION,
      links: [
        {
          name: 'Q2 Financial Results',
          value:
            'https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-second-quarter-fiscal-year-2023-financial',
        },
        {
          name: 'Form 10-Q',
          value:
            'https://ir.crowdstrike.com/static-files/49137c3e-100d-4ad7-8487-b64d33d3fa41',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 487.834 * MILLION,
      costOfRevenue: 126.832 * MILLION,
      grossProfit: 361.002 * MILLION,
      totalOperatingExpense: 384.885 * MILLION,
      operatingIncome: -23.883 * MILLION,
      netIncome: -30.409 * MILLION,
    },
    {
      pressReleaseLink:
        'https://ir.crowdstrike.com/static-files/df3bb483-e089-4e1c-af9b-f47ec57cdf03',
      year: 2021,
      quarter: 4,
      totalRevenue: 431 * MILLION,
      costOfRevenue: 112 * MILLION,
      grossProfit: 318 * MILLION,
      sellingGeneralAndAdministrative: 236 * MILLION,
      researchAndDevelopment: 105 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 454 * MILLION,
      operatingIncome: -23 * MILLION,
      interestIncomeNet: -5 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -28 * MILLION,
      provisionForIncomeTaxes: 13 * MILLION,
      netIncome: -41 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 380 * MILLION,
      costOfRevenue: 101 * MILLION,
      grossProfit: 278 * MILLION,
      sellingGeneralAndAdministrative: 219 * MILLION,
      researchAndDevelopment: 97 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 420 * MILLION,
      operatingIncome: -40 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -45 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: -50 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 337 * MILLION,
      costOfRevenue: 90 * MILLION,
      grossProfit: 247 * MILLION,
      sellingGeneralAndAdministrative: 200 * MILLION,
      researchAndDevelopment: 90 * MILLION,
      unusualExpenseIncome: 3 * MILLION,
      totalOperatingExpense: 385 * MILLION,
      operatingIncome: -47 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -53 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: -57 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 302 * MILLION,
      costOfRevenue: 78 * MILLION,
      grossProfit: 224 * MILLION,
      sellingGeneralAndAdministrative: 172 * MILLION,
      researchAndDevelopment: 78 * MILLION,
      unusualExpenseIncome: 4 * MILLION,
      totalOperatingExpense: 334 * MILLION,
      operatingIncome: -31 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -32 * MILLION,
      provisionForIncomeTaxes: 50 * MILLION,
      netIncome: -85 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 264 * MILLION,
      costOfRevenue: 66 * MILLION,
      grossProfit: 198 * MILLION,
      sellingGeneralAndAdministrative: 146 * MILLION,
      researchAndDevelopment: 66 * MILLION,
      unusualExpenseIncome: 1 * MILLION,
      totalOperatingExpense: 280 * MILLION,
      operatingIncome: -15 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -16 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -19 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 232 * MILLION,
      costOfRevenue: 61 * MILLION,
      grossProfit: 170 * MILLION,
      sellingGeneralAndAdministrative: 135 * MILLION,
      researchAndDevelopment: 57 * MILLION,
      unusualExpenseIncome: 2 * MILLION,
      totalOperatingExpense: 256 * MILLION,
      operatingIncome: -24 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -24 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -24 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 198 * MILLION,
      costOfRevenue: 54 * MILLION,
      grossProfit: 144 * MILLION,
      sellingGeneralAndAdministrative: 124 * MILLION,
      researchAndDevelopment: 50 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 228 * MILLION,
      operatingIncome: -29 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -29 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -29 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 178 * MILLION,
      costOfRevenue: 46 * MILLION,
      grossProfit: 131 * MILLION,
      sellingGeneralAndAdministrative: 113 * MILLION,
      researchAndDevelopment: 40 * MILLION,
      unusualExpenseIncome: NaN * MILLION,
      totalOperatingExpense: 200 * MILLION,
      operatingIncome: -22 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 4 * MILLION,
      netIncomeBeforeTaxes: -18 * MILLION,
      provisionForIncomeTaxes: 1 * MILLION,
      netIncome: -19 * MILLION,
    },
  ],
  logo: '',
  name: 'Crowdstrike',
  displayName: 'Crowdstrike',
  description: [],
  ticker: 'crwd',
  irAddress: 'https://ir.crowdstrike.com/',
  secFilings: 'https://ir.crowdstrike.com/financial-information/sec-filings',
  business: {
    markets: [IndustryType.saas, IndustryType.cybersecurity],
    overview: [
      'We founded CrowdStrike in 2011 to reinvent security for the cloud era.',
      'leverages the network effects of crowdsourced data applied to modern technologies such as AI, cloud computing, and graph databases.',
      'collect, process, analyze and correlate vast amounts of high fidelity data across the entire threat lifecycle using a combination of AI and behavioral pattern-matching techniques to stop breaches.',
      'Crowdsource data across  entire customer base and taking advantage of economies of scale, ... enables AI algorithms to be uniquely effective.',
    ],
  },
};
