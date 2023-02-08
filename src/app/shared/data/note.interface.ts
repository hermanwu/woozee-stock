import { Quote } from 'src/app/mock-data/mock-opinions.data';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { Fact } from 'src/app/risks/models/fact.model';

/**
 * Interface for a general notes structure
 */

export enum NoteType {
  Fact = 'fact',
  Opinion = 'opinion',
  Quote = 'quote',
}
export interface Note extends Fact, Opinion, Quote {
  noteType: string | NoteType;
  createdDate?: Date;
  updatedDate?: Date;
  sourceLink?: string;
  imageLinks?: string[];
  authorUuid?: string;
}
