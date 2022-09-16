import { foodDeliveryMarket } from 'src/app/markets/data/food-delivery-market.const';
import { Market } from 'src/app/stock/models/market.models';
import { beautyAndCosmeticsMarket } from './beauty-market.const';
import { crmMarket } from './crm-market.const';
import { cryptoMarket } from './crypto-market.const';
import { dataAnalyticMarket } from './data-analystic-market.const';
import { fintechMarket } from './fintech-market.const';
import { hospitalityMarket } from './hospitality.const';
import { saas } from './saas-market.const';
import { semiconductorMarket } from './semi.const';
import { sharedEconomyMarket } from './shared-economy.const';
import { travelMarket } from './travel-market.const';

export const allMarkets: Market[] = [
  foodDeliveryMarket,
  sharedEconomyMarket,
  semiconductorMarket,
  fintechMarket,
  hospitalityMarket,
  saas,
  crmMarket,
  dataAnalyticMarket,
  cryptoMarket,
  travelMarket,
  beautyAndCosmeticsMarket,
];
