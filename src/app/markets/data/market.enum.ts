import { RegionCode } from 'src/app/shared/data/enum/region.enum';

export enum MarketType {
  currency = 'Currency',
  stock = 'Stock',
  bond = 'Bond',
  crypto = 'Crypto',
  region = 'Region',
}

export interface Market {
  type: MarketType.region;
  regionCode?: RegionCode;
  rank?: number;
}
