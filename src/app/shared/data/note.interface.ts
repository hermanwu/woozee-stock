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
  Vote = 'vote',
  List = 'list',
}

export interface List {
  content?: string;
  title?: string;
}
export interface Note extends Fact, Opinion, Quote, List {
  noteType: string | NoteType;
  createdDate?: Date;
  updatedDate?: Date;
  sourceLink?: string;
  imageLinks?: string[];
  authorUuid?: string;
  creatorUuid?: string;
}
