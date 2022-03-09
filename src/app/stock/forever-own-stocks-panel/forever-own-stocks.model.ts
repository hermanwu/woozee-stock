import { aapl } from '../mocks/aapl.mock';
import { baba } from '../mocks/baba';
import { fb } from '../mocks/fb';
import { googl } from '../mocks/googl.mock';
import { msft } from '../mocks/msft';
import { pltr } from '../mocks/pltr';
import { snow } from '../mocks/snow';
import { tsla } from '../mocks/TSLA.mock';

export const foreverOwnStocks = [tsla, googl, aapl, msft];
export const lowRiskStocks = [baba, fb, pltr];
export const highGrowthStocks = [snow];
