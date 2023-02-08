import { StockAnalysis } from '../../../stock/models/stock-analysis.model';
import { FactType } from '../../models/fact-type.enum';

export interface RiskCatalystDialogInput {
  factType: FactType;
  stock: StockAnalysis;
}
