import { Strategy } from 'src/app/facts/data/stratgies.enum';
import { Note } from 'src/app/shared/data/note.interface';
import { Market } from '../../models/market.models';

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
  markets?: Market[];
  revenue?: string[];
  competitiveAdvantages?: Strategy[];
  users?: User[];
  growthStrategy?: string[];
  productBenefits?: Benefit[];
}
