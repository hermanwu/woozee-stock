import { Note } from '../shared/data/note.interface';

export interface Quote extends Note {
  content?: string;
  title?: string;
  question?: string;
  authorUuid?: string;
  sourceLink?: string;
}
