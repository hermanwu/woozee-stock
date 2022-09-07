import { IndustryType } from 'src/app/facts/data/area.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ionq: StockAnalysis = {
  shortName: 'IonQ',
  ticker: 'IONQ',

  industries: [IndustryType.quantumComputing],
};
