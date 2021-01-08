import { Comment } from './comment.model';
import { News } from './news.model';

export interface Thought {
  date: Date;
  questions: string[];
  news?: News[];
  comments?: Comment[];
  stock: string;
  coverImageLink?: string;
}
