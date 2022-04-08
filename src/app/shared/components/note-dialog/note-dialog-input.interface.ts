import { Note } from '../../data/note.interface';

export interface NoteDialogInput {
  notes: Note[];
  title: string;
  isExpanded: boolean;
  isActionButtonsHidden: boolean;
}
