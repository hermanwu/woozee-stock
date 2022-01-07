import { Source } from './source.enum';

/**
 * Interface for a general notes structure
 */
export interface Note {
  content: string | any;
  // Determine whether it is a question.
  isQuestion?: boolean;
  source?: Source;

  imageLinks?: string[];
  notes?: Note[];
}
