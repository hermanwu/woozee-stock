import { MarketType } from 'src/app/facts/data/area.enum';

export interface Market {
  uuid?: string;
  type: MarketType;
  size?: number;
  growthRate?: number;
  children?: Market[];
  tickers?: Set<string>;
}
