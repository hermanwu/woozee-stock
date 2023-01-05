import { cryptoRisks } from 'src/app/markets/data/crypto-market.const';
import { fintechRisks } from 'src/app/markets/data/fintech-market.const';
import { sharedEconomyRisks } from 'src/app/markets/data/shared-economy.const';
import { travelMarketRisks } from 'src/app/markets/data/travel-market.const';
import { Risk } from '../models/risk.model';

export const marketRisks: Risk[] = [
  ...sharedEconomyRisks,
  ...fintechRisks,
  ...cryptoRisks,
  ...travelMarketRisks,
];
