import {
  Stats,
  TimeFrame,
  UnitType,
} from '../shared/components/stats-display/stats-display.interface';
import { getUtcDate } from '../shared/functions/getUtcDate.function';
import { BILLION, MILLION } from '../shared/numbers/number.model';
import { EarningsKeyWord } from './earnings-key-word.enum';

export const opinionKeyWord = [
  'profitability',
  'growth',
  'valuation',
  'financial',
  'health',
  'management',
  'safety',
  'dividend',
];
export const factKeyWord = ['Robotics', 'Surgery'];

export const getEarningsByTargetUuid = (targetUuid: string) => {
  return earnings.filter((item) => item.targetUuids?.includes(targetUuid));
};

export class Earnings {
  releasedDate?: Date;
  revenue?: Stats;
  pressReleaseLink?: string;
  presentationLink?: string;
  financialTableLink?: string;
  tenQ?: string;
  operatingExpenses?: Stats;
  netIncome?: Stats;
  data?: Stats[];
  quotes?: any[];
  targetUuids?: string[];
  documents?: any[];
  imageLinks?: string[];
  beforeMarketOpen?: boolean;
}

export const earnings: Earnings[] = [
  {
    targetUuids: ['futu:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.futuholdings.com/static-files/06d41e31-70e9-4629-9665-672f3babdab9',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.280719 * BILLION,
        previousValue: 2.373262 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.hk,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.938549 * BILLION,
        previousValue: 1.939773 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.hk,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.120663 * BILLION,
        previousValue: 1.023783 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.hk,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 0.958725 * BILLION,
        previousValue: 0.876386 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['smar:nyse'],
    releasedDate: getUtcDate(2023, 12, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.smartsheet.com/news/news-details/2023/Smartsheet-Inc.-Announces-Third-Quarter-Fiscal-Year-2024-Results/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 245.918 * MILLION,
        previousValue: 199.577 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 198.88 * MILLION,
        previousValue: 156.714 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -35.45 * MILLION,
        previousValue: -42.557 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -32.428 * MILLION,
        previousValue: -40.137 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['pd:nyse'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.pagerduty.com/news/news-details/2023/PagerDuty-Announces-Third-Quarter-Fiscal-2024-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 108.72 * MILLION,
        previousValue: 94.203 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 89.015 * MILLION,
        previousValue: 76.196 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -20.842 * MILLION,
        previousValue: -32.542 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -13.09 * MILLION,
        previousValue: -32.804 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['ulta:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.ulta.com/investor/news-events/press-releases/detail/176/ulta-beauty-announces-third-quarter-fiscal-2023-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.488933 * BILLION,
        previousValue: 2.338793 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 992.067 * MILLION,
        previousValue: 962.817 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 327.227 * MILLION,
        previousValue: 361.856 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 249.483 * MILLION,
        previousValue: 274.585 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['adbe:nasdaq'],
    releasedDate: getUtcDate(2023, 12, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.adobe.com/pdf-page.html?pdfTarget=aHR0cHM6Ly93d3cuYWRvYmUuY29tL2NvbnRlbnQvZGFtL2NjL2VuL2ludmVzdG9yLXJlbGF0aW9ucy9wZGZzLzMxMjEzMjAyL2E1Nnk1dHJndy5wZGY=',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 5.048 * BILLION,
        previousValue: 4.525 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 4.414 * BILLION,
        previousValue: 3.957 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.743 * BILLION,
        previousValue: 1.505 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.483 * BILLION,
        previousValue: 1.176 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['adbe:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.adobe.com/pdf-page.html?pdfTarget=aHR0cHM6Ly93d3cuYWRvYmUuY29tL2NvbnRlbnQvZGFtL2NjL2VuL2ludmVzdG9yLXJlbGF0aW9ucy9wZGZzLzQxMzA0MjAyL2E0dzVlcmdmajU0LnBkZg==',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 5.182 * BILLION,
        previousValue: 4.655 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 4.592 * BILLION,
        previousValue: 4.087 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 0.907 * BILLION,
        previousValue: 1.586 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 0.62 * BILLION,
        previousValue: 1.247 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['len:nyse'],
    releasedDate: getUtcDate(2024, 3, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.lennar.com/press-releases/2024/03-13-2024-203048583',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 7.31293 * BILLION,
        previousValue: 6.490429 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.netIncome,
        value: 719.334 * MILLION,
        previousValue: 596.534 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['s:nyse'],
    releasedDate: getUtcDate(2024, 3, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.sentinelone.com/press-releases/news-details/2024/SentinelOne-Announces-Fourth-Quarter-Fiscal-Year-2024-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenueGuidance,
        value: 181 * MILLION,
        previousValue: 133.39 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenue,
        value: 174.175 * MILLION,
        previousValue: 126.096 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 125.909 * MILLION,
        previousValue: 86.325 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -81.214 * MILLION,
        previousValue: -100.03 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -71.982 * MILLION,
        previousValue: -93.68 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['path:nyse'],
    releasedDate: getUtcDate(2024, 3, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.uipath.com/news/detail/330/uipath-reports-fourth-quarter-and-full-year-fiscal-2024-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 405.253 * MILLION,
        previousValue: 308.549 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 351.903 * MILLION,
        previousValue: 260.858 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 15.095 * MILLION,
        previousValue: -45.147 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 33.916 * MILLION,
        previousValue: -27.689 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['beke:nyse'],
    releasedDate: getUtcDate(2023, 11, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.ke.com/system/files-encrypted/nasdaq_kms/assets/2023/11/08/3-45-05/KE%20Holdings%20Inc.%20Announces%20Third%20Quarter%202023%20Unaudited%20Financial%20Results.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 17.596582 * BILLION,
        previousValue: 17.810705 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 4.759597 * BILLION,
        previousValue: 4.88098 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 0.716148 * BILLION,
        previousValue: 1.17029 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
  },
  {
    targetUuids: ['futu:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 23),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.futuholdings.com/static-files/06d41e31-70e9-4629-9665-672f3babdab9',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.650415 * BILLION,
        previousValue: 1.94558 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.hk,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 2.213018 * BILLION,
        previousValue: 1.727465 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.hk,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.320164 * BILLION,
        previousValue: 0.966299 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.hk,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.091157 * BILLION,
        previousValue: 0.754643 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dks:nyse'],
    releasedDate: getUtcDate(2023, 11, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s27.q4cdn.com/812551136/files/doc_financials/2023/q3/DKS-2023-10-28-Ex-99-1-Earnings-Release-vF.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.042405 * BILLION,
        previousValue: 2.958861 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.061463 * BILLION,
        previousValue: 1.012423 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 272.944 * MILLION,
        previousValue: 325.464 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 201.106 * MILLION,
        previousValue: 228.456 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dks:nyse'],
    releasedDate: getUtcDate(2024, 2, 3),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s27.q4cdn.com/812551136/files/doc_financials/2023/q4/DKS-2024-02-03-Ex-99-1-Earnings-Release-vF.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.876 * BILLION,
        previousValue: 3.597 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.334179 * BILLION,
        previousValue: 1.166039 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 372.038 * MILLION,
        previousValue: 310.856 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 296.433 * MILLION,
        previousValue: 235.621 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dg:nyse'],
    releasedDate: getUtcDate(2023, 12, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.dollargeneral.com/websites/dollargeneral/English/2120/us-press-release.html?airportNewsID=6e45bcfc-f067-4bdb-8d4b-bda9534b04c9',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 9.694082 * BILLION,
        previousValue: 9.464891 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 2.812528 * BILLION,
        previousValue: 2.885195 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 433.474 * MILLION,
        previousValue: 735.545 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 276.246 * MILLION,
        previousValue: 526.167 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['vrm:nyse'],
    releasedDate: getUtcDate(2023, 11, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.vroom.com/news-releases/news-release-details/vroom-announces-third-quarter-2023-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 235.634 * MILLION,
        previousValue: 340.797 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 48.094 * MILLION,
        previousValue: 67.331 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -42.502 * MILLION,
        previousValue: -78.162 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -82.857 * MILLION,
        previousValue: -51.127 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['len:nyse'],
    releasedDate: getUtcDate(2023, 12, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.lennar.com/~/media/Files/L/Lennar-IR-V3/press-release/lennar-reports-fourth-quarter-and-fiscal-2023-results.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 10.968183 * BILLION,
        previousValue: 10.174367 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.361287 * BILLION,
        previousValue: 1.322444 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['s:nyse'],
    releasedDate: getUtcDate(2023, 12, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s28.q4cdn.com/399982429/files/doc_earnings/2024/q3/earnings-result/Q3-FY24-Earnings-Press-Release-FINAL-SentinelOne.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 164.165 * MILLION,
        previousValue: 115.323 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 120.4 * MILLION,
        previousValue: 74.317 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -81.468 * MILLION,
        previousValue: -104.058 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -70.304 * MILLION,
        previousValue: -98.858 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['path:nyse'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.uipath.com/news/detail/320/uipath-reports-third-quarter-fiscal-2024-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 325.921 * MILLION,
        previousValue: 262.744 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 276.001 * MILLION,
        previousValue: 219.976 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -55.819 * MILLION,
        previousValue: -66.991 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -31.537 * MILLION,
        previousValue: -57.724 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['wsm:nyse'],
    releasedDate: getUtcDate(2024, 3, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.williams-sonomainc.com/investor-information/news-releases/news-release-details/2024/Williams-Sonoma-Inc.-announces-fourth-quarter-and-fiscal-year-2023-results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.278937 * BILLION,
        previousValue: 2.453079 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.048615 * BILLION,
        previousValue: 1.00985 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 458.091 * MILLION,
        previousValue: 469.787 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 354.439 * MILLION,
        previousValue: 354.993 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['woof:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.petco.com/news-releases/news-release-details/petco-health-wellness-company-inc-reports-fourth-quarter-and-0',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.674476 * BILLION,
        previousValue: 1.577959 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 606.348 * MILLION,
        previousValue: 627.279 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 0.166 * MILLION,
        previousValue: 77.56 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -22.575 * MILLION,
        previousValue: 32.732 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        contents:
          'R. Michael Mohan, Previously Lead Independent Director, Appointed Interim CEO; Ron Coughlin stepped down as CEO, Chairman and member of the Board of Directors',
      },
    ],
  },
  {
    targetUuids: ['dltr:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://corporate.dollartree.com/news-media/press-releases/detail/264/dollar-tree-inc-reports-results-for-the-fourth-quarter',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 8.6399 * BILLION,
        previousValue: 7.7207 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -1891 * MILLION,
        previousValue: 618.1 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -1709.8 * MILLION,
        previousValue: 452.2 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        contents:
          'Portfolio Optimization Review Identifies Approximately 600 Family Dollar Stores for Closure in First Half of Fiscal 2024 and Approximately 370 Additional Stores as Their Leases Expire.',
      },
    ],
  },
  {
    targetUuids: ['onon:nyse'],
    releasedDate: getUtcDate(2024, 3, 12),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s28.q4cdn.com/811960755/files/doc_financials/2023/q4/2024-03-12-On-presents-Q4-Full-Year-Results-2023_vf.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 447.1 * MILLION,
        changeRate: 0.219,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.chf,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -26.8 * MILLION,
        previousValue: -26.4 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['woof:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.petco.com/static-files/cb2e264e-9bf8-4ea2-bd5a-a61488ef1a8e',
      },
    ],
  },
  {
    targetUuids: ['dltr:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://corporate.dollartree.com/investors/news-events/press-releases/detail/257/dollar-tree-inc-reports-results-for-the-third-quarter',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 7.3148 * BILLION,
        previousValue: 6.9399 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 301.7 * MILLION,
        previousValue: 381.3 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 212.0 * MILLION,
        previousValue: 266.9 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['wsm:nyse'],
    releasedDate: getUtcDate(2023, 11, 16),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.williams-sonomainc.com/investor-information/news-releases/news-release-details/2023/Williams-Sonoma-Inc.-announces-third-quarter-2023-results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.85365 * BILLION,
        previousValue: 2.192574 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 822.36 * MILLION,
        previousValue: 910.526 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 315.077 * MILLION,
        previousValue: 339.633 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 237.285 * MILLION,
        previousValue: 251.723 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['casy:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 11),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.caseys.com/press-releases/press-release-details/2024/Caseys-Announces-Third-Quarter-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.329247 * BILLION,
        previousValue: 3.332555 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 86.933 * MILLION,
        previousValue: 100.112 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['asan:nyse'],
    releasedDate: getUtcDate(2024, 3, 11),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.asana.com/news-releases/news-release-details/asana-announces-fourth-quarter-and-fiscal-year-2024-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 171.135 * MILLION,
        previousValue: 150.231 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 153.743 * MILLION,
        previousValue: 135.026 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -67.948 * MILLION,
        previousValue: -99.214 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -62.398 * MILLION,
        previousValue: -95.026 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['orcl:nyse'],
    releasedDate: getUtcDate(2024, 3, 11),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.oracle.com/investor-news/news-details/2024/Oracle-Announces-Fiscal-2024-Third-Quarter-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 13.28 * BILLION,
        previousValue: 12.398 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 3.75 * BILLION,
        previousValue: 3.26 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 2.401 * BILLION,
        previousValue: 1.896 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['onon:nyse'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s28.q4cdn.com/811960755/files/doc_financials/2023/Q3/2023-11-14-On-presents-Q3-Results-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 480.5 * MILLION,
        previousValue: 328.0 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 287.7 * MILLION,
        previousValue: 187.4 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 57.8 * MILLION,
        previousValue: 40.7 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 58.7 * MILLION,
        previousValue: 20.6 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['asan:nyse'],
    releasedDate: getUtcDate(2023, 12, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.asana.com/news-releases/news-release-details/asana-announces-third-quarter-fiscal-2024-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 166.503 * MILLION,
        previousValue: 141.439 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -63.421 * MILLION,
        previousValue: -101.108 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -61.75 * MILLION,
        previousValue: -100.905 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['orcl:nyse'],
    releasedDate: getUtcDate(2023, 12, 11),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s23.q4cdn.com/440135859/files/doc_financials/2024/Q2/2q24-pressrelease-December-final.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 12.941 * BILLION,
        previousValue: 12.275 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 3.622 * BILLION,
        previousValue: 3.071 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 2.503 * BILLION,
        previousValue: 1.741 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['gps:nyse'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://gapinc-prod.azureedge.net/gapmedia/gapcorporatesite/media/images/investors/gap-inc-q4-2023-earnings-press-release_1.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 4.298 * BILLION,
        previousValue: 4.243 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.672 * BILLION,
        previousValue: 1.424 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 214 * MILLION,
        previousValue: -30 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 185 * MILLION,
        previousValue: -273 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['docu:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.docusign.com/investors/press-releases/press-release-details/2024/DocuSign-Announces-Fourth-Quarter-and-Fiscal-Year-2024-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 712.386 * MILLION,
        previousValue: 659.576 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 564.479 * MILLION,
        previousValue: 522.15 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 9.935 * MILLION,
        previousValue: -0.284 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 27.241 * MILLION,
        previousValue: 4.863 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['mrvl:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.marvell.com/2024-03-07-Marvell-Technology,-Inc-Reports-Fourth-Quarter-and-Fiscal-Year-2024-Financial-Results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.4265 * BILLION,
        previousValue: 1.4185 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 0.6641 * BILLION,
        previousValue: 0.6733 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -0.0333 * BILLION,
        previousValue: 0.0233 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -0.3927 * BILLION,
        previousValue: 0.0154 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['avgo:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Quarterly Report',
        link: 'https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-first-quarter-fiscal-year-2024-financial',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 11.961 * BILLION,
        previousValue: 8.915 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 7.375 * BILLION,
        previousValue: 6.004 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 2.083 * BILLION,
        previousValue: 4.103 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.325 * BILLION,
        previousValue: 3.774 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['cost:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Quarterly Report',
        link: 'https://investor.costco.com/news/news-details/2024/Costco-Wholesale-Corporation-Reports-Second-Quarter-and-Year-to-Date-Operating-Results-for-Fiscal-2024-and-February-Sales-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 58.442 * BILLION,
        previousValue: 55.266 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 2.062 * BILLION,
        previousValue: 1.903 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.743 * BILLION,
        previousValue: 1.466 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['gps:nyse'],
    releasedDate: getUtcDate(2023, 11, 23),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s24.q4cdn.com/508879282/files/doc_financials/2023/q3/Gap-Inc-Q3-2023-Earnings-Press-Release.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.767 * BILLION,
        previousValue: 4.039 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.556 * BILLION,
        previousValue: 1.509 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 250 * MILLION,
        previousValue: 186 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 218 * MILLION,
        previousValue: 282 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['mrvl:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.marvell.com/2023-11-30-Marvell-Technology,-Inc-Reports-Third-Quarter-of-Fiscal-Year-2024-Financial-Results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.4186 * BILLION,
        previousValue: 1.5373 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 0.5512 * BILLION,
        previousValue: 0.7773 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -0.1463 * BILLION,
        previousValue: 0.1058 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -0.1643 * BILLION,
        previousValue: 0.0133 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['bili:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.bilibili.com/media/2waor3vm/bilibili-inc-announces-fourth-quarter-and-fiscal-year-2023-financial-results.pdf',
      },
      {
        name: 'Presentation',
        link: 'https://ir.bilibili.com/media/wyzmy3es/q4-2023-bilibili-inc-investor-presentation.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 6.349096 * BILLION,
        previousValue: 6.142486 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.659982 * BILLION,
        previousValue: 1.249553 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -1.30467 * BILLION,
        previousValue: -2.327202 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -1.29669 * BILLION,
        previousValue: -1.497036 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
  },
  {
    targetUuids: ['avgo:nasdaq'],
    releasedDate: getUtcDate(2023, 12, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2023',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 9.295 * BILLION,
        previousValue: 8.93 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 6.407 * BILLION,
        previousValue: 6.164 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 4.24 * BILLION,
        previousValue: 3.856 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 3.524 * BILLION,
        previousValue: 3.303 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['cost:nasdaq'],
    releasedDate: getUtcDate(2023, 12, 20),
    documents: [
      {
        name: 'Quarterly Report',
        link: 'https://d18rn0p25nwr6d.cloudfront.net/CIK-0000909832/f5a09f35-424d-4b54-8b68-0a6fcdaaa253.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 57.799 * BILLION,
        previousValue: 54.437 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 57.799 * BILLION - 50.457 * BILLION,
        previousValue: 54.437 * BILLION - 47.769 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.984 * BILLION,
        previousValue: 1.751 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.589 * BILLION,
        previousValue: 1.364 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['mdb:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-fourth-quarter-and-full-year-fiscal-2024',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 458.002 * MILLION,
        previousValue: 361.312 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 343.361 * MILLION,
        previousValue: 272.152 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -70.966 * MILLION,
        previousValue: -72.949 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -55.46 * MILLION,
        previousValue: -64.398 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['mdb:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-third-quarter-fiscal-2024-financial',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 432.938 * MILLION,
        previousValue: 333.621 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 325.88 * MILLION,
        previousValue: 239.969 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -45.216 * MILLION,
        previousValue: -82.923 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -29.297 * MILLION,
        previousValue: -84.841 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['kr:nyse'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.kroger.com/files/doc_financials/2023/q3/FINAL-v2-KR-Q3-2023-Earnings-Release-to-print.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 33.957 * BILLION,
        previousValue: 34.198 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.operatingIncome,
        value: 912 * MILLION,
        previousValue: 841 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 646 * MILLION,
        previousValue: 398 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['aeo:nyse'],
    releasedDate: getUtcDate(2023, 11, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.ae.com/press-releases/news-details/2023/AEO-Inc.-Reports-Record-Third-Quarter-Revenue-and-Strong-Operating-Profit-Updated-Annual-Outlook-Reflects-Improved-Demand-and-Profit-Improvement-Initiatives/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.301055 * BILLION,
        previousValue: 1.240583 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 543.797 * MILLION,
        previousValue: 479.773 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 191 * MILLION,
        previousValue: 119 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 125.361 * MILLION,
        previousValue: 117.548 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 96.7 * MILLION,
        previousValue: 81.272 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['bili:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.bilibili.com/media/xm2pyf2s/bilibili-inc-announces-third-quarter-2023-financial-results.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        previousValue: 5.793651 * BILLION,
        value: 5.805081 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.450417 * BILLION,
        previousValue: 1.054216 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -1.107173 * BILLION,
        previousValue: -1.848868 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -1.337246 * BILLION,
        previousValue: -1.71604 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
  },
  {
    targetUuids: ['fl:nyse'],
    releasedDate: getUtcDate(2024, 3, 6),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.footlocker-inc.com/news-releases/news-release-details/foot-locker-inc-reports-fourth-quarter-2023-results-issues-2024',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.384 * BILLION,
        previousValue: 2.337 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 33 * MILLION,
        previousValue: 59 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -389 * MILLION,
        previousValue: 19 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['anf:nyse'],
    releasedDate: getUtcDate(2024, 3, 6),
    documents: [
      {
        name: 'Press Release',
        link: 'https://abercrombieandfitchcompany.gcs-web.com/static-files/01ad956f-a2e3-4a3e-b20f-d619d220e621',
      },
      {
        name: 'Earnings Financial',
        link: 'https://abercrombieandfitchcompany.gcs-web.com/static-files/34f8ba12-490f-44c9-b2be-9eb3ebf7bdd5',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.452907 * BILLION,
        previousValue: 1.199814 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 0.913569 * BILLION,
        previousValue: 0.668285 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 222.801 * MILLION,
        previousValue: 87.022 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 161.103 * MILLION,
        previousValue: 40.691 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['tme:nyse'],
    releasedDate: getUtcDate(2024, 3, 6),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.tencentmusic.com/2023-11-14-Tencent-Music-Entertainment-Group-Announces-Third-Quarter-2023-Unaudited-Financial-Results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 6.569 * BILLION,
        previousValue: 7.365 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 2.342 * BILLION,
        previousValue: 2.403 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.425 * BILLION,
        previousValue: 1.245 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.263 * BILLION,
        previousValue: 1.093 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
  },
  {
    targetUuids: ['avav:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 4),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.avinc.com/news-releases/news-release-details/aerovironment-announces-fiscal-2024-third-quarter-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 186.578 * MILLION,
        previousValue: 134.395 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 119.291 * MILLION,
        previousValue: 88.885 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 14.334 * MILLION,
        previousValue: 4.607 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 13.885 * MILLION,
        previousValue: -0.676 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          'With the increased global demand for our solutions, strong backlog and growing pipeline, AeroVironment remains well positioned for continued growth. ',
      },
    ],
  },
  {
    targetUuids: ['gtlb:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 4),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.gitlab.com/news-releases/news-release-details/gitlab-reports-fourth-quarter-and-full-year-2024-financial',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 163.779 * MILLION,
        previousValue: 122.907 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 147.79 * MILLION,
        previousValue: 108.669 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -34.883 * MILLION,
        previousValue: -46.274 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -37.571 * MILLION,
        previousValue: -42.121 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          'By integrating AI throughout the software development lifecycle, our DevSecOps platform allows our customers to plan, build, manage, and deliver software more efficiently, ultimately scaling the impact their software investments have on business outcomes. We believe this puts us in a strong position to continue to win the large market opportunity in front of us.',
      },
    ],
  },
  {
    targetUuids: ['gtlb:nasdaq'],
    releasedDate: getUtcDate(2023, 12, 4),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.gitlab.com/news-releases/news-release-details/gitlab-reports-third-quarter-fiscal-year-2024-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 149.7 * MILLION,
        previousValue: 113.0 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 134.584 * MILLION,
        previousValue: 98.417 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -40.267 * MILLION,
        previousValue: -56.962 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -286.355 * MILLION,
        previousValue: -50.465 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['fubo:nyse'],
    releasedDate: getUtcDate(2024, 3, 1),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s21.q4cdn.com/819998841/files/doc_financials/2023/q4/Q4_FY-2023-SHL-Letter-FINAL-docx.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 410.181 * MILLION,
        previousValue: 319.315 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -72.093 * MILLION,
        previousValue: -93.901 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -70.527 * MILLION,
        previousValue: -151.981 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['adsk:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.autodesk.com/news-releases/news-release-details/autodesk-inc-announces-fiscal-2024-fourth-quarter-and-full-year',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.469 * BILLION,
        previousValue: 1.318 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.339 * BILLION,
        previousValue: 1.194 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 315 * MILLION,
        previousValue: 277 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 282 * MILLION,
        previousValue: 293 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['estc:nyse'],
    releasedDate: getUtcDate(2024, 2, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.elastic.co/news/news-details/2024/Elastic-Reports-Third-Quarter-Fiscal-2024-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 327.957 * MILLION,
        previousValue: 274.566 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 243.315 * MILLION,
        previousValue: 199.358 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -26.404 * MILLION,
        previousValue: -69.347 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 176.124 * MILLION,
        previousValue: -72.574 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['zs:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.zscaler.com/news-releases/news-release-details/zscaler-reports-second-quarter-fiscal-2024-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 524.999 * MILLION,
        previousValue: 387.598 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 407.8 * MILLION,
        previousValue: 299.994 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -45.457 * MILLION,
        previousValue: -65.238 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -28.469 * MILLION,
        previousValue: -57.453 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['adsk:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.autodesk.com/static-files/b8201417-8a0e-41dd-b9d2-7eba693e20d2',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.414 * BILLION,
        previousValue: 1.28 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.287 * BILLION,
        previousValue: 1.16 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 334 * MILLION,
        previousValue: 256 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 241 * MILLION,
        previousValue: 198 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['estc:nyse'],
    releasedDate: getUtcDate(2023, 11, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.elastic.co/news/news-details/2023/Elastic-Reports-Second-Quarter-Fiscal-2024-Financial-Results/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 310.612 * MILLION,
        previousValue: 264.401 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 230.523 * MILLION,
        previousValue: 189.644 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -21.539 * MILLION,
        previousValue: -49.028 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -24.796 * MILLION,
        previousValue: -47.305 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['zs:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 27),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.zscaler.com/news-releases/news-release-details/zscaler-reports-first-quarter-fiscal-2024-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 496.703 * MILLION,
        previousValue: 355.548 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 385.309 * MILLION,
        previousValue: 278.851 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -46.057 * MILLION,
        previousValue: -69.087 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -33.483 * MILLION,
        previousValue: -68.162 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['crm:nyse'],
    releasedDate: getUtcDate(2024, 2, 28),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s23.q4cdn.com/574569502/files/doc_financials/2024/q4/CRM-Q4-FY24-Earnings-Press-Release-w-financials.pdf',
      },
      {
        name: 'Presentation',
        link: 'https://s23.q4cdn.com/574569502/files/doc_financials/2024/q4/CRM-Q4-FY24-Earnings-Presentation.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 9.287 * BILLION,
        previousValue: 8.384 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 7.139 * BILLION,
        previousValue: 6.284 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.622 * BILLION,
        previousValue: 0.357 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.446 * BILLION,
        previousValue: -0.098 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO Marc Benioff',
        contents:
          'Our total remaining performance obligation ended the fourth quarter at $56.9 billion, an increase of 17% year-over-year. We’re also thrilled to initiate our first-ever Salesforce dividend and increase our share buyback plan by $10 billion',
      },
    ],
  },
  {
    targetUuids: ['duol:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 28),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://investors.duolingo.com/static-files/06cda5ae-c66f-4d99-82ec-da764ecb1034',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 150.985 * MILLION,
        previousValue: 103.824 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 110.414 * MILLION,
        previousValue: 76.054 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 4.795 * MILLION,
        previousValue: -18.152 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -12.117 * MILLION,
        previousValue: -13.93 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        contents:
          'Our user growth accelerated throughout the year, we achieved record bookings and revenue in both the fourth quarter and the full year, and we became significantly more profitable.',
      },
    ],
  },
  {
    targetUuids: ['okta:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 28),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.okta.com/news-releases/news-release-details/okta-announces-fourth-quarter-and-fiscal-year-2024-financial',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 605 * MILLION,
        previousValue: 510 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 460 * MILLION,
        previousValue: 371 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -83 * MILLION,
        previousValue: -157 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -44 * MILLION,
        previousValue: -153 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },

  {
    targetUuids: ['snow:nyse'],
    releasedDate: getUtcDate(2024, 2, 28),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.snowflake.com/news/news-details/2024/Snowflake-Reports-Financial-Results-for-the-Fourth-Quarter-and-Full-Year-of-Fiscal-2024/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 774.699 * MILLION,
        previousValue: 589.012 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 532.895 * MILLION,
        previousValue: 383.355 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -275.505 * MILLION,
        previousValue: -239.75 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -169.912 * MILLION,
        previousValue: -207.484 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['snow:nyse'],
    releasedDate: getUtcDate(2022, 10, 31),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.snowflake.com/news/news-details/2023/Snowflake-Reports-Financial-Results-for-the-Third-Quarter-of-Fiscal-2024/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 734.173 * MILLION,
        previousValue: 557.028 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 505.225 * MILLION,
        previousValue: 366.307 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -260.623 * MILLION,
        previousValue: -206.019 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -214.694 * MILLION,
        previousValue: -201.442 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['zm:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 26),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-fourth-quarter-and-fiscal-3',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.146457 * BILLION,
        previousValue: 1.117803 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Enterprise Revenue',
            value: 667.3 * MILLION,
            changeRate: 0.049,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 870.15 * MILLION,
        previousValue: 823.449 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 168.53 * MILLION,
        previousValue: -129.887 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 298.832 * MILLION,
        previousValue: -104.05 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        contents:
          'Drove robust profitability and grew free cash flow, up 24.1% year over year ',
      },
      {
        contents:
          'Authorization to repurchase up to $1.5 billion of Zoom’s Class A common stock',
      },
    ],
  },
  {
    targetUuids: ['wday:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 26),
    documents: [
      {
        name: 'Press Release',
        link: 'https://newsroom.workday.com/2024-02-26-Workday-Announces-Fiscal-2024-Fourth-Quarter-and-Full-Year-Financial-Results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.922 * BILLION,
        previousValue: 1.646 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 79 * MILLION,
        previousValue: -89 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1188 * MILLION,
        previousValue: -126 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        contents:
          'We are reiterating our fiscal year 2025 subscription revenue guidance of $7.725 billion to $7.775 billion, representing growth of 17% to 18%',
      },
    ],
  },
  {
    targetUuids: ['cvna:nyse'],
    releasedDate: getUtcDate(2022, 2, 22),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://investors.carvana.com/~/media/Files/C/Carvana-IR/documents/cvna-shareholder-letter-q4-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.424 * BILLION,
        previousValue: 2.837 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 402 * MILLION,
        previousValue: 193 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -200 * MILLION,
        previousValue: -1441 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['cvna:nyse'],
    releasedDate: getUtcDate(2023, 11, 6),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://investors.carvana.com/~/media/Files/C/Carvana-IR/documents/cvna-shareholder-letter-q3-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.773 * BILLION,
        previousValue: 3.386 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 482 * MILLION,
        previousValue: 359 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.netIncome,
        value: 741 * MILLION,
        previousValue: -508 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['meli:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 22),
    documents: [
      {
        name: 'Presentation',
        link: 'https://api.mziq.com/mzfilemanager/v2/d/098a2d95-0ea8-4ed5-a340-d9ef6a2b0053/cfa07c33-5d31-240d-c0b7-51cc6ab43fb8?origin=1',
      },
      {
        name: 'Shareholder Letter',
        link: 'https://api.mziq.com/mzfilemanager/v2/d/098a2d95-0ea8-4ed5-a340-d9ef6a2b0053/8184dc1a-6157-457e-3cb7-de614626b16c?origin=1',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 4.261 * BILLION,
        previousValue: 3.002 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.955 * BILLION,
        previousValue: 1.458 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 240 * MILLION,
        previousValue: 349 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 165 * MILLION,
        previousValue: 165 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['meli:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 1),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://api.mziq.com/mzfilemanager/v2/d/098a2d95-0ea8-4ed5-a340-d9ef6a2b0053/baf4c085-75f9-0119-2414-3b374db8f1f6?origin=1',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.76 * BILLION,
        previousValue: 2.69 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.995 * BILLION,
        previousValue: 1.348 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 685 * MILLION,
        previousValue: 296 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 359 * MILLION,
        previousValue: 129 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['sq:nyse'],
    releasedDate: getUtcDate(2024, 2, 22),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s29.q4cdn.com/628966176/files/doc_financials/2023/q4/Block_4Q23_Shareholder-Letter_Block.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 5.77 * BILLION,
        changeRate: 0.24,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 2.03 * BILLION,
        previousValue: 1.66 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -131 * MILLION,
        previousValue: -135 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 178 * MILLION,
        previousValue: -114 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          'We’ve done a lot recently to reduce our costs. Now we’re going to focus on growth.',
      },
    ],
  },
  {
    targetUuids: ['sq:nyse'],
    releasedDate: getUtcDate(2023, 11, 2),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s29.q4cdn.com/628966176/files/doc_financials/2023/q3/Block_3Q23_Shareholder-Letter.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 5.617493 * BILLION,
        previousValue: 4.515541 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.898449 * BILLION,
        previousValue: 1.567089 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -9.908 * MILLION,
        previousValue: -48.789 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -33.76 * MILLION,
        previousValue: -18.744 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['mrna:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 22),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s29.q4cdn.com/435878511/files/doc_earnings/2023/q4/earnings-result/Q4-23-PR_Final.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.811 * BILLION,
        previousValue: 5.084 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 6 * MILLION,
        previousValue: 1.58 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 217 * MILLION,
        previousValue: 1.465 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['u:nyse'],
    releasedDate: getUtcDate(2024, 2, 26),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s26.q4cdn.com/977690160/files/doc_earnings/2023/q4/generic/2023_Q4-Shareholder-Letter_FINAL.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 609268 * MILLION,
        previousValue: 450974 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 347686 * MILLION,
        previousValue: 311046 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -258960 * MILLION,
        previousValue: -273760 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -253985 * MILLION,
        previousValue: -287754 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          'We delivered revenue of $544 million, within our guidance range of $540 to $550 million. This represents a 69% year-over-year increase, or 8% growth on a pro-forma basis.',
      },
    ],
  },
  {
    targetUuids: ['u:nyse'],
    releasedDate: getUtcDate(2023, 11, 9),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s26.q4cdn.com/977690160/files/doc_earnings/2023/q3/generic/2023_Q3-Shareholder-Letter_FINAL.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 544.21 * MILLION,
        previousValue: 322.881 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 392.861 * MILLION,
        previousValue: 210.978 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -127.398 * MILLION,
        previousValue: -239.626 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -125.31 * MILLION,
        previousValue: -250.021 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          'We delivered revenue of $544 million, within our guidance range of $540 to $550 million. This represents a 69% year-over-year increase, or 8% growth on a pro-forma basis.',
      },
    ],
  },
  {
    targetUuids: ['intu:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 22),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.intuit.com/news/news-details/2024/Intuit-Reports-Strong-Second-Quarter-Results-and-Reiterates-Full-Year-Guidance/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.386 * BILLION,
        previousValue: 3.041 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 369 * MILLION,
        previousValue: 270 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 353 * MILLION,
        previousValue: 168 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          "We have great momentum innovating across our products, and we're well on our way to becoming the trusted assistant that our customers use to fuel their financial success.",
      },
    ],
  },
  {
    targetUuids: ['intu:nasdaq'],
    releasedDate: getUtcDate(2023, 10, 31),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.intuit.com/news/news-details/2023/Intuit-Reports-Strong-First-Quarter-Results-and-Reiterates-Full-Year-Guidance/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.978 * BILLION,
        previousValue: 2.597 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 307 * MILLION,
        previousValue: 76 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 241 * MILLION,
        previousValue: 40 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          "With data and AI core to our strategy, we're accelerating innovation across our global financial technology platform to power the prosperity of consumers and small businesses.",
      },
    ],
  },
  {
    targetUuids: ['aapl:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 1),
    documents: [
      {
        name: 'Financial Results',
        link: 'https://www.apple.com/newsroom/pdfs/fy2024-q1/FY24_Q1_Consolidated_Financial_Statements.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 119.575 * BILLION,
        previousValue: 117.154 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 54.855 * BILLION,
        previousValue: 50.332 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 40.373 * BILLION,
        previousValue: 36.016 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 33.916 * BILLION,
        previousValue: 29.998 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['etsy:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s22.q4cdn.com/941741262/files/doc_financials/2023/q4/Exhibit-99-1-Q4-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 842.322 * MILLION,
        previousValue: 807.241 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 586.565 * MILLION,
        previousValue: 581.466 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 115.458 * MILLION,
        previousValue: 139.344 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 83.266 * MILLION,
        previousValue: 109.548 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['rivn:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 21),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://assets.rivian.com/2md5qhoeajym/2Q0NcEACrvGFosLhpyR15H/bfe2aa72cb657c4cebb9f4a85e913f07/EX_-_99.2_4Q23_Shareholder_Letter_Final_Compressed.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.315 * BILLION,
        previousValue: 663 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: -606 * MILLION,
        previousValue: -1000 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -1.581 * BILLION,
        previousValue: -1.795 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -1.521 * BILLION,
        previousValue: -1.723,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['nvda:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 21),
    documents: [
      {
        name: 'CFO Commentary',
        link: 'https://investor.nvidia.com/files/doc_financials/2024/Q4FY24/Q4FY24-CFO-Commentary.pdf',
      },
      {
        name: 'Press Release',
        link: 'https://investor.nvidia.com/news/press-release-details/2024/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2024/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 22.103 * BILLION,
        previousValue: 6.051 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 16.791 * BILLION,
        previousValue: 3.833 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 13.615 * BILLION,
        previousValue: 1.257 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 12.285 * BILLION,
        previousValue: 1.414 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['etsy:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 1),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s22.q4cdn.com/941741262/files/doc_financials/2023/q3/Exhibit-99-1-Q3-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 636.302 * MILLION,
        previousValue: 594.469 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 447.475 * MILLION,
        previousValue: 420.068 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 88.556 * MILLION,
        previousValue: -954.78 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 87.85 * MILLION,
        previousValue: -963.068 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['crwd:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 28),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-third-quarter-fiscal-year-2024-financial',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 786.014 * MILLION,
        previousValue: 580.882 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 591.01 * MILLION,
        previousValue: 422.654 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 3.163 * MILLION,
        previousValue: -56.422 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 26.665 * MILLION,
        previousValue: -54.956 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['nvda:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2024',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 18.12 * BILLION,
        previousValue: 5.931 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 13.4 * BILLION,
        previousValue: 3.177 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 10.417 * BILLION,
        previousValue: 0.601 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 9.243 * BILLION,
        previousValue: 0.68 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['panw:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 20),
    documents: [
      {
        name: 'Presentation',
        link: 'https://investors.paloaltonetworks.com/static-files/ba0097e4-ce00-484a-a2d5-94bfc5b24759',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.9751 * BILLION,
        previousValue: 1.6551 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.476 * BILLION,
        previousValue: 1.1889 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 53.6 * MILLION,
        previousValue: 39.9 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1746.9 * MILLION,
        previousValue: 84.2 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['wmt:nyse'],
    releasedDate: getUtcDate(2024, 2, 20),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s201.q4cdn.com/262069030/files/doc_earnings/2024/q4/earnings-result/Earnings-Release-2024-Q4.pdf',
      },
      {
        name: 'Presentation',
        link: 'https://s201.q4cdn.com/262069030/files/doc_earnings/2024/q4/presentation/Earnings-Presentation-FY24-Q4.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 173.388 * BILLION,
        previousValue: 164.048 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 7.254 * BILLION,
        previousValue: 5.561 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 5.494 * BILLION,
        previousValue: 6.275 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        contents:
          'Looking ahead, the company issues guidance for FY25, including growth in net sales in constant currency of 3% to 4% and operating income of 4% to 6%.',
      },
    ],
  },
  {
    targetUuids: ['hd:nyse'],
    releasedDate: getUtcDate(2024, 2, 20),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.homedepot.com/news-releases/2024/02-20-2024-110037286',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 34.786 * BILLION,
        previousValue: 35.831 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 11.508 * BILLION,
        previousValue: 11.926 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 4.143 * BILLION,
        previousValue: 4.752 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 2.801 * BILLION,
        previousValue: 3.362 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['panw:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 15),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-reports-fiscal-first-quarter-2024-financial',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.8781 * BILLION,
        previousValue: 1.5634 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.4053 * BILLION,
        previousValue: 1.1015 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 215.2 * MILLION,
        previousValue: 15.2 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 194.2 * MILLION,
        previousValue: 20 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dash:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 15),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.doordash.com/news/news-details/2024/DoorDash-Releases-Fourth-Quarter-and-Full-Year-2023-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.303 * BILLION,
        previousValue: 1.818 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Marketplace GOV',
        value: 17.6 * BILLION,
        changeRate: 0.22,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Marketplace GOV Guidance',
        value: 18.7 * BILLION,
        previousValue: 15.9 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.026 * BILLION,
        previousValue: 0.762 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -89 * MILLION,
        previousValue: -370 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -154 * MILLION,
        previousValue: -640 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['coin:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 15),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s27.q4cdn.com/397450999/files/doc_financials/2023/q4/Shareholder-Letter-Q4-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 904.638 * MILLION,
        previousValue: 604.946 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 115.613 * MILLION,
        previousValue: -554.872 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 273.437 * MILLION,
        previousValue: -557.001 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
  },
  {
    targetUuids: ['ttd:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 15),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.thetradedesk.com/news-events/news-details/2024/The-Trade-Desk-Reports-Fourth-Quarter-and-Fiscal-Year-2023-Financial-Results/default.aspx',
      },
      {
        name: 'Presentation',
        link: 'https://s29.q4cdn.com/168520777/files/doc_earnings/2023/q4/presentation/TheTradeDesk_Q423_Investor_Presentation.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 605.797 * MILLION,
        previousValue: 490.737 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.operatingIncome,
        value: 144.438 * MILLION,
        previousValue: 100.16 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 97.323 * MILLION,
        previousValue: 71.187 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['ttd:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 9),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.thetradedesk.com/news-events/news-details/2023/The-Trade-Desk-Reports-Third-Quarter-2023-Financial-Results/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 493.266 * MILLION,
        previousValue: 394.773 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.operatingIncome,
        value: 37.677 * MILLION,
        previousValue: 28.804 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 39.352 * MILLION,
        previousValue: 15.869 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['roku:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 15),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://image.roku.com/c3VwcG9ydC1B/4Q23-Shareholder-Letter-Final.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 984.4 * MILLION,
        previousValue: 867.1 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 437.9 * MILLION,
        previousValue: 364.4 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -104.2 * MILLION,
        previousValue: -249.9 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -78.291 * MILLION,
        previousValue: -237.197 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['roku:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 1),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://image.roku.com/c3VwcG9ydC1B/3Q23-Shareholder-Letter-Final.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 912 * MILLION,
        previousValue: 761.4 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 368.8 * MILLION,
        previousValue: 356.8 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -349.8 * MILLION,
        previousValue: -147 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -330.071 * MILLION,
        previousValue: -122.183 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dash:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 1),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s22.q4cdn.com/280253921/files/doc_financials/2023/q3/DASH-Q3-23-Earnings-Press-Release.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.164 * BILLION,
        previousValue: 1.701 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.operatingIncome,
        value: -108 * MILLION,
        previousValue: -308 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -75 * MILLION,
        previousValue: -296 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dkng:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 15),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1230.857 * MILLION,
        previousValue: 855.133 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.grossProfit,
        value: (1230.857 - 716.658) * MILLION,
        previousValue: (855.133 - 485.435) * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -43.809 * MILLION,
        previousValue: -232.222 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -44.621 * MILLION,
        previousValue: -242.697 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://draftkings.gcs-web.com/news-releases/news-release-details/draftkings-reports-third-quarter-revenue-790-million-raises-2023',
      },
    ],
  },
  {
    targetUuids: ['dkng:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 2),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 789.957 * MILLION,
        previousValue: 501.938 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.grossProfit,
        value: (789.957 - 543.454) * MILLION,
        previousValue: (501.938 - 372.692) * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -286.586 * MILLION,
        previousValue: -455.028 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -283.103 * MILLION,
        previousValue: -450.494 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://draftkings.gcs-web.com/news-releases/news-release-details/draftkings-reports-third-quarter-revenue-790-million-raises-2023',
      },
    ],
  },
  {
    targetUuids: ['fsly:nyse'],
    releasedDate: getUtcDate(2024, 2, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.fastly.com/news/news-details/2024/Fastly-Announces-Fourth-Quarter-and-Full-Year-2023-Financial-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 137.777 * MILLION,
        previousValue: 119.321 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenueGuidance,
        value: 133 * MILLION,
        previousValue: 117.56 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 75.774 * MILLION,
        previousValue: 62.583 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -42.584 * MILLION,
        previousValue: -48.462 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -23.851 * MILLION,
        previousValue: -46.653 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['app:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s27.q4cdn.com/966411597/files/doc_financials/2023/q4/4Q23-AppLovin-Press-Release.pdf',
      },
      {
        name: 'Shareholder Letter',
        link: 'https://s27.q4cdn.com/966411597/files/doc_financials/2023/q4/applovin-4q23-shareholder-letter.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 953.261 * MILLION,
        previousValue: 702.307 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 269.514 * MILLION,
        previousValue: -22.426 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 172.233 * MILLION,
        previousValue: -79.512 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['nflx:nasdaq'],
    releasedDate: getUtcDate(2024, 1, 23),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s22.q4cdn.com/959853165/files/doc_financials/2023/q4/NEW-FINAL-Q4-23-Shareholder-Letter.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 8.833 * BILLION,
        previousValue: 7.852 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 8.833 * BILLION - 5.307 * BILLION,
        previousValue: 7.852 * BILLION - 4.93 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.496 * BILLION,
        previousValue: 550 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 937.838 * MILLION,
        previousValue: 55.284 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['twlo:nyse'],
    releasedDate: getUtcDate(2024, 2, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.twilio.com/news/news-details/2024/Twilio-Announces-Fourth-Quarter-and-Full-Year-2023-Results/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.076 * BILLION,
        previousValue: 1.0246 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 531.166 * MILLION,
        previousValue: 481.142 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -361.727 * MILLION,
        previousValue: -218.567 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -365.408 * MILLION,
        previousValue: -229.422 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['app:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 8),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s27.q4cdn.com/966411597/files/doc_financials/2023/q3/3Q23-AppLovin-Earnings-Press-Release.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 864.256 * MILLION,
        previousValue: 713.099 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.operatingIncome,
        value: 186.318 * MILLION,
        previousValue: 49.267 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 108.639 * MILLION,
        previousValue: 23.662 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['twlo:nyse'],
    releasedDate: getUtcDate(2024, 2, 14),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.twilio.com/news/news-details/2023/Twilio-Announces-Third-Quarter-2023-Results/default.aspx',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.034 * BILLION,
        previousValue: 983 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 516.319 * MILLION,
        previousValue: 462.075 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -108.903 * MILLION,
        previousValue: -456.997 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -141.707 * MILLION,
        previousValue: -482.327 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['crwd:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-fourth-quarter-and-fiscal-year-2024',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 845.335 * MILLION,
        previousValue: 637.367 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 636.763 * MILLION,
        previousValue: 461.763 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 29.671 * MILLION,
        previousValue: -61.5 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 54.941 * MILLION,
        previousValue: -48.932 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    quotes: [
      {
        name: 'CEO',
        contents:
          '"Customers favor our single platform approach, standardizing on CrowdStrike for cloud security, identity protection, and LogScale next-gen SIEM solutions, together representing more than $850 million of ending ARR. CrowdStrike is cybersecurity’s consolidator of choice, innovator of choice, and platform of choice to stop breaches."',
      },
    ],
  },
  {
    targetUuids: ['upst:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 13),
    documents: [
      {
        name: 'Presentation',
        link: 'https://ir.upstart.com/static-files/f27681ec-1205-4556-9436-bdeb7d97a662',
      },
      {
        name: 'Press Release',
        link: 'https://ir.upstart.com/static-files/9ce1d4bf-109e-4dcf-a99c-f40cb0fc9a2a',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 140.312 * MILLION,
        previousValue: 146.913 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -47.501 * MILLION,
        previousValue: -58.498 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -42.398 * MILLION,
        previousValue: -55.263 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },

  {
    targetUuids: ['cart:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 13),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://investors.instacart.com/static-files/c858fabf-2254-4376-8018-2a3d60801dd4',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 803 * MILLION,
        previousValue: 757 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 608 * MILLION,
        previousValue: 577 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 46 * MILLION,
        previousValue: 102 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 135 * MILLION,
        previousValue: 466 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['hood:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s28.q4cdn.com/948876185/files/doc_financials/2023/q4/Q4-2023-Robinhood-Exhibit-99-1.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 471 * MILLION,
        previousValue: 380 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Transaction-based Revenue',
            value: 200 * MILLION,
            previousValue: 186 * MILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.avru,
        value: 81,
        previousValue: 66,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 30 * MILLION,
        previousValue: -166 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['abnb:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 3),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://airbnb2020ipo.q4web.com/files/doc_financials/2023/q4/Airbnb_Q4-2023-Shareholder-Letter_Final.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenueGuidance,
        value: 2.05 * BILLION,
        changeRate: 0.13,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenue,
        value: 2.218 * BILLION,
        previousValue: 1.902 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.gbv,
        value: 15.5 * BILLION,
        changeRate: 0.15,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -496 * MILLION,
        previousValue: 235 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -349 * MILLION,
        previousValue: 319 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['cart:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.instacart.com/static-files/1e94fc36-3581-4b00-9b09-8dfda343cd81',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 764 * MILLION,
        previousValue: 668 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 561 * MILLION,
        previousValue: 485 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -2457 * MILLION,
        previousValue: 33 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -1999 * MILLION,
        previousValue: 36 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['upst:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 7),
    documents: [
      {
        name: 'Presentation',
        link: 'https://ir.upstart.com/static-files/b0770a49-3e90-4b66-b1bd-348a77f53a0d',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 134.557 * MILLION,
        previousValue: 157.233 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -178.402 * MILLION,
        previousValue: -215.324 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -40.315 * MILLION,
        previousValue: -56.223 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['hood:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s28.q4cdn.com/948876185/files/doc_financials/2023/q3/Q3-2023-Robinhood-Exhibit-99-1-vF.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 467 * MILLION,
        previousValue: 361 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.avru,
        value: 80,
        changeRate: 0.27,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -85 * MILLION,
        previousValue: -175 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['abnb:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 1),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://airbnb2020ipo.q4web.com/files/doc_financials/2023/q3/Airbnb_Q3-2023-Shareholder-Letter_Final.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.397 * BILLION,
        previousValue: 2.884 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.496 * BILLION,
        previousValue: 1.203 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 4.374 * BILLION,
        previousValue: 1.214 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['shop:nyse'],
    releasedDate: getUtcDate(2024, 2, 13),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.shopify.com/news/shopify-announces-fourth-quarter-and-full-year-2023-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.gmv,
        value: 75.1 * BILLION,
        changeRate: 0.23,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenue,
        value: 2.144 * BILLION,
        previousValue: 1.735 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.062 * BILLION,
        previousValue: 0.798 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 289 * MILLION,
        previousValue: -188 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 657 * MILLION,
        previousValue: -623 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['tsla:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 13),
    documents: [
      {
        name: 'Shareholder Deck',
        link: 'https://digitalassets.tesla.com/tesla-contents/image/upload/IR/TSLA-Q4-2023-Update.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 25.167 * BILLION,
        previousValue: 24.318 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 4.438 * BILLION,
        previousValue: 5.777 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 2.064 * BILLION,
        previousValue: 3.901 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 7.928 * BILLION,
        previousValue: 3.687 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['cdns:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 12),
    documents: [
      {
        name: 'Press Release',
        link: 'http://localhost:4200/woozee/quotes/CDNS:NASDAQ',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.068 * BILLION,
        previousValue: 899.877 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 336.528 * MILLION,
        previousValue: 211.117 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 323.899 * MILLION,
        previousValue: 240.392 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenueGuidance,
        value: 0.996 * BILLION,
        previousValue: 1.02 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['anet:nyse'],
    releasedDate: getUtcDate(2024, 2, 12),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s21.q4cdn.com/861911615/files/doc_news/Arista-Networks-Inc.-Reports-Fourth-Quarter-and-Year-End-2023-Financial-Results-2024.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.54 * BILLION,
        previousValue: 1.275 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 999.226 * MILLION,
        previousValue: 768.606 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 639.914 * MILLION,
        previousValue: 468.919 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 613.636 * MILLION,
        previousValue: 427.089 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenueGuidance,
        value: 1.54 * BILLION,
        previousValue: 1.35 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['pins:nyse'],
    releasedDate: getUtcDate(2024, 2, 8),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s23.q4cdn.com/958601754/files/doc_earnings/2023/q4/earnings-result/Q423-PressRelease.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.mau,
        value: 498 * MILLION,
        previousValue: 450 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'US and Canada MAU',
            value: 97 * MILLION,
            previousValue: 95 * MILLION,
            timeFrame: TimeFrame.yoy,
          },
        ],
      },
      {
        name: EarningsKeyWord.avru,
        value: 2.0,
        previousValue: 1.96,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.revenue,
        value: 981 * MILLION,
        previousValue: 877 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 196.25 * MILLION,
        previousValue: 5.868 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 201.178 * MILLION,
        previousValue: 17.491 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['net:nyse'],
    releasedDate: getUtcDate(2024, 2, 8),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://cloudflare.net/files/doc_financials/2023/q4/Q4-23-Exhibit-99-1.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 362.473 * MILLION,
        previousValue: 274.7 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 279.19 * MILLION,
        previousValue: 206.912 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -42.829 * MILLION,
        previousValue: -50.691 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -27.865 * MILLION,
        previousValue: -45.917 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['nio:nyse'],
    releasedDate: getUtcDate(2024, 3, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.nio.com/system/files-encrypted/nasdaq_kms/assets/2024/03/05/5-03-46/NIO%20Inc.%20Reports%20Unaudited%20Fourth%20Quarter%20and%20Full%20Year%202023%20Financial%20Results.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 17.103176 * BILLION,
        previousValue: 16.063514 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.279228 * BILLION,
        previousValue: 621.758 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -6.62531 * BILLION,
        previousValue: -6.736134 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -5.367745 * BILLION,
        previousValue: -5.786101 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['tgt:nyse'],
    releasedDate: getUtcDate(2024, 3, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://corporate.target.com/press/release/2024/03/target-corporation-reports-fourth-quarter-and-full-year-2023-earnings#:~:text=The%20Company%20reported%20fourth%2Dquarter,EPS%20in%20the%20prior%20year.',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 31.919 * BILLION,
        previousValue: 31.395 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.865 * BILLION,
        previousValue: 1.159 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.382 * BILLION,
        previousValue: 876 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['jd:nasdaq'],
    releasedDate: getUtcDate(2024, 3, 6),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.jd.com/news-releases/news-release-details/jdcom-announces-fourth-quarter-and-full-year-2023-results-annual',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 306.077 * BILLION,
        previousValue: 295.446 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 2.025 * BILLION,
        previousValue: 4.828 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },

      {
        name: EarningsKeyWord.netIncome,
        value: 1.912 * BILLION,
        previousValue: 3.221 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
    quotes: [
      {
        contents:
          'announced the adoption of a new share repurchase program under which the company may repurchase up to US$3.0 billion worth of its shares (including ADSs) over the next 36 months through March 2027.',
      },
    ],
  },
  {
    targetUuids: ['box:nyse'],
    releasedDate: getUtcDate(2024, 3, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.boxinvestorrelations.com/news-and-media/news/press-release-details/2024/Box-Reports-Fiscal-Fourth-Quarter-and-Fiscal-Year-2024-Financial-Results/',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 262.878 * MILLION,
        previousValue: 256.476 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 200.157 * MILLION,
        previousValue: 195.462 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 21.164 * MILLION,
        previousValue: 19.71 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 99.235 * MILLION,
        previousValue: 20.529 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['box:nyse'],
    releasedDate: getUtcDate(2023, 12, 5),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.box.com/press/press-release/box-announces-third-quarter-fiscal-2023-financial-results',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 261.537 * MILLION,
        previousValue: 249.951 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 192.31 * MILLION,
        previousValue: 185.461 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 11.379 * MILLION,
        previousValue: 13.366 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 10.656 * MILLION,
        previousValue: 9.908 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['afrm:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 8),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://investors.affirm.com/static-files/753da02e-35cc-4831-a046-8c8a9125e310',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 591 * MILLION,
        changeRate: 0.48,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Gross Merchandise Volume',
            value: 7.5 * BILLION,
            changeRate: 0.32,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -172.2 * MILLION,
        previousValue: -359.5 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -166.9 * MILLION,
        previousValue: -322.4 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['anf:nyse'],
    releasedDate: getUtcDate(2023, 12, 3),
    documents: [
      {
        name: 'Press Release',
        link: 'https://www.abercrombie.com/shop/us/investors/quarterly-reports',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.056 * BILLION,
        previousValue: 0.88 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 685.669 * MILLION,
        previousValue: 520.816 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 138.02 * MILLION,
        previousValue: 17.543 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 96.21 * MILLION,
        previousValue: -2.21 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['afrm:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 8),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investors.affirm.com/static-files/fd2ef456-7baf-44e3-904c-9e2c4a80589e',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 496.547 * MILLION,
        previousValue: 361.624 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -209.447 * MILLION,
        previousValue: -287.467 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -171.783 * MILLION,
        previousValue: -251.269 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['dis'],
    releasedDate: getUtcDate(2024, 2, 7),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 23.549 * BILLION,
        previousValue: 23.512 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Entertainment Revenue',
            value: 9.981 * BILLION,
            previousValue: 10.675 * BILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'Sports Revenue',
            value: 4.835 * BILLION,
            previousValue: 4.64 * BILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'Experiences Revenue',
            value: 9.132 * MILLION,
            previousValue: 8.545 * MILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 2.151 * BILLION,
        previousValue: 1.361 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['pypl'],
    releasedDate: getUtcDate(2024, 2, 7),
    data: [
      {
        name: 'Active Accounts',
        value: 426 * MILLION,
        previousValue: 428 * MILLION,
        timeFrame: TimeFrame.qoq,
      },
      {
        name: EarningsKeyWord.revenue,
        value: 8.026 * BILLION,
        previousValue: 7.383 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 1.728 * BILLION,
        previousValue: 1.244 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.402 * BILLION,
        previousValue: 0.921 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['arm:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 7),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 824 * MILLION,
        previousValue: 724 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'License revenue',
            value: 354 * MILLION,
            changeRate: 0.18,
          },
        ],
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 788 * MILLION,
        previousValue: 695 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 134 * MILLION,
        previousValue: 244 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 87 * MILLION,
        previousValue: 182 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['baba'],
    releasedDate: getUtcDate(2024, 2, 7),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 36669 * MILLION,
      },
    ],
  },
  {
    targetUuids: ['jwn:nyse'],
    releasedDate: getUtcDate(2023, 11, 21),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.nordstrom.com/news-releases/news-release-details/nordstrom-reports-third-quarter-2023-earnings',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3.32 * BILLION,
        previousValue: 3.546 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 67 * MILLION,
        previousValue: -20 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['chpt:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 16),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s22.q4cdn.com/779683160/files/doc_financials/2024/q3/CHPT-8-K-ER-FY2024-Q3-EX-99-1.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 110.283 * MILLION,
        previousValue: 125.341 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: -23.946 * MILLION,
        previousValue: 22.681 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -153.767 * MILLION,
        previousValue: -83.278 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -158.219 * MILLION,
        previousValue: -84.48 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['axon:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 27),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://filecache.investorroom.com/mr5ir_axon/425/AXON_Q4_2023_ShareholderLetter.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 432.142 * MILLION,
        previousValue: 336.142 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 263.887 * MILLION,
        previousValue: 205.679 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 42.809 * MILLION,
        previousValue: 22.541 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 57.271 * MILLION,
        previousValue: 29.175 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['pdd:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 28),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.pddholdings.com/static-files/e1464928-c8b7-4d23-8649-b76a9ccf8f39',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 68.840371 * BILLION,
        previousValue: 35.504304 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 68.840371 * BILLION - 26.830233 * BILLION,
        previousValue: 35.504304 * BILLION - 7.414132 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 16.656021 * BILLION,
        previousValue: 10.436613 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 15.537122 * BILLION,
        previousValue: 10.588574 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
  },
  {
    targetUuids: ['xpev:nyse'],
    releasedDate: getUtcDate(2023, 11, 15),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.xiaopeng.com/system/files-encrypted/nasdaq_kms/assets/2023/11/15/7-44-54/XPENG%20Reports%20Third%20Quarter%202023%20Unaudited%20Financial%20Results.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 8.529521 * BILLION,
        previousValue: 6.823487 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: -0.227958 * BILLION,
        previousValue: 923.238 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -3.160828 * BILLION,
        previousValue: -2.176831 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -3.88655 * BILLION,
        previousValue: -2.376148 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.rmb,
      },
    ],
  },
  {
    targetUuids: ['spot'],
    releasedDate: getUtcDate(2024, 2, 6),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3671 * MILLION,
        previousValue: 3166 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.euro,
      },
      {
        name: EarningsKeyWord.mau,
        value: 602 * MILLION,
        changeRate: 0.23,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 980 * MILLION,
        previousValue: 801 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.euro,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -75 * MILLION,
        previousValue: -231 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.euro,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -70 * MILLION,
        previousValue: -270 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.euro,
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.lilly.com/node/50281/pdf',
      },
    ],
  },
  {
    targetUuids: ['tsm:nyse'],
    releasedDate: getUtcDate(2024, 1, 18),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 19624 * MILLION,
        previousValue: 19624 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 10408 * MILLION,
        previousValue: 12209 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 8163 * MILLION,
        changeRate: -0.199,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.netIncome,
        value: 7476 * MILLION,
        changeRate: -0.195,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.lilly.com/node/50281/pdf',
      },
    ],
  },
  {
    targetUuids: ['pltr:nyse'],
    releasedDate: getUtcDate(2024, 2, 6),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 608.35 * MILLION,
        previousValue: 508.624 * MILLION,
        data: [
          {
            name: 'US commercial revenue',
            changeRate: 0.7,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 499.711 * MILLION,
        previousValue: 404.313 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 65.794 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },

      {
        name: EarningsKeyWord.netIncome,
        value: 96.13 * MILLION,
        previousValue: 33.489 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.lilly.com/node/50281/pdf',
      },
    ],
  },
  {
    targetUuids: ['rivn:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 7),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://downloads.rivian.com/2md5qhoeajym/7GkeR1EvqEDRDWd6wHXcsX/b26027790dc64a3dc86cd499b97c8b07/EX_-_99.2_3Q23_Shareholder_Letter_Final_11.7.23_NASDAQ.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.337 * BILLION,
        previousValue: 0.536 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: -477 * MILLION,
        previousValue: -917 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -1.44 * BILLION,
        previousValue: -1.774 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -1.367 * BILLION,
        previousValue: -1.724 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['lly:nyse'],
    releasedDate: getUtcDate(2024, 2, 6),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 9353.4 * MILLION,
        previousValue: 7301.8 * MILLION,
        data: [
          {
            name: 'New Products revenue',
            value: 2.49 * BILLION,
            previousValue: 0.3 * BILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 9353.4 * MILLION - 1788 * MILLION,
        previousValue: 7301.8 * MILLION - 1548.1 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 2387.8 * MILLION,
        previousValue: 1836.4 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 2189.6 * MILLION,
        previousValue: 1937.7 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.lilly.com/node/50281/pdf',
      },
    ],
  },
  {
    targetUuids: ['meta:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 1),
    documents: [
      {
        name: 'Press Release',
        link: 'https://investor.fb.com/investor-news/press-release-details/2024/Meta-Reports-Fourth-Quarter-and-Full-Year-2023-Results-Initiates-Quarterly-Dividend/default.aspx',
      },
    ],
    data: [
      {
        name: 'Revenue',
        value: 40111 * MILLION,
        previousValue: 32165 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Operating Income',
        value: 16384 * MILLION,
        previousValue: 6399 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Costs and expenses',
        value: 23727 * MILLION,
        previousValue: 25766 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 14017 * MILLION,
        previousValue: 4652 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Family daily active people',
        value: 3.19 * BILLION,
        changeRate: 0.08,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Headcount as of December 31',
        changeRate: -0.22,
        timeFrame: TimeFrame.yoy,
      },
    ],
  },
  {
    targetUuids: ['amd:nasdaq'],
    releasedDate: getUtcDate(2024, 1, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://d1io3yog0oux5.cloudfront.net/_ecf7d4256581c62ef459ae9962be6214/amd/news/2024-01-30_AMD_Reports_Fourth_Quarter_and_Full_Year_2023_1180.pdf',
      },
    ],
    data: [
      {
        name: 'Revenue',
        value: 6168 * MILLION,
        previousValue: 5599 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Data Center segment revenue',
            value: 2.3 * BILLION,
            changeRate: 0.38,
            timeFrame: TimeFrame.yoy,
          },
          {
            name: 'Client segment revenue',
            value: 1.5 * BILLION,
            changeRate: 0.62,
            timeFrame: TimeFrame.yoy,
          },
          {
            name: 'Gaming segment revenue',
            value: 1.4 * BILLION,
            changeRate: -0.17,
            timeFrame: TimeFrame.yoy,
          },
          {
            name: 'Embedded segment revenue',
            value: 1.1 * BILLION,
            changeRate: -0.24,
          },
        ],
      },
      {
        name: 'Gross profit',
        value: 2911 * MILLION,
        previousValue: 2403 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 342 * MILLION,
        previousValue: -149 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 667 * MILLION,
        previousValue: 21 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['uber:nyse'],
    releasedDate: getUtcDate(2024, 2, 7),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s23.q4cdn.com/407969754/files/doc_earnings/2023/q4/earnings-result/Uber-Q4-23-Earnings-Press-Release.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 9.936 * BILLION,
        previousValue: 8.607 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 9.936 * BILLION - 6.057 * BILLION,
        previousValue: 8.607 * BILLION - 5.307 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 652 * MILLION,
        previousValue: -142 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 1.429 * BILLION,
        previousValue: -595 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['msft:nasdaq'],
    documents: [],
    releasedDate: getUtcDate(2024, 1, 30),
    pressReleaseLink:
      'https://www.microsoft.com/en-us/investor/earnings/fy-2024-q2/press-release-webcast',
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 62020 * MILLION,
        previousValue: 52747 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Productivity and Business Processes Revenue',
            value: 19249 * MILLION,
            previousValue: 17002 * MILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'Intelligent Cloud Revenue',
            value: 25880 * MILLION,
            previousValue: 21508 * MILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'More Personal Computing Revenue',
            value: 16891 * MILLION,
            previousValue: 14237 * MILLION,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 27032 * MILLION,
        previousValue: 20399 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 21870 * MILLION,
        previousValue: 16425 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Azure and other cloud services revenue',
        changeRate: 0.3,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Gaming revenue',
        changeRate: 0.49,
      },
      {
        name: 'Xbox content and services revenue',
        changeRate: 0.61,
      },
      {
        name: 'LinkedIn Revenue',
        changeRate: +0.09,
        timeFrame: TimeFrame.yoy,
      },
    ],
  },
  {
    targetUuids: ['now:nyse'],
    releasedDate: getUtcDate(2024, 1, 24),
    documents: [
      {
        name: 'Presentation',
        link: 'https://www.servicenow.com/content/dam/servicenow/other-documents/investor-relations/investor-presentations/servicenow-q4-2023-investor-presentation.pdf',
      },
      {
        name: 'Press Release',
        link: 'https://www.servicenow.com/company/media/press-room/fourth-quarter-full-year-2023-financial-results.html',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 2.437 * BILLION,
        previousValue: (2.437 / 1.27) * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 1.921 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 270 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 295 * MILLION,
        previousValue: 150 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['googl:nasdaq'],
    releasedDate: getUtcDate(2024, 1, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://abc.xyz/assets/95/eb/9cef90184e09bac553796896c633/2023q4-alphabet-earnings-release.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 86310 * MILLION,
        previousValue: 76048 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 86310 * MILLION - 37575 * MILLION,
        previousValue: 76048 * MILLION - 35342 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 23697 * MILLION,
        previousValue: 18160 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 20687 * MILLION,
        previousValue: 13624 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google advertising',
        value: 65517 * MILLION,
        previousValue: 59042 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
        data: [
          {
            name: 'Google Search & other',
            value: 48020 * MILLION,
            previousValue: 42604 * MILLION,
            unit: UnitType.dollar,
            timeFrame: TimeFrame.yoy,
          },
          {
            name: 'YouTube ads',
            value: 9200 * MILLION,
            previousValue: 7963 * MILLION,
            unit: UnitType.dollar,
            timeFrame: TimeFrame.yoy,
          },
          {
            name: 'Google Network',
            value: 8297 * MILLION,
            previousValue: 8475 * MILLION,
            unit: UnitType.dollar,
            timeFrame: TimeFrame.yoy,
          },
        ],
      },
      {
        name: 'Google Services total',
        value: 76311 * MILLION,
        previousValue: 67838 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google Cloud',
        value: 9192 * MILLION,
        previousValue: 7315 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Other Bets',
        value: 657 * MILLION,
        previousValue: 226 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Total Traffic Acquisition Costs',
        value: 13986 * MILLION,
        previousValue: 12925 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Number of employees',
        value: 182502,
        previousValue: 190234,
        timeFrame: TimeFrame.yoy,
      },
    ],
  },
  {
    targetUuids: ['arm:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 8),
    documents: [
      {
        name: 'shareholder letters',
        link: 'https://investors.arm.com/static-files/bf24c7a3-d2c0-47bd-bf72-73f686a5d62f',
      },
      {
        name: 'Roadshow Presentation',
        link: 'https://investors.arm.com/static-files/b43123f6-9236-4e3c-bd7f-05c3aa2b26c1',
      },
    ],
    data: [
      {
        name: 'Revenue',
        value: 806000000,
        previousValue: 630000000,
        changeRate: 28,
        unit: 'dollar',
        timeFrame: 'yoy',
        data: [
          {
            name: 'License and Other Revenue',
            value: 388000000,
            previousValue: 188000000,
            changeRate: 106,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'Royalty Revenue',
            value: 418000000,
            previousValue: 442000000,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },
      {
        name: 'Chips Shipped',
        value: 7100000000,
        previousValue: 7500000000,
        timeFrame: 'yoy',
      },
      {
        name: 'Gross Profit',
        value: 760000000,
        previousValue: 605000000,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Operating Expenses',
        value: 916000000,
        previousValue: 422000000,
        changeRate: 117,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Net Loss',
        value: 110000000,
        previousValue: -114000000,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
  },
  {
    targetUuids: ['rivn'],
    releasedDate: getUtcDate(2023, 11, 7),
    documents: [
      {
        name: 'shareholder letters',
        link: 'https://downloads.rivian.com/2md5qhoeajym/7GkeR1EvqEDRDWd6wHXcsX/b26027790dc64a3dc86cd499b97c8b07/EX_-_99.2_3Q23_Shareholder_Letter_Final_11.7.23_NASDAQ.pdf',
      },
    ],
    data: [
      {
        name: '2023 Total Production',
        value: 54000,
        unit: 'units', // Assuming 'units' is the correct measurement for production here, replace as needed.
        // Additional properties like 'previousValue', 'changeRate', or 'timeFrame' could be added if relevant data is provided.
      },
      {
        name: 'Revenue',
        value: 1337e6,
        previousValue: 536e6,
        unit: 'dollars',
        timeFrame: 'yoy',
      },
      {
        name: 'Delivery',
        value: 15564,
        previousValue: 6584,
        timeFrame: 'yoy',
      },
      {
        name: 'Production',
        value: 16304,
        previousValue: 7363,
        timeFrame: 'yoy',
      },
      {
        name: 'Gross Profit',
        value: -477e6,
        previousValue: -917e6,
        timeFrame: 'yoy',
        unit: 'dollar',
      },
      {
        name: 'Total Operating Expenses',
        value: 963e6,
        previousValue: 857e6,
        timeFrame: 'yoy',
        unit: 'dollar',
      },
      {
        name: 'Net Loss',
        previousValue: 1724e6,
        value: 1367e6,
        timeFrame: 'yoy',
        unit: 'million',
      },
    ],
  },
  {
    targetUuids: ['coin:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 2),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://s27.q4cdn.com/397450999/files/doc_financials/2023/q3/Shareholder-Letter-Q3-2023.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        previousValue: 576e6,
        value: 623e6,
        unit: 'dollar',
        timeFrame: 'yoy',

        data: [
          {
            name: 'Total transaction revenue',
            previousValue: 365.9e6,
            value: 288.6e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'Total subscription and services revenue',
            value: 334.4e6,
            previousValue: 210.5e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },
      {
        name: 'Trading Volume',
        previousValue: 159e9,
        value: 76e9,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -79.825 * MILLION,
        previousValue: -556.484 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -2e6,
        previousValue: -545e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
  },
  {
    targetUuids: ['shop:nyse'],
    releasedDate: getUtcDate(2023, 11, 2),
    documents: [
      {
        name: 'Presentation',
        link: 'https://s27.q4cdn.com/572064924/files/doc_financials/2023/q3/Webcast-Presentation-Q3-2023.pdf',
      },
      {
        name: 'Press Release',
        link: 'https://news.shopify.com/shopify-announces-third-quarter-2023-financial-results',
      },
    ],
    data: [
      {
        name: 'Gross Merchandise Volume',
        value: 5.62e10,
        previousValue: 4.62e10,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Revenue',
        value: 1.7e9,
        unit: 'dollar',
        changeRate: 0.25,
        timeFrame: 'yoy',
      },
      {
        name: 'Subscription Solutions Revenue',
        value: 486e6,
        unit: 'dollar',
        changeRate: 0.29,
        timeFrame: 'yoy',
      },
      {
        name: 'Monthly Recurring Revenue',
        value: 141e6,
        unit: 'dollar',
        changeRate: 0.32,
        timeFrame: 'yoy',
      },
      {
        name: 'Gross Profit',
        value: 901e6,
        unit: 'dollar',
        changeRate: 0.36,
        timeFrame: 'yoy',
      },
      {
        name: 'Operating Expenses',
        value: 779e6,
        previousValue: 1.008e9,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 718e6,
        previousValue: -159e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
  },
  {
    targetUuids: ['amzn:nasdaq'],
    releasedDate: getUtcDate(2024, 2, 1),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 169.961 * BILLION,
        previousValue: 149.204 * BILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: (169.961 - 92.553) * BILLION,
        previousValue: (149.204 - 85.64) * BILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 13.209 * BILLION,
        previousValue: 2.737 * BILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 10.624 * BILLION,
        previousValue: 278 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://s2.q4cdn.com/299287126/files/doc_financials/2023/q4/AMZN-Q4-2023-Earnings-Release.pdf',
      },
    ],
  },
  {
    targetUuids: ['smci:nasdaq'],
    releasedDate: getUtcDate(2024, 1, 29),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s25.q4cdn.com/632471818/files/doc_financials/2024/q2/Exhibit-99-1_2023-12-31.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 3664.924 * MILLION,
        previousValue: 1803.195 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 564.322 * MILLION,
        previousValue: 337.422 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 371.464 * MILLION,
        previousValue: 215.182 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 295.968 * MILLION,
        previousValue: 176.167 * MILLION,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
  },
  {
    targetUuids: ['smci:nasdaq'],
    releasedDate: getUtcDate(2023, 11, 1),
    documents: [
      {
        name: 'Press Release',
        link: 'https://ir.supermicro.com/news/news-details/2023/Supermicro-Announces-First-Quarter-Fiscal-Year-2024-Financial-Results/default.aspx',
      },
      {
        name: 'Presentation',
        link: 'https://s25.q4cdn.com/632471818/files/doc_presentation/2023/Earnings-Deck-Q1FY24-Vf.pdf',
      },
    ],
    data: [
      {
        name: 'Net sales',
        value: 2.12e9,
        quarterOverQuarterValue: 2.18e9,
        previousValue: 1.85e9,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Total operating expenses',
        value: 181181e3,
        previousValue: 127412e3,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Research and Development',
        value: 111027e3,
        previousValue: 74243e3,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 156995e3,
        previousValue: 184416e3,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
    quotes: [
      {
        name: 'CEO Charles Liang',
        contents:
          'the strong demand we are seeing for AI infrastructure and compelling new and upcoming compute and storage products we are now raising our fiscal year 2024 outlook to $10B - $11B in revenue',
      },
    ],
  },
  {
    targetUuids: ['cat'],
    releasedDate: getUtcDate(2023, 10, 31),
    documents: [
      {
        name: 'Presentation',
        link: 'https://s25.q4cdn.com/358376879/files/doc_financials/2023/q3/3Q_2023-Analyst-Slide-Deck.pdf',
      },
      {
        name: 'Press Release',
        link: 'https://www.caterpillar.com/content/dam/caterpillarDotCom/releases/3q23/3q23-caterpillar-inc-financial-results.pdf',
      },
      {
        name: 'Cat Financial',
        link: 'https://www.caterpillar.com/en/news/corporate-press-releases/h/3q23-results-cat-financial.html',
      },
    ],
    data: [
      {
        name: 'Sales and Revenues',
        value: 16.8e9,
        previousValue: 15e9,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Construction Industries Revenue',
        value: 6999e6,
        previousValue: 6276e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Resource Industries Revenue',
        value: 3351e6,
        previousValue: 3087e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Energy & Transportation Revenue',
        value: 6859e6,
        previousValue: 6186e6,
        changeRate: (6859 - 6186) / 6186,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Financial Products Revenues',
        value: 822e6,
        previousValue: 716e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },

      {
        name: 'North America Revenue',
        value: 8927e6,
        changeRate: 0.25,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Latin America Revenue',
        value: 1603e6,
        changeRate: -0.11,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'EAME Revenue',
        value: 3402e6,
        changeRate: 0.08,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Asia/Pacific Revenue',
        value: 2878e6,
        changeRate: -0.01,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Total operating costs',
        value: 13361e6,
        previousValue: 12569e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Total operating costs',
        value: 13361e6,
        previousValue: 12569e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 2794e6,
        previousValue: 2041e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Order Backlog',
        value: -1.9e9,
        unit: 'dollar',
      },
    ],
  },
  {
    targetUuids: ['pins'],
    releasedDate: getUtcDate(2023, 10, 30),
    data: [
      {
        name: 'Q3 revenue',
        value: 763e6,
        changeRate: 0.11,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Global Monthly Active Users (MAUs)',
        value: 482e6,
        changeRate: 0.08,
        timeFrame: 'yoy',
      },
      {
        name: 'GAAP net income',
        value: 7e6,
        unit: 'dollar',
        timeFrame: 'q3',
      },
      {
        name: 'Q4 2023 Revenue Growth Guidance',
        changeRate: 0.12,
        timeFrame: 'yoy',
      },
      {
        name: 'Total costs and expenses',
        value: 768202e3,
        previousValue: 753925e3,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Revenue - Europe',
        value: 114e6,
        previousValue: 86e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Revenue - Rest of World',
        value: 31e6,
        previousValue: 24e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'MAUs - Europe',
        value: 128e6,
        previousValue: 120e6,
        timeFrame: 'yoy',
      },
      {
        name: 'MAUs - Rest of World',
        value: 258e6,
        previousValue: 230e6,
        timeFrame: 'yoy',
      },
      {
        name: 'Revenue - U.S. and Canada',
        value: 618e6,
        previousValue: 575e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'MAUs - U.S. and Canada',
        value: 96e6,
        previousValue: 95e6,
        timeFrame: 'yoy',
      },
    ],
    documents: [
      {
        name: 'Press Release',
        link: 'https://s23.q4cdn.com/958601754/files/doc_earnings/2023/q3/earnings-result/Q323-PressRelease.pdf',
      },
      {
        name: 'Presentation',
        link: 'https://s23.q4cdn.com/958601754/files/doc_earnings/2023/q3/presentation/2023-Q3-IR-Earnings-Presentation.pdf',
      },
    ],
  },
  {
    targetUuids: ['mrk'],
    releasedDate: getUtcDate(2023, 10, 29),
    documents: [
      {
        name: 'Transcript',
        link: 'https://s21.q4cdn.com/488056881/files/doc_events/2023/Oct/26/mrk-usq_transcript_2023-10-26-6.pdf',
      },
      {
        name: 'Earnings Presentation',
        link: 'https://s21.q4cdn.com/488056881/files/doc_financials/2023/q3/Q3-2023-Merck-Earnings-Deck-Final-Website.pdf',
      },
      {
        name: 'Press Release',
        link: 'https://s21.q4cdn.com/488056881/files/doc_financials/2023/q3/Merck-News-Release-10-26-23-Merck-Announces-Third-Quarter-2023-Financial-Results.pdf',
      },
    ],
    data: [
      {
        name: 'Revenue',
        value: 15962e6,
        previousValue: 14959e6,
        unit: 'dollar',
        timeFrame: 'yoy',
        data: [
          {
            name: 'KEYTRUDA',
            value: 6338e6,
            previousValue: 5426e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'GARDASIL / GARDASIL 9',
            value: 2585e6,
            previousValue: 2294e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'JANUVIA / JANUMET',
            value: 1133e6,
            previousValue: 835e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },

          {
            name: 'PROQUAD, M-M-R II and VARIVAX',
            value: 713e6,
            previousValue: 668e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'LAGEVRIO',
            value: 640e6,
            previousValue: 436e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'Animal Health',
            value: 1400e6,
            previousValue: 1371e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },
      {
        name: 'Cost of sales',
        value: 4264e6,
        previousValue: 3934e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Research and development',
        value: 3307e6,
        previousValue: 4399e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 4750e6,
        previousValue: 3253e6,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
    ],
  },
  {
    targetUuids: ['amzn'],
    releasedDate: getUtcDate(2023, 10, 26),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s2.q4cdn.com/299287126/files/doc_financials/2023/q3/AMZN-Q3-2023-Earnings-Release.pdf',
      },
      {
        name: 'Webcast Slides',
        link: 'https://ir.aboutamazon.com/files/doc_financials/2023/q3/Webslides_Q323.pdf',
      },
    ],
    data: [
      {
        name: 'Revenue',
        value: 143.1e9,
        previousValue: 127.1e9,
        changeRate: 0.13,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'North America segment sales',
            value: 87.9e9,
            changeRate: 0.11,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'International segment sales',
            value: 32.1e9,
            changeRate: 0.16,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'AWS segment sales',
            value: 23.1e9,
            changeRate: 0.12,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'Net product sales',
            value: 63171e6,
            previousValue: 59340e6,
            changeRate: (63171e6 - 59340e6) / 59340e6,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'Net service sales',
            value: 79912e6,
            previousValue: 67761e6,
            changeRate: (79912e6 - 67761e6) / 67761e6,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
          {
            name: 'Online stores',
            value: 57267e6,
            previousValue: 53489e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'Third-party seller services',
            value: 34342e6,
            previousValue: 28666e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'Subscription services',
            value: 10170e6,
            previousValue: 8903e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'Advertising services',
            value: 12060e6,
            previousValue: 9548e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },

      {
        name: 'Operating expenses',
        value: 131895e6,
        previousValue: 124576e6,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Total stock-based compensation expense',
            value: 5829e6,
            previousValue: 5556e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
          {
            name: 'WW shipping costs',
            value: 21799e6,
            previousValue: 19942e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },

      {
        name: EarningsKeyWord.netIncome,
        value: 9.9e9,
        previousValue: 2.9e9,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
        data: [
          {
            name: 'Operating income',
            value: 11.2e9,
            previousValue: 2.5e9,
            timeFrame: TimeFrame.yoy,
            unit: UnitType.dollar,
          },
        ],
      },
    ],
  },
  {
    targetUuids: ['meta'],
    releasedDate: getUtcDate(2023, 10, 25),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s21.q4cdn.com/399680738/files/doc_earnings/2023/q3/earnings-result/Meta-09-30-2022-Exhibit-99-1-FINAL.pdf',
      },
    ],
  },
  {
    targetUuids: ['msft:nasdaq'],
    documents: [],
    releasedDate: getUtcDate(2023, 10, 24),
    presentationLink:
      'https://view.officeapps.live.com/op/view.aspx?src=https://microsoft.com/en-us/investor/earnings/FY-2024-Q1/Document/DownloadDocument/92/SlidesFY24Q1.pptx',
    pressReleaseLink:
      'https://view.officeapps.live.com/op/view.aspx?src=https://microsoft.com/en-us/investor/earnings/FY-2024-Q1/Document/DownloadDocument/50/PressReleaseFY24Q1.docx',
    data: [
      {
        name: 'Revenue',
        value: 56.5e9, // 56.5 billion
        changeRate: 0.13,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Operating income',
        value: 26.9e9, // 26.9 billion
        changeRate: 0.25,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 22.3e9, // 22.3 billion
        changeRate: 0.27,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Diluted earnings per share',
        value: 2.99,
        changeRate: 0.27,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Azure and other cloud services revenue',
        changeRate: 0.29,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'LinkedIn Revenue',
        changeRate: -0.08,
        timeFrame: TimeFrame.yoy,
      },
    ],
  },

  {
    targetUuids: ['GOOGL:NASDAQ'],
    releasedDate: getUtcDate(2023, 10, 24),
    revenue: {},
    operatingExpenses: {},
    documents: [
      {
        name: 'Press Release',
        link: 'https://abc.xyz/assets/4a/3e/3e08902c4a45b5cf530e267cf818/2023q3-alphabet-earnings-release.pdf',
      },
    ],
    data: [
      {
        name: 'Revenue',
        value: 76693 * MILLION,
        previousValue: 69092 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: EarningsKeyWord.revenue,
        value: 965 * MILLION,
        previousValue: 715.41 * MILLION,
      },
      {
        name: 'Operating Expenses',
        value: 55350 * MILLION - 33229 * MILLION,
        previousValue: 51957 * MILLION - 31158 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 19689 * MILLION,
        previousValue: 13910 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google Search & other',
        value: 44026000000,
        previousValue: 39539000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'YouTube ads',
        value: 7952000000,
        previousValue: 7071000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google Network',
        value: 7669000000,
        previousValue: 7872000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google advertising',
        value: 59647000000,
        previousValue: 54482000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google other',
        value: 8339000000,
        previousValue: 6895000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google Services total',
        value: 67986000000,
        previousValue: 61377000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Google Cloud',
        value: 8411000000,
        previousValue: 6868000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Other Bets',
        value: 297000000,
        previousValue: 209000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Total Traffic Acquisition Costs',
        value: 12642000000,
        previousValue: 11826000000,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Number of employees',
        value: 182381,
        previousValue: 186779,
        timeFrame: TimeFrame.yoy,
      },
    ],
  },
  {
    targetUuids: ['cdns:nasdaq'],
    releasedDate: getUtcDate(2023, 10, 23),
    data: [
      {
        name: 'Revenue',
        value: 1.023 * BILLION,
        previousValue: 902.554 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: 'Operating Income',
        value: 292.906 * MILLION,
        previousValue: 260.752 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 254.321 * MILLION,
        previousValue: 186.305 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['axp'],
    releasedDate: getUtcDate(2023, 10, 21),
    documents: [],
    pressReleaseLink:
      'https://s26.q4cdn.com/747928648/files/doc_financials/2023/q3/Q3-2023-Earnings-Press-Release.pdf',
    presentationLink:
      'https://s26.q4cdn.com/747928648/files/doc_financials/2023/q3/Q3-2023-Earnings-Presentation.pdf',
    financialTableLink:
      'https://s26.q4cdn.com/747928648/files/doc_financials/2023/q3/Q3-2023-Earnings-Tables.pdf',
    tenQ: 'https://s26.q4cdn.com/747928648/files/doc_financials/2023/q3/f4327658-d04e-4a08-b927-a81fff2df5f8.pdf',
    revenue: {
      value: 15381 * MILLION,
      previousValue: 13556 * MILLION,
    },
    operatingExpenses: {
      value: 11048 * MILLION,
      previousValue: 10319 * MILLION,
    },
    netIncome: {
      value: 2451 * MILLION,
      previousValue: 1879 * MILLION,
    },
    data: [
      {
        name: 'Net card fees',
        value: 1846 * MILLION,
        previousValue: 1541 * MILLION,
      },
      {
        name: 'Net interest income',
        value: 3442 * MILLION,
        previousValue: 2578 * MILLION,
      },
    ],
    quotes: [
      {
        name: 'CEO Stephen J. Squeri',
        contents: [
          'Overall Card Member spending was strong and credit performance remained best-in-class, reflecting our premium global customer base.',
          'The investments we have made in our value propositions are driving brand relevance across generations, with Millennial and Gen Z consumers remaining our fastest-growing consumer cohort.',
          'Based on our performance to date, we remain confident in our ability to achieve revenue growth and EPS for the full year consistent with the annual guidance we provided at the start of the year. ',
        ],
      },
    ],
  },
  {
    targetUuids: ['net:nyse'],
    releasedDate: getUtcDate(2023, 11, 2),
    documents: [
      {
        name: 'Shareholder Letter',
        link: 'https://cloudflare.net/files/doc_financials/2023/q3/Q3-23-Exhibit-99-1.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 335.603 * MILLION,
        previousValue: 253.857 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -39.212 * MILLION,
        previousValue: -45.947 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: -23.535 * MILLION,
        previousValue: -42.546 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['pins:nyse'],
    releasedDate: getUtcDate(2023, 10, 30),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s23.q4cdn.com/958601754/files/doc_earnings/2023/q3/earnings-result/Q323-PressRelease.pdf',
      },
    ],
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 763.203 * MILLION,
        previousValue: 684.55 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: -4.999 * MILLION,
        previousValue: -69.375 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 6.733 * MILLION,
        previousValue: -65.181 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
  {
    targetUuids: ['anet:nyse'],
    releasedDate: getUtcDate(2023, 10, 30),
    data: [
      {
        name: EarningsKeyWord.revenue,
        value: 1.509 * BILLION,
        previousValue: 1.176 * BILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.grossProfit,
        value: 942.419 * MILLION,
        previousValue: 709.98 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.operatingIncome,
        value: 602.695 * MILLION,
        previousValue: 417.347 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
      {
        name: EarningsKeyWord.netIncome,
        value: 545.327 * MILLION,
        previousValue: 353.999 * MILLION,
        timeFrame: TimeFrame.yoy,
        unit: UnitType.dollar,
      },
    ],
  },
];
