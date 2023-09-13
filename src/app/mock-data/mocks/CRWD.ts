import { BILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const crwd: StockAnalysis = {
  uuid: 'crwd-uuid-1',
  marketCap: 40.57 * BILLION,
  predications: [
    {
      uuid: 'crwd-prediction-1',
      betterOptionUuids: ['better-options-1'],
    },
  ],
  logoLink: 'https://i.ibb.co/VTQgVXD/download.jpg',
  name: 'Crowdstrike',
  displayName: 'Crowdstrike',
  largeLogoLink: 'https://i.ibb.co/D7dS9sS/Dzws42r-X0-AAWJgd.jpg',
  description: [],
  ticker: 'crwd',
  irAddress: 'https://ir.crowdstrike.com/',
  secFilings: 'https://ir.crowdstrike.com/financial-information/sec-filings',
  business: {
    markets: [IndustryType.saas, IndustryType.cybersecurity],
    overview: [
      'We founded CrowdStrike in 2011 to reinvent security for the cloud era.',
      'leverages the network effects of crowdsourced data applied to modern technologies such as AI, cloud computing, and graph databases.',
      'collect, process, analyze and correlate vast amounts of high fidelity data across the entire threat lifecycle using a combination of AI and behavioral pattern-matching techniques to stop breaches.',
      'Crowdsource data across  entire customer base and taking advantage of economies of scale, ... enables AI algorithms to be uniquely effective.',
    ],
  },
};
