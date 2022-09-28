import { StatsDisplay } from '../shared/components/stats-display/stats-display.interface';
import { StockMetric } from '../stock/components/stock-metric-display/stock-metric.enum';
import { EventType } from '../stock/models/news.model';
import { StockAnalysis } from '../stock/models/stock-analysis.model';

export interface TwitterDisplayDialogInput {
  stock: StockAnalysis;
  title: string;
  links?: any[];
  showImage?: boolean;
  type: EventType;
  content?: string[];
  stockMetrics?: StockMetric[];
  sourceLink?: string;
  tags?: string[];
  stats?: StatsDisplay[];
  takeAway?: string;
}
