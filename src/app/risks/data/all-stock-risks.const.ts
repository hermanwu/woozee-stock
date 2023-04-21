import { abnbRisks } from 'src/app/mock-data/mocks/abnb';
import { afrmRisks } from 'src/app/mock-data/mocks/afrm';
import { amznRisks } from 'src/app/mock-data/mocks/amzn.mock';
import { disneyRisks } from 'src/app/mock-data/mocks/dis.mock';
import { snowflakeRisks } from 'src/app/mock-data/mocks/snow';
import { blockRisks } from 'src/app/mock-data/mocks/sq.mock';
import { tslaRisks } from 'src/app/mock-data/mocks/TSLA.mock';
import { ultaRisks } from 'src/app/mock-data/mocks/ULTA';

export const allStockRisks = [
  ...blockRisks,
  ...afrmRisks,
  ...disneyRisks,
  ...abnbRisks,
  ...snowflakeRisks,
  ...tslaRisks,
  ...ultaRisks,
  ...amznRisks,
];
