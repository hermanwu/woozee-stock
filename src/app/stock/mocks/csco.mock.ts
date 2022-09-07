import { IndustryType } from 'src/app/facts/data/area.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const csco: StockAnalysis = {
  logo: '',
  name: 'Cisco Systems',
  shortName: 'Cisco',
  description: [],
  ticker: 'CSCO',
  industries: [IndustryType.itSolution],
};
