import { rmbToDollar } from 'src/app/shared/currency';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const pddRisks = [
  {
    name: 'strong competitors',
  },
  {
    name: 'low user loyalty',
  },
];

export const pdd: StockAnalysis = {
  marketCap: 54.96 * BILLION,
  displayName: 'Pinduoduo',
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      date: convertDateToUTC(new Date('2022-08-29')),
      totalRevenue: 4.6938 * BILLION,
      grossProfit: 3.505129 * BILLION,
      operatingIncome: -2.206676 * BILLION,
      links: [
        {
          name: '2022 Q2 Finanical Results',
          value:
            'https://investor.pinduoduo.com/static-files/95d45792-9326-4a91-bf35-d6e15de216d7',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 23793 * MILLION * rmbToDollar,
      costOfRevenue: 7159 * MILLION * rmbToDollar,
      grossProfit: 16634 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 11811 * MILLION * rmbToDollar,
      researchAndDevelopment: 2668 * MILLION * rmbToDollar,
      totalOperatingExpense: 21639 * MILLION * rmbToDollar,
      operatingIncome: 2154 * MILLION * rmbToDollar,
      interestIncomeNet: 770 * MILLION * rmbToDollar,
      otherIncomeNet: 239 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: 3164 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 564 * MILLION * rmbToDollar,
      netIncome: 2599 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 27230 * MILLION * rmbToDollar,
      costOfRevenue: 6515 * MILLION * rmbToDollar,
      grossProfit: 20715 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 11785 * MILLION * rmbToDollar,
      researchAndDevelopment: 2022 * MILLION * rmbToDollar,
      totalOperatingExpense: 20323 * MILLION * rmbToDollar,
      operatingIncome: 6906 * MILLION * rmbToDollar,
      interestIncomeNet: 676 * MILLION * rmbToDollar,
      otherIncomeNet: 115 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: 7698 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 1078 * MILLION * rmbToDollar,
      netIncome: 6619 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 21505 * MILLION * rmbToDollar,
      costOfRevenue: 6558 * MILLION * rmbToDollar,
      grossProfit: 14947 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 10385 * MILLION * rmbToDollar,
      researchAndDevelopment: 2422 * MILLION * rmbToDollar,
      totalOperatingExpense: 19366 * MILLION * rmbToDollar,
      operatingIncome: 2139 * MILLION * rmbToDollar,
      interestIncomeNet: 408 * MILLION * rmbToDollar,
      otherIncomeNet: -52 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: 2494 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 854 * MILLION * rmbToDollar,
      netIncome: 1639 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 23046 * MILLION * rmbToDollar,
      costOfRevenue: 7897 * MILLION * rmbToDollar,
      grossProfit: 15148 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 10822 * MILLION * rmbToDollar,
      researchAndDevelopment: 2328 * MILLION * rmbToDollar,
      totalOperatingExpense: 21048 * MILLION * rmbToDollar,
      operatingIncome: 1997 * MILLION * rmbToDollar,
      interestIncomeNet: 293 * MILLION * rmbToDollar,
      otherIncomeNet: 123 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: 2414 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 0 * MILLION * rmbToDollar,
      netIncome: 2414 * MILLION * rmbToDollar,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 22167 * MILLION * rmbToDollar,
      costOfRevenue: 10746 * MILLION * rmbToDollar,
      grossProfit: 11421 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 13349 * MILLION * rmbToDollar,
      researchAndDevelopment: 2218 * MILLION * rmbToDollar,
      totalOperatingExpense: 26314 * MILLION * rmbToDollar,
      operatingIncome: -4146 * MILLION * rmbToDollar,
      interestIncomeNet: 771 * MILLION * rmbToDollar,
      otherIncomeNet: 470 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -2905 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 0 * MILLION * rmbToDollar,
      netIncome: -2905 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 26547 * MILLION * rmbToDollar,
      costOfRevenue: 11526 * MILLION * rmbToDollar,
      grossProfit: 15021 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 15118 * MILLION * rmbToDollar,
      researchAndDevelopment: 1951 * MILLION * rmbToDollar,
      totalOperatingExpense: 28595 * MILLION * rmbToDollar,
      operatingIncome: -2047 * MILLION * rmbToDollar,
      interestIncomeNet: 590 * MILLION * rmbToDollar,
      otherIncomeNet: 81 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -1376 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 0 * MILLION * rmbToDollar,
      netIncome: -1376 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 14209 * MILLION * rmbToDollar,
      costOfRevenue: 3260 * MILLION * rmbToDollar,
      grossProfit: 10949 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 10440 * MILLION * rmbToDollar,
      researchAndDevelopment: 1804 * MILLION * rmbToDollar,
      totalOperatingExpense: 15505 * MILLION * rmbToDollar,
      operatingIncome: -1295 * MILLION * rmbToDollar,
      interestIncomeNet: 453 * MILLION * rmbToDollar,
      otherIncomeNet: 57 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -784 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 0 * MILLION * rmbToDollar,
      netIncome: -784 * MILLION * rmbToDollar,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 12193 * MILLION * rmbToDollar,
      costOfRevenue: 2662 * MILLION * rmbToDollar,
      grossProfit: 9531 * MILLION * rmbToDollar,
      sellingGeneralAndAdministrative: 9508 * MILLION * rmbToDollar,
      researchAndDevelopment: 1662 * MILLION * rmbToDollar,
      totalOperatingExpense: 13832 * MILLION * rmbToDollar,
      operatingIncome: -1639 * MILLION * rmbToDollar,
      interestIncomeNet: 673 * MILLION * rmbToDollar,
      otherIncomeNet: 67 * MILLION * rmbToDollar,
      netIncomeBeforeTaxes: -899 * MILLION * rmbToDollar,
      provisionForIncomeTaxes: 0 * MILLION * rmbToDollar,
      netIncome: -899 * MILLION * rmbToDollar,
    },
  ],
  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dmSbeD7O0Szd7qbdYHlCQ5G7J8WKR8DYGgAsbUxS5m_-Db-wTMdDVnzwd3Uqx0AxZjJqpX_NcuOZFDQlKZlYKQNnPh0ozR8AXVMHaUkbkZ8iFBnJzziuNiUoWaVxJ-8tyTjnwymFJ73ithN67jsHxV=w882-h736-no?authuser=3',
  name: 'Pinduoduo',
  ticker: 'pdd',
  irAddress: 'https://investor.pinduoduo.com/',

  vision: [
    'Costco + Disney',
    'Fun and interactive shopping experiences - discovery shopping.',
    'Resemble a "virtual bazaar" where buyers browse and explore a full spectrum of products on our platform while interacting with one another. ',
    'Customer connect to manufacturer directly.',
  ],
  painPoint: [
    'How to buy same quality product with lower price.',
    'Desire for deals during discovery shopping.',
  ],
  products: [
    {
      description: 'App',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3cV6CWGFQfD0tmYibyGBkc8TnTxCjOuMXV0MnDhcsoxnsI5Xpt4a-zzxONlGTmiO1fOxyKf3BpgoVhwODId9jUmq7dNRtvAgR8GBG-xX3K8_KhNEng9g5TDDGNjitO-7zVQgoZEvycPkP75DbVhz3bI=w1314-h828-no?authuser=3',
    },
    {
      description: 'Ecosystem',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3cT_xiDmJ0t0r0LooLECn-pcGBXj9nouzMx0TNDbvGBpKRMtNmgLlS83iOFikdBNYrqefy2PlRIIjglJHT1FEoJO8Mt_5RRAaDsnA4mRI66LDT-FzayygnjfPj-PqjDAL15ak0KkinQMyNTPPvSLltB=w1652-h1168-no?authuser=3',
    },
  ],

  business: {
    markets: [IndustryType.ecommerce],
    growthStrategy: [
      'Create a team purchase model that initiated by user with more detailed customer information.',
      'Focus on less-developed cities/market with consumers that are more sensitive to price, where Alibaba and JD were not focused',
      'Work with Tencent as a strategic partner.',
      'Use psychology to drive more discovery shopping',
      'C2M model: Use data to create accurate demand for manufacturer and lower the cost.',
    ],
    users: [
      'Customers who are more sensitive to price.',
      'Customers who are interested in discovery shopping',
    ],
  },
  advantage: [
    'Visionary founder and chairman',
    'Technology driven',
    'Strategic investors',
  ],

  trends: ['COVID', 'E-commerce'],
  thoughts: {
    hermanScore: 1,
  },
  stats: {
    price: 1,
    revenueGrowth: 0.4,
    margin: 0.3,
  },
  score: {
    vision: 9,
    painPoint: 8,
    product: 10,
    customer: 8,
    businessModel: 8,
    advantage: 8,
    risk: 6,
    competitors: 7,
    marketPotential: 7,
    trend: 10,
    total: 81,
  },

  companyOfficialDocs: [
    {
      content: '投资者关系',
      link: 'https://investor.pinduoduo.com/investor-relations',
    },
    {
      content: '简介',
      link: 'https://pinduoduo.gcs-web.com/static-files/468b2c9f-9112-410d-84b3-2b22e07c7ee0',
    },
    {
      content: '更多信息',
      link: 'https://pinduoduo.gcs-web.com/static-files/afa5ca3e-247c-44a9-b05d-8e9e191f3119',
    },
  ],
  usefulVideos: [],
};
