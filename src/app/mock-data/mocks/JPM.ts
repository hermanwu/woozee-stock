import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const jpm: StockAnalysis = {
  logo: '',
  name: 'JPMorgan Chase & Co.',
  description: [],
  ticker: 'jpm',
  irAddress: 'https://www.jpmorganchase.com/ir',

  // Earnings Report:
  earnings: {
    website: 'https://www.jpmorganchase.com/ir',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/quarterly-earnings/2021/2nd-quarter/2Q21-10-Q.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 472.78 * 1e9,
        totalRevenue: 30479 * 1e6,
        operatingIncome: 15097 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 33075 * 1e6,
        operatingIncome: 5660 * 1e6,
      },
    },
  },
};
