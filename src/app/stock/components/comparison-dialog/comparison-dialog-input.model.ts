import { FactType } from 'src/app/risks/models/fact-type.enum';
import { StockAnalysis } from '../../models/stock-analysis.model';

export interface ComparisonDialogInput {
  factType: FactType;
  stock: StockAnalysis;
}
