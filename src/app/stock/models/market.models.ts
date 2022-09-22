import { IndustryType } from 'src/app/facts/data/area.enum';
import { StockData } from '../services/stock-data.model';

export interface Industry extends StockData {
  uuid?: string;
  name?: string;
  type: IndustryType;
  size?: number;
  growthRate?: number;
  children?: Industry[];
  tickers?: Set<string>;
  riskUuids?: string[];
  catalystUuids?: string[];
}
