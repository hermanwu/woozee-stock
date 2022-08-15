import { IndustryType } from 'src/app/facts/data/area.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const amdRisks = [];

export const amdCatalysts = [];

export const amd: StockAnalysis = {
  marketCap: 156 * BILLION,

  logo: '',
  name: 'AMD',
  description: [],
  ticker: 'amd',
  irAddress: 'https://ir.amd.com/',

  business: {
    markets: [IndustryType.semi, IndustryType.datacenter],
  },

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      isForecast: true,
      totalRevenue: 6.7 * BILLION,
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 6.55 * BILLION,
      grossProfit: 3.028 * BILLION,
      operatingIncome: 526 * MILLION,
      netIncome: 447 * MILLION,
      stats: [
        {
          name: 'Segments Revenue',
          details: [
            {
              name: 'Data Center (Server CPU, datacenter GPU, Pensando, Xilinx)',
              value: 1.5 * BILLION,
              changeRate: 0.83,
            },
            {
              name: 'Client (PC processors and chips)',
              value: 2.2 * BILLION,
              changeRate: 0.25,
            },
            {
              name: 'Gaming (Discrete GPU and semi-custom game console)',
              value: 1.7 * BILLION,
              changeRate: 0.32,
            },
            {
              name: 'Embedded (Xilinx)',
              value: 1.3 * BILLION,
              changeRate: 22.28,
            },
          ],
        },
      ],
      slidesLink:
        'https://d1io3yog0oux5.cloudfront.net/_17762bd717cfef214ea76c9f6586fc80/amd/db/778/6877/file/AMD+Q2%2722+Earnings+Slides_8.2.22.pdf',
      pressReleaseLink:
        'https://ir.amd.com/news-events/press-releases/detail/1084/amd-reports-second-quarter-2022-financial-results/',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 5.887 * BILLION,
      costOfRevenue: 3.069 * BILLION,
      grossProfit: 2.818 * BILLION,
      operatingIncome: 951 * MILLION,
      netIncome: 786 * MILLION,
      reportLink:
        'https://ir.amd.com/sec-filings/content/0000002488-22-000078/0000002488-22-000078.pdf',
      pressReleaseLink:
        'https://d1io3yog0oux5.cloudfront.net/_bd6a8214d7bef00b1d177bfadde38e10/amd/news/2022-05-03_AMD_Reports_First_Quarter_2022_Financial_1062.pdf',
      slidesLink:
        'https://d1io3yog0oux5.cloudfront.net/_bd6a8214d7bef00b1d177bfadde38e10/amd/db/778/6717/file/AMD+Q1%2722+Financial+Results+Slides.pdf',
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 4826 * MILLION,
      costOfRevenue: 2400 * MILLION,
      grossProfit: 2426 * MILLION,
      sellingGeneralAndAdministrative: 412 * MILLION,
      researchAndDevelopment: 811 * MILLION,
      unusualExpenseIncome: -28 * MILLION,
      totalOperatingExpense: 3595 * MILLION,
      operatingIncome: 1231 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -28 * MILLION,
      netIncomeBeforeTaxes: 1203 * MILLION,
      provisionForIncomeTaxes: 229 * MILLION,
      netIncome: 974 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 4313 * MILLION,
      costOfRevenue: 2227 * MILLION,
      grossProfit: 2086 * MILLION,
      sellingGeneralAndAdministrative: 376 * MILLION,
      researchAndDevelopment: 765 * MILLION,
      unusualExpenseIncome: 22 * MILLION,
      totalOperatingExpense: 3390 * MILLION,
      operatingIncome: 923 * MILLION,
      interestIncomeNet: -7 * MILLION,
      otherIncomeNet: 87 * MILLION,
      netIncomeBeforeTaxes: 1003 * MILLION,
      provisionForIncomeTaxes: 82 * MILLION,
      netIncome: 923 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 3850 * MILLION,
      costOfRevenue: 2020 * MILLION,
      grossProfit: 1830 * MILLION,
      sellingGeneralAndAdministrative: 341 * MILLION,
      researchAndDevelopment: 659 * MILLION,
      unusualExpenseIncome: -1 * MILLION,
      totalOperatingExpense: 3019 * MILLION,
      operatingIncome: 831 * MILLION,
      interestIncomeNet: -10 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 821 * MILLION,
      provisionForIncomeTaxes: 113 * MILLION,
      netIncome: 710 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 3445 * MILLION,
      costOfRevenue: 1858 * MILLION,
      grossProfit: 1587 * MILLION,
      sellingGeneralAndAdministrative: 319 * MILLION,
      researchAndDevelopment: 610 * MILLION,
      unusualExpenseIncome: 10 * MILLION,
      totalOperatingExpense: 2797 * MILLION,
      operatingIncome: 648 * MILLION,
      interestIncomeNet: -9 * MILLION,
      otherIncomeNet: 3 * MILLION,
      netIncomeBeforeTaxes: 642 * MILLION,
      provisionForIncomeTaxes: 89 * MILLION,
      netIncome: 555 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3244 * MILLION,
      costOfRevenue: 1793 * MILLION,
      grossProfit: 1451 * MILLION,
      sellingGeneralAndAdministrative: 308 * MILLION,
      researchAndDevelopment: 573 * MILLION,
      unusualExpenseIncome: 16 * MILLION,
      totalOperatingExpense: 2690 * MILLION,
      operatingIncome: 554 * MILLION,
      interestIncomeNet: -1 * MILLION,
      otherIncomeNet: -7 * MILLION,
      netIncomeBeforeTaxes: 546 * MILLION,
      provisionForIncomeTaxes: -1232 * MILLION,
      netIncome: 1781 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 2801 * MILLION,
      costOfRevenue: 1571 * MILLION,
      grossProfit: 1230 * MILLION,
      sellingGeneralAndAdministrative: 273 * MILLION,
      researchAndDevelopment: 508 * MILLION,
      unusualExpenseIncome: 38 * MILLION,
      totalOperatingExpense: 2390 * MILLION,
      operatingIncome: 411 * MILLION,
      interestIncomeNet: -11 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 401 * MILLION,
      provisionForIncomeTaxes: 12 * MILLION,
      netIncome: 390 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 1932 * MILLION,
      costOfRevenue: 1084 * MILLION,
      grossProfit: 848 * MILLION,
      sellingGeneralAndAdministrative: 215 * MILLION,
      researchAndDevelopment: 460 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1759 * MILLION,
      operatingIncome: 173 * MILLION,
      interestIncomeNet: -14 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 160 * MILLION,
      provisionForIncomeTaxes: 4 * MILLION,
      netIncome: 157 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 1786 * MILLION,
      costOfRevenue: 968 * MILLION,
      grossProfit: 818 * MILLION,
      sellingGeneralAndAdministrative: 199 * MILLION,
      researchAndDevelopment: 442 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1609 * MILLION,
      operatingIncome: 177 * MILLION,
      interestIncomeNet: -13 * MILLION,
      otherIncomeNet: 4 * MILLION,
      netIncomeBeforeTaxes: 168 * MILLION,
      provisionForIncomeTaxes: 6 * MILLION,
      netIncome: 162 * MILLION,
    },
  ],
  earnings: {
    website:
      'https://ir.amd.com/news-events/press-releases/detail/1014/amd-reports-second-quarter-2021-financial-results',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.amd.com/sec-filings/filter/quarterly-filings/content/0000002488-21-000116/0000002488-21-000116.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 122.29 * 1e9,
        totalRevenue: 3850 * 1e6,
        operatingIncome: 831 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 1932 * 1e6,
        operatingIncome: 173 * 1e6,
      },
    },
  },
};
