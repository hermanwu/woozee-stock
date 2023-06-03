export enum TagType {
  stockTicker = 'Stock Ticker',
  People = 'People',
  Stock = 'Stock',
  Market = 'Market',
  Industry = 'Industry',
  Group = 'Group',
}

export interface Tag {
  uuid: string;
  type?: TagType;
  displayName: string;
  imageLink?: string;
  link?: string;
  ticker?: string;
}
