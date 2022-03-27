import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const crwd: StockAnalysis = {
  marketCap: 39 * BILLION,
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 462 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 431 * MILLION,
      operatingIncome: -23.5 * MILLION,
      activeUserCount: 16325,
      salesAndMarketingCost: 162.594 * MILLION,
      sellingGeneralAndAdministrative: 237 * MILLION,
      pressReleaseLink:
        'https://ir.crowdstrike.com/static-files/df3bb483-e089-4e1c-af9b-f47ec57cdf03',
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 380.05 * 1e6,
      operatingIncome: -40.26 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 337.69 * 1e6,
      operatingIncome: -47.4 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 302.84 * 1e6,
      operatingIncome: -31.35 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 264.93 * 1e6,
      operatingIncome: -15.8 * 1e6,
      sellingGeneralAndAdministrative: 148 * MILLION,
      salesAndMarketingCost: 112.449 * MILLION,

      reportLink:
        'https://ir.crowdstrike.com/static-files/e51971cb-2889-42a1-92be-83982fdbb68f',
      isAnnual: true,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 232.46 * 1e6,
      operatingIncome: -24.16 * 1e6,
    },
  ],
  logo: '',
  name: 'Crowdstrike',
  description: [],
  ticker: 'crwd',
  irAddress: 'https://ir.crowdstrike.com/',
  secFilings: 'https://ir.crowdstrike.com/financial-information/sec-filings',
  business: {
    markets: [{ type: MarketType.saas }],
    revenues: [
      { name: '', type: RevenueType.subscription },
      { name: '', type: RevenueType.professionService },
    ],
    overview: [
      'We founded CrowdStrike in 2011 to reinvent security for the cloud era.',
      'leverages the network effects of crowdsourced data applied to modern technologies such as AI, cloud computing, and graph databases.',
      'collect, process, analyze and correlate vast amounts of high fidelity data across the entire threat lifecycle using a combination of AI and behavioral pattern-matching techniques to stop breaches.',
      'Crowdsource data across  entire customer base and taking advantage of economies of scale, ... enables AI algorithms to be uniquely effective.',
    ],
  },
};
