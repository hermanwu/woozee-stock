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
export interface Note {
  authorUuid?: string;
  content?: string;
  createdDate?: string;
  creatorUuid?: string;
  imageLinks?: string[];
  noteType: string | NoteType;
  source?: string;
  sourceLink?: string;
  tagUuids?: string[];
  title?: string;
  updatedDate?: string;
  uuid: string;
}
