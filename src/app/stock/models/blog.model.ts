import { Thought } from './thought.model';

export interface Blog {
  date: Date;
  thoughts: Thought[];
}
