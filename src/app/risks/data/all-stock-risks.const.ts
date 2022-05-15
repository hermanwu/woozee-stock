import { afrmRisks } from 'src/app/stock/mocks/afrm';
import { coinRisks } from 'src/app/stock/mocks/coin';
import { blockRisks } from 'src/app/stock/mocks/sq.mock';

export const allStockRisks = [...blockRisks, ...coinRisks, ...afrmRisks];
