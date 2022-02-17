import { FactType } from '../risks/models/fact-type.enum';
import { StockAnalysis } from '../stock/models/stock-analysis.model';

export interface ComparisonDialogInput {
  factType: FactType;
  stock: StockAnalysis;
}
