import { FactType } from 'src/app/risks/models/fact-type.enum';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { UserType } from '../../stock/components/business-overview/business.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const gmeCatalysts = [
  {
    uuid: 'gme-c-1',

    name: 'Partnership with Immutable X to support the development of GameStop’s NFT marketplace',
    type: FactType.business,
    date: new Date('2022-04-18'),
  },
  {
    uuid: 'gme-c-1',

    name: 'Hired talents with experience in areas such as blockchain gaming, ecommerce and technology, product refurbishment and operations.',
    type: FactType.business,
    date: new Date('2022-04-18'),
  },
  {
    uuid: 'gme-c-1',

    name: 'Raised more than $1.67 billion in capital and eliminated all of the Company’s long-term debt',
    type: FactType.business,
    date: new Date('2022-04-18'),
  },
  {
    uuid: 'gme-c-1',

    name: 'Established/expanded brand relationships with PC gaming companies such as Alienware, Corsair and Lenovo',
    type: FactType.growth,
    date: new Date('2022-04-18'),
  },
  {
    uuid: 'gme-c-1',

    name: 'Expanded the product catalog to include a broader set of consumer electronics, PC gaming equipment and refurbished hardware.',
    type: FactType.growth,
    date: new Date('2022-04-18'),
  },
  {
    uuid: 'gme-c-1',
    name: 'Grew PowerUp Rewards Pro members by 32% on a year-over-year basis, taking total membership to approximately 5.8 million.',
    type: FactType.growth,
    date: new Date('2022-04-18'),
  },
];

export const gme: StockAnalysis = {
  marketCap: 8.86 * BILLION,
  logo: '',
  name: 'GameStop Corp.',
  description: [],
  ticker: 'gme',
  displayName: 'GameStop',
  irAddress: 'https://investor.gamestop.com/home',
  catalystUuids: gmeCatalysts.map((g) => g.uuid),

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      date: convertDateToUTC(new Date('2022-09-07')),
      totalRevenue: 1.136 * BILLION,
      grossProfit: 282.2 * MILLION,
      operatingIncome: -107.8 * MILLION,
      netIncome: -108.7 * MILLION,
      links: [
        {
          name: 'Press Release',
          value:
            'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-second-quarter-fiscal-year-2022-results',
        },
        {
          name: 'Form 10-Q',
          value:
            'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000126',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 1.378 * BILLION,
      costOfRevenue: 1079.9 * MILLION,
      grossProfit: 298.5 * MILLION,
      operatingIncome: -153.7 * MILLION,
      netIncome: -157.9 * MILLION,
      reportLink:
        'https://investor.gamestop.com/static-files/5df55006-ebe2-478e-8058-d88a7b5b3d88',
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 2.254 * BILLION,
      costOfRevenue: 1875.7 * MILLION,

      operatingIncome: -166.8 * MILLION,
      grossProfit: 378.2 * MILLION,
      sellingGeneralAndAdministrative: 538.9 * MILLION,
      pressReleaseLink:
        'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-year-2021-results',
      quarterHighlights: [
        'Generated net sales of $2.254 billion for the quarter, compared to $2.122 billion in the fourth quarter of 2020 and $2.194 billion in the fourth quarter of 2019.',
        'Established new and expanded brand relationships, including with PC gaming companies such as Alienware, Corsair and Lenovo, that contributed to sales growth in the quarter.',
        'Grew PowerUp Rewards Pro members by 32% on a year-over-year basis, taking total membership to approximately 5.8 million.',
        'Entered into a partnership with Immutable X that is intended to support the development of GameStop’s NFT marketplace and provide the Company with up to $150 million in IMX tokens upon achievement of certain milestones.',
        'Launched a redesigned app, which includes an enhanced user interface, improved scalability for a larger product catalog and more functionality to support exclusive offers and promotions.',
        'Hired dozens of additional individuals with experience in areas such as blockchain gaming, ecommerce and technology, product refurbishment and operations.',
      ],
      annualHighlights: [
        'Generated net sales of $6.011 billion for the fiscal year, compared to $5.090 billion for fiscal year 2020.',
        'Expanded the product catalog to include a broader set of consumer electronics, PC gaming equipment and refurbished hardware.',
        'Made significant and long-term investments in the Company’s fulfillment network, systems and teams.',
        'Established new offices in Seattle, Washington and Boston, Massachusetts, which are technology hubs with established talent markets.',
        'Raised more than $1.67 billion in capital and eliminated all of the Company’s long-term debt, other than a $44.6 million low-interest, unsecured term loan associated with the French government’s response to COVID-19.',
        'Ended the fiscal year with $1.271 billion in cash and cash equivalents and $915 million in inventory, compared to $635 million in cash and $602.5 million in inventory at the end of fiscal year 2020. Increased investments in inventory reflect the Company’s focus on meeting heightened demand and mitigating supply chain headwinds.',
      ],
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1296.6 * MILLION,
      costOfRevenue: 978.0 * MILLION,
      grossProfit: 318.6 * MILLION,
      operatingIncome: -102.9 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1183.4 * MILLION,
      costOfRevenue: 862.5 * MILLION,
      grossProfit: 320.9 * MILLION,
      operatingIncome: -58.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1276.8 * MILLION,
      grossProfit: 330.1 * MILLION,
      operatingIncome: -40.8 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 2122.1 * MILLION,
      grossProfit: 448.6 * MILLION,
      operatingIncome: 18.8 * MILLION,
      sellingGeneralAndAdministrative: 419.1 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 1004.7 * MILLION,
      grossProfit: 276.3 * MILLION,
      operatingIncome: -63.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 942.0 * MILLION,
      grossProfit: 252.2 * MILLION,
      operatingIncome: -63.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 1021 * MILLION,
      grossProfit: 282.4 * MILLION,
      operatingIncome: -63.0 * MILLION,
    },
  ],

  business: {
    markets: [IndustryType.crypto, IndustryType.ecommerce],
    users: [
      {
        type: UserType.gamer,
      },
    ],
  },
};
