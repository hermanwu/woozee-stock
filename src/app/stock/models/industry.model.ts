import { IndustryType } from 'src/app/facts/data/area.enum';

export interface Industry {
  uuid?: string;
  name?: string;
  type: IndustryType;
  size?: number;
  growthRate?: number;
  children?: Industry[];
  tickers?: Set<string>;
  riskUuids?: string[];
  catalystUuids?: string[];
  rank?: number;
}
