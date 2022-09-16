import { StatsDisplay } from 'src/app/shared/components/stats-display/stats-display.interface';
import { EventType } from '../../../stock/models/news.model';

export interface InstagramNewsDisplayDialogInput {
  title: string;
  links?: any[];
  type: EventType;
  tags?: string[];
  stats?: StatsDisplay[];
  content?: string[];
  imageLinks?: string[];
  date?: Date;
}
