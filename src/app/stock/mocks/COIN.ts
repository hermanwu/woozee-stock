import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const coin: StockAnalysis = {
  marketCap: 37.17 * BILLION,

  risks: [
    {
      name: 'New user or revenue growth slows down',
      level: RiskLevel.medium,
      type: FactType.growth,
      notes: [
        {
          content:
            'decline in crypto asset volatility and crypt asset price compared to all-time high levels in Q4 2021',
        },
        {
          content: 'Crypt market capitalize n is down over 20%',
        },
        {
          content: ' lower trading volume per retail MTU trends to date in QA',
        },
      ],
    },
    {
      name: 'Crypto transaction related revenue decreases',
      level: RiskLevel.medium,
    },
  ],
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 8.1 * BILLION,
      operatingIncome: 2970 * MILLION,
      activeUserCount: 10 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      revenue: 2.498 * BILLION,
      operatingIncome: 922 * MILLION,
      salesAndMarketingCost: 244.572 * MILLION,
      activeUserCount: 11.4 * MILLION,
      pressReleaseLink:
        'https://s27.q4cdn.com/397450999/files/doc_financials/2021/q4/Coinbase-Q421-Shareholder-Letter.pdf',
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001679788/8e5e0508-da75-434d-9505-cba99fa00147.pdf',
      revenueDetails: [
        {
          name: 'subscription and service',
          value: 200 * MILLION,
        },
      ],
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1311 * MILLION,
      operatingIncome: 291.81 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 2228 * MILLION,
      operatingIncome: 874.73 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 1801 * MILLION,
      operatingIncome: 987.71 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 585 * MILLION,
      operatingIncome: 226.59 * MILLION,
      salesAndMarketingCost: 23.501 * MILLION,
      activeUserCount: 2.8 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 315 * MILLION,
      operatingIncome: 101.5 * MILLION,
    },
  ],

  logo: '',
  name: 'Coinbase',
  shortName: 'Coinbase',
  competitors: ['hood'],
  description: [
    {
      content: 'Our mission is to increase economic freedom in the world.',
    },
  ],
  ticker: 'coin',
  irAddress: 'https://investor.coinbase.com/home/default.aspx',
  secFilings:
    'https://investor.coinbase.com/financials/sec-filings/default.aspx',
  business: {
    markets: [{ type: MarketType.crypto, size: 2321 * BILLION }],
    revenues: [{ type: RevenueType.consumptionBased }],
    users: [
      { type: 'Retail users: We serve as the users’ primary crypto account' },
      {
        type: 'Institutions: We provide a platform solution for safely accessing and transacting in crypto markets to institutions',
      },
      {
        type: 'Ecosystem partners: We provide developers, creators, merchants, and asset issuers a platform with technology and services that enables them to build applications that leverage crypto protocols, actively participate in crypto networks, and securely accept cryptocurrencies as payment.',
      },
    ],
    growthStrategy: ['Coinbase grows as the cryptoeconomy grows.'],
  },
};
