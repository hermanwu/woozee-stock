import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from 'src/app/risks/models/risk-level.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const coinRisks: Risk[] = [
  {
    uuid: 'coin-r-1',
    content: 'Crypto market is not well regulated by goveronment.',
  },
  {
    uuid: 'coin-r-1',
    content: 'New user and revenue growth slows down',
    level: Term.short,
    type: FactType.growth,
  },
  {
    uuid: 'coin-r-2',
    name: 'Highly tied to crypto business.',
    level: Term.long,
  },
  {
    uuid: 'coin-r-2',
    name: 'Transaction based revenue could be limited. (i.e. company like Schwab)',
    level: Term.long,
  },
  {
    uuid: 'coin-r-3',
    name: 'Too much competition in the business, from startup to established brokerage.',
    level: Term.long,
  },
  {
    uuid: 'coin-r-5',
    name: 'Crypto is not a good investment since it wont increase value',
    level: Term.long,
  },
  {
    uuid: 'coin-r-6',
    name: 'Assets on the platform only grow about 10% compared to last year.',
  },
  {
    uuid: 'coin-r-7',
    content:
      'Historical transaction revenue per user does not grow in the past 5 years.',
    level: Term.short,
    type: FactType.growth,
  },
  {
    uuid: 'coin-r-8',
    content: 'Forecast in Q2 does not any better.',
    level: Term.short,
    type: FactType.growth,
  },
];

export const coinCatalysts: Catalyst[] = [
  {
    uuid: 'coin-c-1',
    content: 'NFT market',
    level: Term.long,
  },
  {
    uuid: 'coin-c-2',
    content: 'decentralized finance',
    level: Term.long,
  },
  {
    uuid: 'coin-c-3',
    content: 'Coinbase is trying to diversify its revenue streams.',
    level: Term.long,
  },
];

export const coin: StockAnalysis = {
  uuid: 'coin',
  displayName: 'Coinbase',
  marketCap: 15 * BILLION,
  riskUuids: coinRisks.map((r) => r.uuid),
  catalystUuids: coinCatalysts.map((c) => c.uuid),

  business: {
    markets: [IndustryType.crypto],
    users: [
      { type: 'Retail users: We serve as the users’ primary crypto account' },
      {
        type: 'Institutions: We provide a platform `solution for safely accessing and transacting in crypto markets to institutions',
      },
      {
        type: 'Ecosystem partners: We provide developers, creators, merchants, and asset issuers a platform with technology and services that enables them to build applications that leverage crypto protocols, actively participate in crypto networks, and securely accept cryptocurrencies as payment.',
      },
    ],
    growthStrategy: ['Coinbase grows as the cryptoeconomy grows.'],
  },
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      date: convertDateToUTC(new Date('2022-11-03')),
      totalRevenue: 590.339 * MILLION,
      costOfRevenue: 101.876 * MILLION,
      operatingIncome: -556.484 * MILLION,
      netIncome: -544.635 * MILLION,
      links: [
        {
          name: 'Press Release',
          value:
            'https://investor.coinbase.com/news/news-details/2022/Coinbase-Releases-Third-Quarter-2022-Shareholder-Letter/',
        },
        {
          name: 'Shareholder Letter',
          value:
            'https://s27.q4cdn.com/397450999/files/doc_financials/2022/q3/Q32022-Shareholder-Letter.pdf',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      date: convertDateToUTC(new Date('2022-08-09')),
      totalRevenue: 808.325 * MILLION,
      costOfRevenue: 167.187 * MILLION,
      netIncome: -1093.654 * MILLION,
      operatingIncome: -1044.389 * MILLION,
      links: [
        {
          name: 'Press Release',
          value:
            'https://investor.coinbase.com/news/news-details/2022/Coinbase-Releases-Second-Quarter-2022-Shareholder-Letter/',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      date: convertDateToUTC(new Date('2022-08-09')),
      totalRevenue: 808.325 * MILLION,
      costOfRevenue: 167.187 * MILLION,
      netIncome: -1093.654 * MILLION,
      operatingIncome: -1044.389 * MILLION,
      links: [
        {
          name: 'Press Release',
          value:
            'https://investor.coinbase.com/news/news-details/2022/Coinbase-Releases-Second-Quarter-2022-Shareholder-Letter/',
        },
      ],
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 1166.436 * MILLION,
      costOfRevenue: 277.826 * MILLION,
      totalOperatingExpense: 1720.899 * MILLION,
      netIncome: 429.659 * MILLION,
      operatingIncome: -554.463 * MILLION,
    },
    {
      pressReleaseLink:
        'https://s27.q4cdn.com/397450999/files/doc_financials/2021/q4/Coinbase-Q421-Shareholder-Letter.pdf',
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001679788/8e5e0508-da75-434d-9505-cba99fa00147.pdf',
      stats: [
        {
          name: 'subscription and service',
          value: 200 * MILLION,
        },
      ],
      year: 2021,
      quarter: 4,
      totalRevenue: 2498 * MILLION,
      costOfRevenue: 501 * MILLION,
      grossProfit: 1997 * MILLION,
      sellingGeneralAndAdministrative: 1001 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1576 * MILLION,
      operatingIncome: 922 * MILLION,
      otherIncomeNet: -31 * MILLION,
      netIncomeBeforeTaxes: 890 * MILLION,
      provisionForIncomeTaxes: 50 * MILLION,
      netIncome: 840 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 1311 * MILLION,
      costOfRevenue: 197 * MILLION,
      grossProfit: 1114 * MILLION,
      sellingGeneralAndAdministrative: 700 * MILLION,
      unusualExpenseIncome: 3 * MILLION,
      totalOperatingExpense: 1020 * MILLION,
      operatingIncome: 291 * MILLION,
      otherIncomeNet: -20 * MILLION,
      netIncomeBeforeTaxes: 270 * MILLION,
      provisionForIncomeTaxes: -135 * MILLION,
      netIncome: 406 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 2227 * MILLION,
      costOfRevenue: 335 * MILLION,
      grossProfit: 1892 * MILLION,
      sellingGeneralAndAdministrative: 735 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 1353 * MILLION,
      operatingIncome: 874 * MILLION,
      otherIncomeNet: -5 * MILLION,
      netIncomeBeforeTaxes: 868 * MILLION,
      provisionForIncomeTaxes: -737 * MILLION,
      netIncome: 1606 * MILLION,
      stats: [
        {
          name: 'Subscriptions and Services Revenue ($M)',
          value: 102.6,
        },
        {
          name: 'Monthly Transacting Users MTU (M)',
          value: 8.8,
        },
        {
          name: 'Trading Volume ($B)',
          value: 462,
          details: [
            {
              name: 'Retail ($B)',
              value: 145,
            },
            {
              name: 'Institutional ($B)',
              value: 317,
            },
          ],
        },
        {
          name: 'Asset on Platform ($B)',
          value: 180,
        },
      ],
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 1801 * MILLION,
      costOfRevenue: 234 * MILLION,
      grossProfit: 1567 * MILLION,
      sellingGeneralAndAdministrative: 419 * MILLION,
      unusualExpenseIncome: 3 * MILLION,
      totalOperatingExpense: 813 * MILLION,
      operatingIncome: 987 * MILLION,
      otherIncomeNet: 8 * MILLION,
      netIncomeBeforeTaxes: 996 * MILLION,
      provisionForIncomeTaxes: 225 * MILLION,
      netIncome: 771 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 585 * MILLION,
      costOfRevenue: 49 * MILLION,
      grossProfit: 535 * MILLION,
      sellingGeneralAndAdministrative: 211 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 358 * MILLION,
      operatingIncome: 226 * MILLION,
      otherIncomeNet: 6 * MILLION,
      netIncomeBeforeTaxes: 232 * MILLION,
      provisionForIncomeTaxes: 55 * MILLION,
      netIncome: 176 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 315 * MILLION,
      costOfRevenue: 36 * MILLION,
      grossProfit: 278 * MILLION,
      sellingGeneralAndAdministrative: 156 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 213 * MILLION,
      operatingIncome: 101 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: 102 * MILLION,
      provisionForIncomeTaxes: 21 * MILLION,
      netIncome: 81 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 186 * MILLION,
      costOfRevenue: 23 * MILLION,
      grossProfit: 162 * MILLION,
      sellingGeneralAndAdministrative: 124 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 144 * MILLION,
      operatingIncome: 42 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 38 * MILLION,
      provisionForIncomeTaxes: 6 * MILLION,
      netIncome: 32 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 190 * MILLION,
      costOfRevenue: 25 * MILLION,
      grossProfit: 165 * MILLION,
      sellingGeneralAndAdministrative: 116 * MILLION,
      unusualExpenseIncome: 0 * MILLION,
      totalOperatingExpense: 151 * MILLION,
      operatingIncome: 38 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: 34 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: 31 * MILLION,
    },
  ],

  logo: '',
  name: 'Coinbase',
  description: [
    {
      content: 'Our mission is to increase economic freedom in the world.',
    },
  ],
  ticker: 'coin',
  irAddress: 'https://investor.coinbase.com/home/default.aspx',
  secFilings:
    'https://investor.coinbase.com/financials/sec-filings/default.aspx',
};
