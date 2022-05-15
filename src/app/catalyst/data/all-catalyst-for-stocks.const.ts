import { Catalyst } from 'src/app/shared/models/booster.interface';
import { afrmCatalysts } from 'src/app/stock/mocks/afrm';
import { coinCatalysts } from 'src/app/stock/mocks/coin';
import { googleCatalysts } from 'src/app/stock/mocks/googl.mock';
import { blockCatalysts } from 'src/app/stock/mocks/sq.mock';

export const allCatalystsForStocks: Catalyst[] = [
  ...blockCatalysts,
  ...coinCatalysts,
  ...googleCatalysts,
  ...afrmCatalysts,
];
