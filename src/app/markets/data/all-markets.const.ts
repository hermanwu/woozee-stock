import { foodDeliveryMarket } from 'src/app/markets/data/food-delivery-market.const';
import { Market } from 'src/app/stock/models/market.models';
import { fintechMarket } from './fintech-market.const';
import { semiconductorMarket } from './semi.const';
import { sharedEconomyMarket } from './shared-economy.const';
import { usMarket } from './us-market.mock';

export const allMarkets: Market[] = [
  foodDeliveryMarket,
  sharedEconomyMarket,
  semiconductorMarket,
  fintechMarket,
  usMarket,
];
