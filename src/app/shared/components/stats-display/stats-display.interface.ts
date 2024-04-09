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
  euro = 'euro',
  chf = 'CHF',
  hk = 'HK$',
}

export const currencyToDollarConversionMap = {
  dollar: 1,
  rmb: 0.15,
  euro: 1.19,
  CHF: 1.06,
  HK$: 0.13,
};

export enum StatsCategory {
  revenue = 'Revenue',
}

export interface NumberRange {
  low: number;
  high: number;
  average: number;
  updatedDate?: string;
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
