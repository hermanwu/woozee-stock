import { Note } from 'src/app/shared/data/note.interface';

/**
 * How revenue is from
 */
export enum RevenueType {
  loanInterest = 'Loan Interest Charge',
  salesCommission = 'Sales Commission',
  utilityTransaction = 'Utility Transaction',
  hardwareSelling = 'Hardware Infrastructure',
  softwareSelling = 'Software Services',
  b2b = 'Enterprise',
  subscription = 'Subscription',
  saas = 'SaaS',
  consumptionBased = 'Consumption Based',
  b2c = 'Customer Facing',
}

export interface Revenue {
  name?: string;
  amount?: number;
  type: RevenueType;
  note?: Note;
  children?: Revenue[];
}
