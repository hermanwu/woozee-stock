import { IndustryType } from 'src/app/facts/data/area.enum';

export interface Market {
  uuid?: string;
  name?: string;
  type: IndustryType;
  size?: number;
  growthRate?: number;
  children?: Market[];
  tickers?: Set<string>;
  riskUuids?: string[];
  catalystUuids?: string[];
}
