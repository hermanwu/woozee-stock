import { Note } from 'src/app/shared/data/note.interface';

export interface Holding {
  ticker: string;
  amount?: number;
}

export enum Strategy {
  sellCoveredPutWithPremiumToStock = 'Sell covered put and add premium to stock owning',
  sellCoveredCallWithPremiumToStock = 'Sell covered call and add premium to stock owning',
  callSpread = 'Call Spread',
  putSpread = 'Put Spread',
  spTrading = 'S&P Trading',
}
export interface Portfolio {
  riskUuids?: string[];
  catalystUuids?: string[];
  name: string;
  notes?: Note[];
  holdings?: Holding[];
  strategies?: Strategy[];
}
