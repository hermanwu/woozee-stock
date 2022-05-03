import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { UserType } from '../components/business-overview/business.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const gme: StockAnalysis = {
  marketCap: 13.73 * BILLION,
  logo: '',
  name: 'GameStop Corp.',
  description: [],
  ticker: 'gme',
  shortName: 'GameStop',
  irAddress: 'https://investor.gamestop.com/home',
  risks: [],
  catalysts: [
    {
      name: 'Partnership with Immutable X to support the development of GameStop’s NFT marketplace',
      type: FactType.business,
      date: new Date('2022-04-18'),
    },
    {
      name: 'Hired talents with experience in areas such as blockchain gaming, ecommerce and technology, product refurbishment and operations.',
      type: FactType.business,
      date: new Date('2022-04-18'),
    },
    {
      name: 'Raised more than $1.67 billion in capital and eliminated all of the Company’s long-term debt',
      type: FactType.business,
      date: new Date('2022-04-18'),
    },
    {
      name: 'Established/expanded brand relationships with PC gaming companies such as Alienware, Corsair and Lenovo',
      type: FactType.growth,
      date: new Date('2022-04-18'),
    },
    {
      name: 'Expanded the product catalog to include a broader set of consumer electronics, PC gaming equipment and refurbished hardware.',
      type: FactType.growth,
      date: new Date('2022-04-18'),
    },
    {
      name: 'Grew PowerUp Rewards Pro members by 32% on a year-over-year basis, taking total membership to approximately 5.8 million.',
      type: FactType.growth,
      date: new Date('2022-04-18'),
    },
  ],

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 2.254 * BILLION,
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
      grossProfit: 318.6 * MILLION,
      operatingIncome: -102.9 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 1183.4 * MILLION,
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
    markets: [MarketType.crypto, MarketType.ecommerce],
    users: [
      {
        type: UserType.gamer,
      },
    ],
  },
};
