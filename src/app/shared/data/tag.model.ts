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
  name: string;
  stocks?: string[];
}
