import { abnbCatalysts } from 'src/app/mock-data/mocks/abnb';
import { afrmCatalysts } from 'src/app/mock-data/mocks/afrm';
import { amznCatalysts } from 'src/app/mock-data/mocks/amzn.mock';
import { coinCatalysts } from 'src/app/mock-data/mocks/coin';
import { disneyCatalysts } from 'src/app/mock-data/mocks/dis.mock';
import { gmeCatalysts } from 'src/app/mock-data/mocks/gme';
import { googleCatalysts } from 'src/app/mock-data/mocks/googl.mock';
import { blockCatalysts } from 'src/app/mock-data/mocks/sq.mock';
import { tslaCatalysts } from 'src/app/mock-data/mocks/TSLA.mock';
import { ultaCatalysts } from 'src/app/mock-data/mocks/ULTA';
import { Catalyst } from 'src/app/shared/models/booster.interface';

export const allCatalystsForStocks: Catalyst[] = [
  ...blockCatalysts,
  ...coinCatalysts,
  ...googleCatalysts,
  ...afrmCatalysts,
  ...disneyCatalysts,
  ...abnbCatalysts,
  ...tslaCatalysts,
  ...ultaCatalysts,
  ...gmeCatalysts,
  ...amznCatalysts,
];
