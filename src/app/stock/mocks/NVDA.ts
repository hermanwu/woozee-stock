import { IndustryType } from 'src/app/facts/data/area.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from 'src/app/risks/models/risk-level.model';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const nvdaRisks = [
  {
    type: FactType.growth,
    level: Term.short,
    name: 'Automotive and Robotic business slows down',
    notes: [
      {
        content:
          'Fourth-quarter Automotive revenue was $125 million, down 14 percent from a year ago and down 7 percent from the previous quarter. Fiscal-year revenue rose 6 percent to $566 million.',
      },
    ],
  },
  {
    type: FactType.valuation,
    level: Term.short,
    name: 'P/S and P/E are relatively high',
    notes: [
      {
        content:
          'Revenue growth will slow down and operating margin does not have much space to grow.',
      },
      {
        content: 'More than double of some of its competitors (AMD) ',
      },
      {
        content: 'Even 200 dollars is a reasonable price in short term',
      },
    ],
  },
];

export const nvda: StockAnalysis = {
  marketCap: 461 * BILLION,

  // predications: [
  //   {
  //     price: 150,
  //     days: 90,
  //     start: new Date('2023-01-18'),
  //     action: PredicationAction.Sell,
  //   },
  // ],

  earningsReports: [
    {
      year: 2023,
      quarter: 2,
      totalRevenue: 6.704 * BILLION,
      grossProfit: 2.915 * BILLION,
      operatingIncome: 499 * MILLION,
      netIncome: 656 * MILLION,
      forecastRevenueTop: 5.9 * BILLION,
      forecastRevenueBottom: 5.9 * BILLION,
      date: convertDateToUTC(new Date('2022-08-24')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2023',
        },
      ],
    },
    {
      year: 2023,
      quarter: 1,
      totalRevenue: 8.288 * BILLION,
      costOfRevenue: 2.857 * BILLION,
      totalOperatingExpense: 3.563 * BILLION,
      operatingIncome: 1.868 * BILLION,
      netIncome: 1.618 * BILLION,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001045810/8b8d4537-83d8-4c94-b065-e7a2cd34da49.pdf',
    },
    {
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001045810/0ec16816-55e2-4812-8f77-75cab5909247.pdf',
      pressReleaseLink:
        'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2023',
      notes: [
        { content: 'Gaming: 3.42B +37%' },
        { content: 'Professional Visualization: 3.26B +71%' },
        { content: 'Virtual: 643M +109%' },
        { content: 'Automotive and Robotics: 125M -14%' },
      ],
      year: 2022,
      quarter: 4,
      totalRevenue: 7643 * MILLION,
      costOfRevenue: 2644 * MILLION,
      grossProfit: 4999 * MILLION,
      sellingGeneralAndAdministrative: 563 * MILLION,
      researchAndDevelopment: 1466 * MILLION,
      totalOperatingExpense: 4673 * MILLION,
      operatingIncome: 2970 * MILLION,
      interestIncomeNet: -130 * MILLION,
      otherIncomeNet: 25 * MILLION,
      netIncomeBeforeTaxes: 2865 * MILLION,
      provisionForIncomeTaxes: -138 * MILLION,
      netIncome: 3003 * MILLION,
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 7103 * MILLION,
      costOfRevenue: 2472 * MILLION,
      grossProfit: 4631 * MILLION,
      sellingGeneralAndAdministrative: 557 * MILLION,
      researchAndDevelopment: 1403 * MILLION,
      totalOperatingExpense: 4432 * MILLION,
      operatingIncome: 2671 * MILLION,
      interestIncomeNet: -47 * MILLION,
      otherIncomeNet: 14 * MILLION,
      netIncomeBeforeTaxes: 2638 * MILLION,
      provisionForIncomeTaxes: 174 * MILLION,
      netIncome: 2464 * MILLION,
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 6507 * MILLION,
      costOfRevenue: 2292 * MILLION,
      grossProfit: 4215 * MILLION,
      sellingGeneralAndAdministrative: 526 * MILLION,
      researchAndDevelopment: 1245 * MILLION,
      totalOperatingExpense: 4063 * MILLION,
      operatingIncome: 2444 * MILLION,
      interestIncomeNet: -60 * MILLION,
      otherIncomeNet: 10 * MILLION,
      netIncomeBeforeTaxes: 2394 * MILLION,
      provisionForIncomeTaxes: 20 * MILLION,
      netIncome: 2374 * MILLION,
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 5661 * MILLION,
      costOfRevenue: 2032 * MILLION,
      grossProfit: 3629 * MILLION,
      sellingGeneralAndAdministrative: 520 * MILLION,
      researchAndDevelopment: 1153 * MILLION,
      totalOperatingExpense: 3705 * MILLION,
      operatingIncome: 1956 * MILLION,
      interestIncomeNet: 77 * MILLION,
      otherIncomeNet: 11 * MILLION,
      netIncomeBeforeTaxes: 2044 * MILLION,
      provisionForIncomeTaxes: 132 * MILLION,
      netIncome: 1912 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 5003 * MILLION,
      costOfRevenue: 1847 * MILLION,
      grossProfit: 3156 * MILLION,
      sellingGeneralAndAdministrative: 503 * MILLION,
      researchAndDevelopment: 1146 * MILLION,
      totalOperatingExpense: 3496 * MILLION,
      operatingIncome: 1507 * MILLION,
      interestIncomeNet: -46 * MILLION,
      otherIncomeNet: 9 * MILLION,
      netIncomeBeforeTaxes: 1470 * MILLION,
      provisionForIncomeTaxes: 13 * MILLION,
      netIncome: 1457 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 4726 * MILLION,
      costOfRevenue: 1766 * MILLION,
      grossProfit: 2960 * MILLION,
      sellingGeneralAndAdministrative: 515 * MILLION,
      researchAndDevelopment: 1047 * MILLION,
      totalOperatingExpense: 3328 * MILLION,
      operatingIncome: 1398 * MILLION,
      interestIncomeNet: -46 * MILLION,
      otherIncomeNet: -4 * MILLION,
      netIncomeBeforeTaxes: 1348 * MILLION,
      provisionForIncomeTaxes: 12 * MILLION,
      netIncome: 1336 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 3866 * MILLION,
      costOfRevenue: 1591 * MILLION,
      grossProfit: 2275 * MILLION,
      sellingGeneralAndAdministrative: 627 * MILLION,
      researchAndDevelopment: 997 * MILLION,
      totalOperatingExpense: 3215 * MILLION,
      operatingIncome: 651 * MILLION,
      interestIncomeNet: -41 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 609 * MILLION,
      provisionForIncomeTaxes: -13 * MILLION,
      netIncome: 622 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 3080 * MILLION,
      costOfRevenue: 1076 * MILLION,
      grossProfit: 2004 * MILLION,
      sellingGeneralAndAdministrative: 293 * MILLION,
      researchAndDevelopment: 735 * MILLION,
      totalOperatingExpense: 2104 * MILLION,
      operatingIncome: 976 * MILLION,
      interestIncomeNet: 6 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 981 * MILLION,
      provisionForIncomeTaxes: 64 * MILLION,
      netIncome: 917 * MILLION,
    },
  ],

  logo: '',
  name: 'Nvidia',
  shortName: 'Nvidia',
  description: [
    {
      content: 'competitors',
      notes: [
        {
          content:
            'suppliers and licensors designing discrete and integrated GPUs and other accelerated computing solutions, including chipsets that incorporate 3D graphics, or HPC, such as Advanced Micro Devices, or AMD, Intel Corporation, and Xilinx, Inc.;',
        },
        {
          content:
            'large internet services companies with internal teams designing chips that incorporates HPC or accelerated computing functionality as part of their internal solutions or platforms, such as Alphabet Inc. and Amazon, Inc.;',
        },
        {
          content:
            'suppliers of SoC products that are embedded into automobiles, autonomous machines, and gaming devices, such as Ambarella, Inc., AMD, Broadcom Inc., Intel, Qualcomm Incorporated, Renesas Electronics Corporation, Samsung, and Xilinx or companies with internal teams designing SoC products for internal use, such as Tesla Motors;',
        },
        {
          content:
            'suppliers of interconnect, switch and cable solutions such as Applied Optoelectronics, Inc., Arista Networks, Broadcom, Cisco Systems, Inc., Hewlett Packard Enterprise Company, Intel, Juniper Networks, Inc., Lumentum Holdings, Marvell Technology Group, and Xilinx, as well as internal teams of system vendors and large internet services companies such as Alphabet and Amazon.',
        },
      ],
    },
  ],
  business: {
    markets: [
      IndustryType.cloudService,
      IndustryType.gaming,
      IndustryType.virtualSpace,
      IndustryType.autoRobotics,
      IndustryType.semi,
    ],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.tool },
      { type: StrategyType.technology },
    ],
    revenues: [
      {
        name: 'Data Center',
        size: 3.75 * BILLION,
        type: IndustryType.datacenter,
        growthRate: 0.83,
      },
      {
        name: 'Gaming',
        size: 3.62 * BILLION,
        type: IndustryType.gaming,
        growthRate: 0.31,
      },
      {
        name: 'Professional Visualization',
        size: 622 * MILLION,
        type: IndustryType.virtualRendering,
        growthRate: 0.67,
      },
    ],
  },
  ticker: 'nvda',
  irAddress: 'https://investor.nvidia.com/home/default.aspx',
  secFilings:
    'https://investor.nvidia.com/financial-info/sec-filings/default.aspx',
};
