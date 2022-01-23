import { Note } from 'src/app/shared/data/note.interface';

export interface Risk {
  name: string;
  notes?: Note[];
  startTime?: Date;
  endTime?: Date;
  solutions?: Note[];
  actions?: Note[];
}
