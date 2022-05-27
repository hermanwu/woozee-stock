import { beautyCatalysts } from 'src/app/markets/data/beauty-market.const';
import { cryptoMarketCatalysts } from 'src/app/markets/data/crypto-market.const';
import { semiconductorCatalysts } from 'src/app/markets/data/semi.const';
import { Catalyst } from 'src/app/shared/models/booster.interface';

export const marketCatalysts: Catalyst[] = [
  ...semiconductorCatalysts,
  ...cryptoMarketCatalysts,
  ...beautyCatalysts,
];
