import { Note } from 'src/app/shared/data/note.interface';

export interface Portfolio {
  tickers?: [];
  riskUuids?: string[];
  catalystUuids?: string[];
  name: string;
  notes?: Note[];
}
