import { Note } from 'woozee-lib';
import { Revenue } from '../facts/data/revenue-model.enum';
import { Strategy } from '../facts/data/stratgies.enum';
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
