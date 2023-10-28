import {
  Stats,
  TimeFrame,
  UnitType,
} from '../shared/components/stats-display/stats-display.interface';
import { getUtcDate } from '../shared/functions/getUtcDate.function';
import { MILLION } from '../shared/numbers/number.model';

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
  targets?: string[];
  documents?: any[];
}

export const earnings: Earnings[] = [
  {
    targets: ['mrk'],
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
        name: 'Costs',
        data: [
          {
            name: 'Cost of sales',
            value: 4264e6,
            previousValue: 3934e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },
      {
        name: 'Expenses',
        data: [
          {
            name: 'Research and development',
            value: 3307e6,
            previousValue: 4399e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },
      {
        name: 'Incomes',
        data: [
          {
            name: 'Net Income',
            value: 4750e6,
            previousValue: 3253e6,
            unit: 'dollar',
            timeFrame: 'yoy',
          },
        ],
      },
    ],
  },
  {
    targets: ['amzn'],
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
        name: 'Net income',
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
    targets: ['meta'],
    releasedDate: getUtcDate(2023, 10, 25),
    documents: [
      {
        name: 'Press Release',
        link: 'https://s21.q4cdn.com/399680738/files/doc_earnings/2023/q3/earnings-result/Meta-09-30-2022-Exhibit-99-1-FINAL.pdf',
      },
    ],
  },
  {
    targets: ['msft'],
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
        name: 'Net income',
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
    targets: ['googl'],
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
        name: 'Operating Expenses',
        value: 55350 * MILLION - 33229 * MILLION,
        previousValue: 51957 * MILLION - 31158 * MILLION,
        unit: UnitType.dollar,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Net Income',
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
    targets: ['axp'],
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
];
