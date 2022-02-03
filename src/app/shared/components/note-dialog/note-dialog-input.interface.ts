import { Note } from 'src/app/stock/models/note.model';

export interface NoteDialogInput {
  notes: Note[];
  title: string;
  isExpanded: boolean;
}
