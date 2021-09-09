import { StockAnalysis } from '../models/stock-analysis.model';

export const TSM: StockAnalysis = {
  logo: '',
  name: { English: 'Taiwan Semiconductor Manufacturing Company Limited' },
  description: [],
  ticker: 'TSM',

  // Earnings Report:
  earnings: {
    website: 'https://investor.tsmc.com/english',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2021-07/9569f2662ae0f3983455ad377b6c280825899d01/FS.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 591.61 * 1e9,
        revenue: 372145 * 1e6 * 0.036,
        operatingIncome: 145667 * 1e6 * 0.036,
      },
    },
    2020: {
      2: {
        revenue: 310699 * 1e6 * 0.036,
        operatingIncome: 131094 * 1e6 * 0.036,
      },
    },
  },
};
