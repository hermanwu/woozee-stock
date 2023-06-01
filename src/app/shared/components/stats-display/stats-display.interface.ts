import { Note, NoteType } from '../../data/note.interface';

export enum DisplayType {
  numeric = 'numeric',
  percent = 'percent',
}

export enum TimeFrame {
  yoy = 'yoy',
  mtm = 'mtm',
  qoq = 'qoq',
}

export enum UnitType {
  dollar = 'dollar',
  rmb = 'rmb',
}

export enum StatsCategory {
  revenue = 'Revenue',
}

export interface Stats extends Note {
  uuid: string;
  noteType: string | NoteType;
  name?: string;
  value?: number;
  displayType?: DisplayType;
  changeRate?: number;
  previousValue?: number;
  expectedChangeRate?: number;
  expectedValue?: number;
  timeFrame?: TimeFrame;
  unit?: UnitType;
  statsCategory?: StatsCategory;

  details?: Stats[];
  title?: string;
  tagUuids?: string[];
  creatorUuid?: string;
  createdDate?: string;
}
