import { Note } from 'src/app/shared/data/note.interface';
import { Demand } from '../demands/demand.model';

export interface TechnologyTrend {
  growth?: number;
  marketSize?: number;
  morality?: boolean;
  useCases?: Note[];
  demands: Demand[];
}
