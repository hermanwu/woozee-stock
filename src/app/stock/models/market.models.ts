import { MarketType } from 'src/app/facts/data/area.enum';
import { Note } from 'woozee-lib';

export interface Market {
  type: MarketType;
  size?: number;
  growthRate?: number;
  children?: Market[];
}

export interface BusinessMarket {
  type: MarketType;
  note?: Note;
}
