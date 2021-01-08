import { Comment } from './comment.model';
import { newsSource } from './news-source.enum';

export interface News {
  source?: newsSource;
  date?: Date;
  title?: string;
  author?: string;
  keyPoints?: string[];
  relatedStocks?: string[];
  sourceLink?: string;
  comments: Comment[];
}
