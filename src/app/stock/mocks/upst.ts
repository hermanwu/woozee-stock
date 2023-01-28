import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';
import { StockAnalysis } from '../models/stock-analysis.model';

export const upst: StockAnalysis = {
  logo: '',
  name: { English: 'Upstart Holdings Inc' },
  description: [],
  ticker: 'UPST',
  irAddress: 'https://ir.upstart.com/',

  // Earnings Report:
  earnings: [
    {
      year: 2022,
      quarter: 3,
      date: getUtcDate(2022, 11, 8),
      links: [
        {
          name: 'Earnings Release',
          value:
            'https://ir.upstart.com/static-files/3fe3702b-410d-4696-a0eb-c8d45cedb51b',
        },
      ],
    },
  ],
};
