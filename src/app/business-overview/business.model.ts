import { Revenue } from '../facts/data/revenue-model.enum';
import { Strategy } from '../facts/data/stratgies.enum';
import { Note } from '../shared/data/note.interface';
import { Market } from '../stock/models/market.models';

export enum BenefitType {
  accessibility = 'Accessibility',
  efficiency = 'Efficiency',
}

export interface Benefit {
  type: BenefitType;
  note?: string;
}

export enum UserType {
  developer = 'Developer',
  gamer = 'gamer',

  retailInvestor = 'Retail Investor',

  dau = 'Daily Active User',
}
export interface User {
  type: UserType | string;
  note?: Note;
  amount?: number;
}
export interface Business {
  overview?: string[];
  missions?: string[];
  revenues?: Revenue[];
  markets?: Market[];
  competitiveAdvantages?: Strategy[];
  users?: User[];
  growthStrategy?: string[];
  productBenefits?: Benefit[];
}
