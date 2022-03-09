import { MarketType } from 'src/app/facts/data/area.enum';

export interface Market {
  type: MarketType;
  size?: number;
  growthRate?: number;
  children?: Market[];
}
