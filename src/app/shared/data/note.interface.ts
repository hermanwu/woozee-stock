/**
 * Interface for a general notes structure
 */

export enum NoteType {
  Fact = 'action',
  /**
     {
    type: 'stats',
    imageLinks: [],
    title: 'Revenue',
    changePercent: 0.5,
    change: -1000,
    unit: 'dollar',
  },
   */
  Stats = 'number',
  /**
   {
    type: 'action',
    imageLinks: [],
    title: 'Bard',
    tags: ['SaaS', 'AI', 'Chat-GPT'],
    content: '',
    released: 'true',
  },
   */
  Action = 'action',
  Opinion = 'opinion', // To Remove
  Vote = 'vote',
  List = 'list',

  /**
   {
    type: 'questionaine',
    title: 'Moat Questionaire',
    content: '',
  },
   */
  Questionnaire = 'questionnaire',
  /**
   {
    type: 'products',
    imageLinks: [],
    title: 'Bard',
    tags: ['SaaS', 'AI', 'Chat-GPT'],
    content: '',
    released: 'true',
  },
   */
  Product = 'product',
}

export interface List {
  content?: string;
  title?: string;
}
export interface Note {
  authorUuid?: string;
  content?: string;
  createdDate?: Date | string;
  creatorUuid?: string;
  imageLinks?: string[];
  noteType: string | NoteType;
  source?: string;
  sourceLink?: string;
  tagUuids?: string[];
  title?: string;
  updatedDate?: string;
  uuid: string;
  childrenUuids?: string[];
  targets?: string[];
}
