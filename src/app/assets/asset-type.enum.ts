import { RegionCode } from '../shared/data/enum/region.enum';

export enum AssetType {
  bond = 'Bond',
  cash = 'Cash',
  crypto = 'Crypto',
  stock = 'Stocks',
  realEstate = 'Real Estate',
}

export interface Asset {
  regionType: RegionCode;
  type: AssetType;
  name?: string;
}
