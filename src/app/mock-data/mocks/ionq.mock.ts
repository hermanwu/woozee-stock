import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const ionq: StockAnalysis = {
  shortName: 'IonQ',
  ticker: 'IONQ',

  industries: [IndustryType.quantumComputing],
};
