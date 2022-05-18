import { MarketType } from 'src/app/facts/data/area.enum';
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
  markets?: MarketType[];
  revenue?: Market[];
  competitiveAdvantages?: Strategy[];
  users?: User[] | string[];
  growthStrategy?: string[];
  productBenefits?: Benefit[];
}
