import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

export interface Industry {
  uuid?: string;
  name?: string;
  displayName?: string;
  type: IndustryType;
  size?: number;
  growthRate?: number;
  children?: Industry[];
  tickers?: Set<string>;
  riskUuids?: string[];
  catalystUuids?: string[];
  rank?: number;
  logoLink?: string;
}
