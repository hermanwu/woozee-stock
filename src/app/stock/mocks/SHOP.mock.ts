import { StockAnalysis } from '../models/stock-analysis.model';
import { MidTermTrend } from '../models/trend.enum';

export const SHOP: StockAnalysis = {
  logo: '',
  name: 'Shopify',
  description: [],

  // Demand
  painPoint: [''],
  trend: [MidTermTrend['E-Commerce'], MidTermTrend.COVID],
};
