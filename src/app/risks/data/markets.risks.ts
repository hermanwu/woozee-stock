import { foodDeliveryRisks } from 'src/app/markets/data/food-delivery-market.const';
import { sharedEconomyRisks } from 'src/app/markets/data/shared-economy.const';
import { Risk } from '../models/risk.model';

export const marketRisks: Risk[] = [
  ...foodDeliveryRisks,
  ...sharedEconomyRisks,
];
