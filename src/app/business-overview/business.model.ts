import { Note } from 'woozee-lib';
import { Revenue } from '../facts/data/revenue-model.enum';
import { Strategy } from '../facts/data/stratgies.enum';
import { Market } from '../stock/models/market.models';

export enum UserType {
  developer = 'Developer',
}
export interface User {
  type: UserType | string;
  note?: Note;
  amount?: number;
}
export interface Business {
  notes?: any[];
  overview?: string[];
  mission?: string[];
  revenues?: Revenue[];
  markets?: Market[];
  competitiveAdvantages?: Strategy[];
  users?: User[];
  competitions?: string[];
  growthStrategy?: string[];
}
