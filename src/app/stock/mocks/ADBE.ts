import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const adbeCatalysts = [
  {
    name: 'Document Cloud 2B yearly revenue with 29% Y/Y growth ',
    type: FactType.business,
    level: CatalystLevel.moderate,
    date: new Date('2022-03-18'),
  },
  {
    name: 'Experience Cloud has 1B revenue in Q1 with 22% Y/Y growth ',
    type: FactType.business,
    level: CatalystLevel.moderate,
    date: new Date('2022-03-18'),
  },
];

export const adbeRisks = [
  {
    name: 'War in Ukraine would cause 75M revenue reduction',
    type: FactType.business,
    notes: [
      {
        content:
          'Halt of all new sales of Adobe products and services in Russia and Belarus. This results in a total ARR reduction of $87 million and an expected revenue impact of $75 million for fiscal year 2022.',
      },
    ],
  },
];

export const adbe: StockAnalysis = {
  marketCap: 216.55 * BILLION,
  predications: [
    {
      start: new Date('2022-3-5'),
      days: 120,
      price: 250,
    },
  ],
  irAddress: 'https://www.adobe.com/investor-relations.html',
  logo: '',
  name: 'Adobe',
  description: [],
  ticker: 'adbe',

  business: {
    markets: [MarketType.saas, MarketType.mediaTool, MarketType.documentTool],
    revenue: [
      {
        type: MarketType.saas,
      },
      {
        type: MarketType.mediaTool,
        size: 3.11 * BILLION,
        growthRate: 0.09,
        children: [
          {
            type: MarketType.mediaTool,
            size: 2.55 * BILLION,
            growthRate: 0.07,
          },
          {
            type: MarketType.documentTool,
            size: 562 * MILLION,
            growthRate: 0.17,
          },
        ],
      },
    ],
  },

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 4.34 * BILLION,
      isForecast: true,
    },
    {
      quarterHighlights: [
        {
          content: 'Creative Cloud',
          notes: [
            {
              content:
                'Newly launched Creative Cloud Express seeing strong traffic, millions of monthly active users with high customer satisfaction',
            },
            {
              content:
                'AI-powered innovations in Premiere Pro that help merge music into video sequences and accelerate transcription',
            },
            {
              content: 'Frame.io',
              notes: [
                {
                  content:
                    'Extend leadership in video collaboration and bring collaboration capabilities to all creative categories',
                },
                {
                  content:
                    'Frame had its best quarter ever, closing more deals than in any prior quarter while increasing deal sizes to record level',
                },
              ],
            },
            {
              content: 'Substance 3D',
              notes: [
                {
                  content:
                    'Tremendous interest for Substance 3D and new 3D Modeler beta as brands become “metaverse ready”',
                },
                {
                  content:
                    'Substance is already being adopted by global brands like Coca-Cola, NASCAR and NVIDIA for marketing and e-commerce;',
                },
              ],
            },
          ],
        },
        {
          content: 'Document Cloud',
          notes: [
            {
              content:
                'Strong growth in Adobe Sign, driven by unifying e-signature functionality in Acrobat and new Sign integrations with Adobe Commerce and Workfront',
            },
            {
              content: '29% growth year over year (Q1 ~500 million revenue)',
            },
          ],
        },
        {
          content: 'Experience Cloud',
          notes: [
            {
              content: '22% growth year over year (Q1 ~1 billion revenue)',
            },
            {
              content:
                'The general availability of Adobe Experience Cloud for Healthcare to deliver personalized healthcare experiences; ',
            },
            {
              content:
                'An expanding partner ecosystem, including a partnership with OneTrust to simplify consent management, the next phase of e-commerce integrations with FedEx, Walmart and PayPal, as well as a collaboration with The Weather Company; and',
            },
            {
              content:
                'Key customer wins, including CrowdStrike, Deutsche Telekom, IBM, Jaguar Land Rover, JPMorgan Chase, McDonald’s and UnitedHealth.',
            },
          ],
        },
      ],
      year: 2022,
      quarter: 1,
      totalRevenue: 4.26 * BILLION,
      grossProfit: 3.75 * BILLION,
      operatingIncome: 1.58 * BILLION,
      netIncome: 1.266 * BILLION,
      slidesLink:
        'https://www.adobe.com/pdf-page.html?pdfTarget=aHR0cHM6Ly93d3cuYWRvYmUuY29tL2NvbnRlbnQvZGFtL2NjL2VuL2ludmVzdG9yLXJlbGF0aW9ucy9wZGZzLzIyMzAyMjAyL2MyMzRnOG40ODQ4cy5wZGY=',
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 4110 * MILLION,
      costOfRevenue: 507 * MILLION,
      grossProfit: 3603 * MILLION,
      sellingGeneralAndAdministrative: 1405 * MILLION,
      researchAndDevelopment: 657 * MILLION,
      totalOperatingExpense: 2609 * MILLION,
      operatingIncome: 1501 * MILLION,
      interestIncomeNet: -32 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 1468 * MILLION,
      provisionForIncomeTaxes: 235 * MILLION,
      netIncome: 1233 * MILLION,
      pressReleaseLink:
        'https://www.adobe.com/pdf-page.html?pdfTarget=aHR0cHM6Ly93d3cuYWRvYmUuY29tL2NvbnRlbnQvZGFtL2NjL2VuL2ludmVzdG9yLXJlbGF0aW9ucy9wZGZzLzYxMjExMjAyL2E4N2hpdSg2NTc2LnBkZg==',
      reportLink:
        'https://www.adobe.com/investor-relations/financial-documents.html#2021',
      isAnnual: true,
      transcript:
        'https://abc.xyz/investor/static/pdf/2021_Q4_Earnings_Transcript.pdf?cache=0118641',
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 3935 * MILLION,
      costOfRevenue: 467 * MILLION,
      grossProfit: 3468 * MILLION,
      sellingGeneralAndAdministrative: 1333 * MILLION,
      researchAndDevelopment: 651 * MILLION,
      totalOperatingExpense: 2494 * MILLION,
      operatingIncome: 1441 * MILLION,
      interestIncomeNet: -20 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 1418 * MILLION,
      provisionForIncomeTaxes: 206 * MILLION,
      netIncome: 1212 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 3835 * MILLION,
      costOfRevenue: 444 * MILLION,
      grossProfit: 3391 * MILLION,
      sellingGeneralAndAdministrative: 1329 * MILLION,
      researchAndDevelopment: 612 * MILLION,
      totalOperatingExpense: 2429 * MILLION,
      operatingIncome: 1406 * MILLION,
      interestIncomeNet: -20 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 1386 * MILLION,
      provisionForIncomeTaxes: 270 * MILLION,
      netIncome: 1116 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 3905 * MILLION,
      costOfRevenue: 447 * MILLION,
      grossProfit: 3458 * MILLION,
      sellingGeneralAndAdministrative: 1339 * MILLION,
      researchAndDevelopment: 620 * MILLION,
      totalOperatingExpense: 2451 * MILLION,
      operatingIncome: 1454 * MILLION,
      interestIncomeNet: -25 * MILLION,
      otherIncomeNet: 4 * MILLION,
      netIncomeBeforeTaxes: 1433 * MILLION,
      provisionForIncomeTaxes: 172 * MILLION,
      netIncome: 1261 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3424 * MILLION,
      costOfRevenue: 428 * MILLION,
      grossProfit: 2996 * MILLION,
      sellingGeneralAndAdministrative: 1184 * MILLION,
      researchAndDevelopment: 558 * MILLION,
      totalOperatingExpense: 2209 * MILLION,
      operatingIncome: 1215 * MILLION,
      interestIncomeNet: -17 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: 1197 * MILLION,
      provisionForIncomeTaxes: -1053 * MILLION,
      netIncome: 2250 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 3225 * MILLION,
      costOfRevenue: 427 * MILLION,
      grossProfit: 2798 * MILLION,
      sellingGeneralAndAdministrative: 1122 * MILLION,
      researchAndDevelopment: 566 * MILLION,
      totalOperatingExpense: 2156 * MILLION,
      operatingIncome: 1069 * MILLION,
      interestIncomeNet: -10 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 1060 * MILLION,
      provisionForIncomeTaxes: 105 * MILLION,
      netIncome: 955 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 3128 * MILLION,
      costOfRevenue: 415 * MILLION,
      grossProfit: 2713 * MILLION,
      sellingGeneralAndAdministrative: 1125 * MILLION,
      researchAndDevelopment: 532 * MILLION,
      totalOperatingExpense: 2112 * MILLION,
      operatingIncome: 1016 * MILLION,
      interestIncomeNet: -16 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: 1000 * MILLION,
      provisionForIncomeTaxes: -100 * MILLION,
      netIncome: 1100 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 3091 * MILLION,
      costOfRevenue: 452 * MILLION,
      grossProfit: 2639 * MILLION,
      sellingGeneralAndAdministrative: 1128 * MILLION,
      researchAndDevelopment: 532 * MILLION,
      totalOperatingExpense: 2154 * MILLION,
      operatingIncome: 937 * MILLION,
      interestIncomeNet: -18 * MILLION,
      otherIncomeNet: NaN * MILLION,
      netIncomeBeforeTaxes: 919 * MILLION,
      provisionForIncomeTaxes: -36 * MILLION,
      netIncome: 955 * MILLION,
    },
  ],
};
