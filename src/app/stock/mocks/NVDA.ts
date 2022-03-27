import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { PredicationAction } from '../models/predication.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const nvda: StockAnalysis = {
  marketCap: 532 * BILLION,
  competitors: ['amd', 'amzn', 'tsla'],

  predications: [
    {
      price: 150,
      days: 90,
      start: new Date('2022-01-18'),
      action: PredicationAction.Sell,
    },
  ],

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 8.1 * 1e9,
      operatingIncome: 2970 * 1e6,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 7.64 * 1e9,
      operatingIncome: 2970 * 1e6,
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001045810/0ec16816-55e2-4812-8f77-75cab5909247.pdf',
      pressReleaseLink:
        'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2022',
      notes: [
        { content: 'Gaming: 3.42B +37%' },
        { content: 'Professional Visualization: 3.26B +71%' },
        { content: 'Virtual: 643M +109%' },
        { content: 'Automotive and Robotics: 125M -14%' },
      ],
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 7103 * 1e6,
      operatingIncome: 2671 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 6507 * 1e6,
      operatingIncome: 2444 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 5661 * 1e6,
      operatingIncome: 1956 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 5003 * 1e6,
      operatingIncome: 1507 * 1e6,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 4726 * 1e6,
      operatingIncome: 1398 * 1e6,
    },
  ],

  risks: [
    {
      type: FactType.growth,
      level: RiskLevel.low,
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
      level: RiskLevel.medium,
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
  ],

  logo: '',
  name: 'Nvidia',
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
      { type: MarketType.datacenter },
      { type: MarketType.gaming },
      { type: MarketType.virtualSpace },
      { type: MarketType.autoRobotics },
    ],
    revenues: [
      { name: '', type: RevenueType.hardwareSelling },
      { name: '', type: RevenueType.softwareSelling },
      { name: '', type: RevenueType.b2b },
    ],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.tool },
      { type: StrategyType.technology },
    ],
  },
  ticker: 'nvda',
  irAddress: 'https://investor.nvidia.com/home/default.aspx',
  secFilings:
    'https://investor.nvidia.com/financial-info/sec-filings/default.aspx',
};
