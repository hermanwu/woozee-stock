import { Source } from 'src/app/stock/models/news-source.enum';

/**
 * Interface for a general notes structure
 */
export interface Note {
  content?: string | any;
  // Determine whether it is a question.
  isQuestion?: boolean;

  source?: Source | string;
  link?: string;
  imageLink?: string;
  tags?: string[];

  notes?: Note[];
  createdDate?: Date;
  updatedDate?: Date;
}
