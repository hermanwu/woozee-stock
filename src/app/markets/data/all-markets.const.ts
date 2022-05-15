import { foodDeliveryMarket } from 'src/app/markets/data/food-delivery-market.const';
import { Market } from 'src/app/stock/models/market.models';
import { crmMarket } from './crm-market.const';
import { cryptoMarket } from './crypto-market.const';
import { dataAnalyticMarket } from './data-analystic-market.const';
import { fintechMarket } from './fintech-market.const';
import { hospitalityMarket } from './hospitality.const';
import { saas } from './saas-market.const';
import { semiconductorMarket } from './semi.const';
import { sharedEconomyMarket } from './shared-economy.const';
import { usMarket } from './us-market.mock';

export const allMarkets: Market[] = [
  foodDeliveryMarket,
  sharedEconomyMarket,
  semiconductorMarket,
  fintechMarket,
  usMarket,
  hospitalityMarket,
  saas,
  crmMarket,
  dataAnalyticMarket,
  cryptoMarket,
];
