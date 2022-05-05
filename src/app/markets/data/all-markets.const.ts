import { foodDeliveryMarket } from 'src/app/markets/data/food-delivery-market.const';
import { Market } from 'src/app/stock/models/market.models';
import { sharedEconomyMarket } from './shared-economy.const';

export const allMarkets: Market[] = [foodDeliveryMarket, sharedEconomyMarket];
