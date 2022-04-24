import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { UserType } from '../components/business-overview/business.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const hood: StockAnalysis = {
  marketCap: 11.72 * BILLION,
  logo: '',
  name: 'Robinhood',
  description: [],
  ticker: 'hood',
  irAddress: 'https://investors.robinhood.com/overview/default.aspx',
  competitors: ['sq', 'coin'],

  catalysts: [
    {
      name: 'Meme stocks (i.e. GME) trading becomes popular among retail investors.',
      type: FactType.growth,
      level: CatalystLevel.moderate,
      notes: [],
      date: new Date('2022-04-18'),
    },
    {
      name: 'Crypto trading market continues to grow',
      type: FactType.growth,
      level: CatalystLevel.moderate,
      date: new Date('2022-04-18'),
      notes: [
        {
          content: 'Cryptocurrencies transaction revenue increased 304% Q/Q',
        },
      ],
    },
  ],

  risks: [
    {
      name: 'Revenues only increased 14% this quarter',
      level: RiskLevel.medium,
      type: FactType.growth,
      notes: [
        {
          content:
            'This is lower than mega tech firm like Google (32%) or Microsoft (20%)',
        },
        {
          content: 'tickers transaction revenue for the quarter decreased 35%',
        },
      ],
    },
    {
      name: 'User growth is stagnating',
      level: RiskLevel.high,
      type: FactType.growth,
      notes: [
        {
          content:
            'Nearly no user growth in the past three quarters. Last three quarters: 22.5M, 22.4M, 22.7M',
        },
      ],
    },
    {
      name: 'Revenue is declining in next quarter forecast',
      level: RiskLevel.high,
      type: FactType.growth,
      notes: [
        {
          content: 'Next quarter revenue decreases 35% in the guidance',
        },
      ],
    },
    {
      name: 'Company is losing money much faster than it can earn.',
      type: FactType.profit,
      level: RiskLevel.high,
      notes: [
        {
          content:
            'Operating expense in the quarter is 226% of the gross profit.',
        },
        {
          content:
            'Yearly operating expense is double the amount of gross profit.',
        },
      ],
    },
  ],

  business: {
    users: [
      {
        type: UserType.retailInvestor,
      },
    ],
  },

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 362 * MILLION,
      costOfRevenue: 29 * MILLION,
      grossProfit: 333 * MILLION,
      sellingGeneralAndAdministrative: 473 * MILLION,
      researchAndDevelopment: 280 * MILLION,
      totalOperatingExpense: 783 * MILLION,
      operatingIncome: -420 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -420 * MILLION,
      provisionForIncomeTaxes: 2 * MILLION,
      netIncome: -423 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 364 * MILLION,
      costOfRevenue: 44 * MILLION,
      grossProfit: 320 * MILLION,
      sellingGeneralAndAdministrative: 985 * MILLION,
      researchAndDevelopment: 679 * MILLION,
      totalOperatingExpense: 1708 * MILLION,
      operatingIncome: -1343 * MILLION,
      otherIncomeNet: -23 * MILLION,
      netIncomeBeforeTaxes: -1366 * MILLION,
      provisionForIncomeTaxes: -50 * MILLION,
      netIncome: -1316 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 565 * MILLION,
      costOfRevenue: 37 * MILLION,
      grossProfit: 527 * MILLION,
      sellingGeneralAndAdministrative: 306 * MILLION,
      researchAndDevelopment: 156 * MILLION,
      totalOperatingExpense: 500 * MILLION,
      operatingIncome: 64 * MILLION,
      otherIncomeNet: -528 * MILLION,
      netIncomeBeforeTaxes: -464 * MILLION,
      provisionForIncomeTaxes: 37 * MILLION,
      netIncome: -501 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 522 * MILLION,
      costOfRevenue: 41 * MILLION,
      grossProfit: 481 * MILLION,
      sellingGeneralAndAdministrative: 305 * MILLION,
      researchAndDevelopment: 116 * MILLION,
      totalOperatingExpense: 463 * MILLION,
      operatingIncome: 58 * MILLION,
      otherIncomeNet: -1491 * MILLION,
      netIncomeBeforeTaxes: -1433 * MILLION,
      provisionForIncomeTaxes: 11 * MILLION,
      netIncome: -1444 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 317 * MILLION,
      costOfRevenue: 30 * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 185 * MILLION,
      researchAndDevelopment: 81 * MILLION,
      totalOperatingExpense: 298 * MILLION,
      operatingIncome: 19 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 19 * MILLION,
      provisionForIncomeTaxes: 6 * MILLION,
      netIncome: NaN * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 269 * MILLION,
      costOfRevenue: 31 * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 193 * MILLION,
      researchAndDevelopment: 55 * MILLION,
      totalOperatingExpense: 280 * MILLION,
      operatingIncome: -10 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -10 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: NaN * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 244 * MILLION,
      costOfRevenue: 28 * MILLION,
      grossProfit: NaN * MILLION,
      sellingGeneralAndAdministrative: 112 * MILLION,
      researchAndDevelopment: 44 * MILLION,
      totalOperatingExpense: 186 * MILLION,
      operatingIncome: 58 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: 58 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: NaN * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 127 * MILLION,
      costOfRevenue: 20 * MILLION,
      grossProfit: 107 * MILLION,
      sellingGeneralAndAdministrative: 126 * MILLION,
      researchAndDevelopment: 33 * MILLION,
      totalOperatingExpense: 180 * MILLION,
      operatingIncome: -52 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -52 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -52 * MILLION,
    },
  ],
};
