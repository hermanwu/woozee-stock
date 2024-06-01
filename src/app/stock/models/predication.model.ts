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
