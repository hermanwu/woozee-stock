import { abnbRisks } from 'src/app/stock/mocks/abnb';
import { afrmRisks } from 'src/app/stock/mocks/afrm';
import { coinRisks } from 'src/app/stock/mocks/coin';
import { disneyRisks } from 'src/app/stock/mocks/dis.mock';
import { snowflakeRisks } from 'src/app/stock/mocks/snow';
import { blockRisks } from 'src/app/stock/mocks/sq.mock';
import { tslaRisks } from 'src/app/stock/mocks/TSLA.mock';
import { ultaRisks } from 'src/app/stock/mocks/ULTA';

export const allStockRisks = [
  ...blockRisks,
  ...coinRisks,
  ...afrmRisks,
  ...disneyRisks,
  ...abnbRisks,
  ...snowflakeRisks,
  ...tslaRisks,
  ...ultaRisks,
];
