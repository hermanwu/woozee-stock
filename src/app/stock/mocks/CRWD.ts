import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const crwd: StockAnalysis = {
  marketCap: 37 * BILLION,
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      revenue: 380.05 * 1e6,
      operatingIncome: -40.26 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 337.69 * 1e6,
      operatingIncome: -47.4 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 302.84 * 1e6,
      operatingIncome: -31.35 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 264.93 * 1e6,
      operatingIncome: -15.8 * 1e6,
      reportLink:
        'https://ir.crowdstrike.com/static-files/e51971cb-2889-42a1-92be-83982fdbb68f',
      isAnnual: true,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 232.46 * 1e6,
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
    overview: [
      'We founded CrowdStrike in 2011 to reinvent security for the cloud era.',
      'leverages the network effects of crowdsourced data applied to modern technologies such as AI, cloud computing, and graph databases.',
      'collect, process, analyze and correlate vast amounts of high fidelity data across the entire threat lifecycle using a combination of AI and behavioral pattern-matching techniques to stop breaches.',
      'Crowdsource data across  entire customer base and taking advantage of economies of scale, ... enables AI algorithms to be uniquely effective.',
    ],
  },
};
