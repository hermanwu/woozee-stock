export enum TagType {
  stockTicker = 'Stock Ticker',
}

export interface Tag {
  uuid: string;
  type: TagType;
  displayText: string;
}
