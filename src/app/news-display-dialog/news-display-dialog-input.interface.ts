import { StockMetric } from '../stock-metric-display/stock-metric.enum';
import { EventType } from '../stock/models/news.model';
import { StockAnalysis } from '../stock/models/stock-analysis.model';

export interface NewsDisplayDialogInput {
  stock: StockAnalysis;
  title: string;
  links?: any[];
  showImage?: boolean;
  type: EventType;
  stockMetrics?: StockMetric[];
  showTags?: boolean;
}
