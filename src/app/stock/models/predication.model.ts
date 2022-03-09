export enum PredicationAction {
  Buy = 'Buy',
  Sell = 'Sell',
}
export class Predication {
  start: Date;
  days: number;
  price: number;
  action?: PredicationAction;
}
