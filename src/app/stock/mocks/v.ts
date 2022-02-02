import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const v: StockAnalysis = {
  logo: '',
  name: 'Visa Inc',
  description: [],
  ticker: 'v',

  risks: [
    {
      name: 'New COVID variant appears and causes country lockdown',
      level: RiskLevel.low,
    },
    {
      name: 'Visa has relatively high PEG value: 2.75',
      level: RiskLevel.low,
      notes: [
        { content: 'Mastercard: 1.8,  Paypal: 1.94, American Express: 0.43' },
      ],
    },
  ],

  // Earnings Report:
  earnings: {},
};
