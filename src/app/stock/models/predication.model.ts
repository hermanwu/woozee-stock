export enum PredicationAction {
  Buy = 'Buy',
  Sell = 'Sell',
}

export class BetterOption {
  uuid: string;
  currentStockUuid: string;
  betterOptionUuid: string;
  reasons: string[];
}
export class Predication {
  uuid?: string;
  start?: Date;
  days?: number;
  price?: number;
  action?: PredicationAction;
  stockId?: string;
  betterOptionUuids?: string[];
}
