import { fintechRisks } from 'src/app/markets/data/fintech-market.const';
import { foodDeliveryRisks } from 'src/app/markets/data/food-delivery-market.const';
import { sharedEconomyRisks } from 'src/app/markets/data/shared-economy.const';
import { usMarketRisks } from 'src/app/markets/data/us-market.mock';
import { Risk } from '../models/risk.model';

export const marketRisks: Risk[] = [
  ...foodDeliveryRisks,
  ...sharedEconomyRisks,
  ...fintechRisks,
  ...usMarketRisks,
];
