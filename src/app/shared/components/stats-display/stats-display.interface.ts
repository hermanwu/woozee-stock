export enum DisplayType {
  numeric = 'numeric',
  percent = 'percent',
}

export enum TimeFrame {
  yoy = 'yoy',
  mtm = 'mtm',
  qoq = 'qoq',
}

export interface StatsDisplay {
  name?: string;
  value?: number;
  displayType?: DisplayType;
  changeRate?: number;
  previousValue?: number;
  expectedChangeRate?: number;
  expectedValue?: number;
  timeFrame?: TimeFrame;

  details?: StatsDisplay[];
}
