import { Comment } from '../models/comment.model';
import { newsSource } from '../models/news-source.enum';

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
