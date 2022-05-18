import { Catalyst } from 'src/app/shared/models/booster.interface';
import { abnbCatalysts } from 'src/app/stock/mocks/abnb';
import { afrmCatalysts } from 'src/app/stock/mocks/afrm';
import { coinCatalysts } from 'src/app/stock/mocks/coin';
import { disneyCatalysts } from 'src/app/stock/mocks/dis.mock';
import { googleCatalysts } from 'src/app/stock/mocks/googl.mock';
import { blockCatalysts } from 'src/app/stock/mocks/sq.mock';
import { tslaCatalysts } from 'src/app/stock/mocks/TSLA.mock';

export const allCatalystsForStocks: Catalyst[] = [
  ...blockCatalysts,
  ...coinCatalysts,
  ...googleCatalysts,
  ...afrmCatalysts,
  ...disneyCatalysts,
  ...abnbCatalysts,
  ...tslaCatalysts,
];
