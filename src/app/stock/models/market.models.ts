import { IndustryType } from 'src/app/facts/data/area.enum';
import { StockData } from '../services/stock-data.model';

export interface Market extends StockData {
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
