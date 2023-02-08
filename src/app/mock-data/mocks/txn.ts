import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const txn: StockAnalysis = {
  logo: '',
  name: { English: 'Texas Instruments' },
  description: [],
  ticker: 'TXN',

  // Earnings Report:
  earnings: {},

  risks: [
    {
      name: 'Revenue growth slows',
    },
  ],
};
