import { Note } from 'src/app/shared/data/note.interface';

export interface Holding {
  ticker: string;
  amount?: number;
}

export enum Strategy {
  weeklyOption = 'Roll Option Week by Week',
  callSelling = ' Sell Call',
  putSelling = 'Sell Put',
}
export interface Portfolio {
  riskUuids?: string[];
  catalystUuids?: string[];
  name: string;
  notes?: Note[];
  holdings?: Holding[];
  strategies?: Strategy[];
}
