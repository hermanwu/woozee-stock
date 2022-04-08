import { MarketType } from 'src/app/facts/data/area.enum';
import { Note } from 'src/app/shared/data/note.interface';

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
