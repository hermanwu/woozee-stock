import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const coin: StockAnalysis = {
  marketCap: 41.02 * BILLION,

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

  business: {
    markets: [MarketType.crypto],
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
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 8.1 * BILLION,
      operatingIncome: 2970 * MILLION,
      activeUserCount: 10 * MILLION,
      isForecast: true,
    },

    {
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
  shortName: 'Coinbase',
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
