import { Opinion } from 'src/app/opinions/components/opinion-display/opinion.interface';
import { Quote } from 'src/app/opinions/data/mock-notes.data';
import { Fact } from 'src/app/risks/models/fact.model';

/**
 * Interface for a general notes structure
 */
export interface Note extends Fact, Opinion, Quote {
  noteType: string;
  createdDate?: Date;
  updatedDate?: Date;
  sourceLink?: string;
  imageLinks?: string[];
}
