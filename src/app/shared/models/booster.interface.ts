import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Note } from '../data/note.interface';

export interface Catalyst extends Note {
  name?: string;
  level?: CatalystLevel;
  type?: FactType;
  markets?: MarketType[];
}
