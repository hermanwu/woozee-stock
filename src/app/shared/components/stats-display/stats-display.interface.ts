export enum DisplayType {
  numeric = 'numeric',
  percent = 'percent',
}

export enum TimeFrame {
  yoy = 'yoy',
  mtm = 'mtm',
  qoq = 'qoq',
  weekOverWeek = 'weekOverWeek',
}

export enum UnitType {
  dollar = 'dollar',
  rmb = 'rmb',
}

export enum StatsCategory {
  revenue = 'Revenue',
}

export interface Stats {
  statues?: [string, number][];

  name?: string;
  value?: number;
  displayType?: DisplayType;
  changeRate?: number;
  previousValue?: number;
  expectedChangeRate?: number;
  expectedValue?: number;
  timeFrame?: TimeFrame | string;
  unit?: UnitType | string;
  statsCategory?: StatsCategory;
  tagUuids?: string[];
  creatorUuid?: string;
  createdDate?: string;
  quarterOverQuarterValue?: number;
  data?: Stats[];
}
