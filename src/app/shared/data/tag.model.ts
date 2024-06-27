export enum TagType {
  People = 'People',
  Trend = 'Trend',
  Business = 'Business',
  Fundamental = 'Fundamental',
  Technical = 'Technical',
}

export interface Tag {
  uuid: string;
  type?: TagType;
  votes?: number;
  displayName?: string;
  name: string;
  stocks?: { [key: string]: any };
  notes?: { [key: string]: any };
  sentiment?: string;
}
