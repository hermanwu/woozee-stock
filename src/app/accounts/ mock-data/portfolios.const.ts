import {
  Portfolio,
  Strategy,
} from '../components/portfolio-list/portfolio.interface';

export const portfolios: Portfolio[] = [
  {
    name: 'Interactive Broker',
    strategies: [Strategy.callSpread],
    riskUuids: ['r1000', 'r2000'],
    catalystUuids: ['c1000'],
  },
  {
    name: 'Herman Robinhood',
    strategies: [Strategy.putSpread, Strategy.spTrading],
  },
  {
    name: 'Jessica Robinhood',
    strategies: [
      Strategy.sellCoveredCallWithPremiumToStock,
      Strategy.sellCoveredPutWithPremiumToStock,
    ],
  },
  {
    name: 'Jessica WeBull',
    strategies: [
      Strategy.sellCoveredCallWithPremiumToStock,
      Strategy.sellCoveredPutWithPremiumToStock,
    ],
  },
];
