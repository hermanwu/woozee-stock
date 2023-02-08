import { Note } from 'src/app/shared/data/note.interface';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Strategy } from 'src/app/stock/components/facts/data/stratgies.enum';

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

export interface Revenue {
  name?: string;
  size?: number;
  type?: IndustryType;
  growthRate?: number;
  children?: Revenue[];
}

export interface User {
  type: UserType | string;
  note?: Note;
  amount?: number;
}
export interface Business {
  overview?: string[];
  missions?: string[];
  markets?: IndustryType[];
  revenues?: Revenue[];
  products?: string[];
  competitiveAdvantages?: Strategy[];
  users?: User[] | string[];
  growthStrategy?: string[];
  productBenefits?: Benefit[];
}
