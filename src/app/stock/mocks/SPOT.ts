import { euroToDollar } from 'src/app/shared/currency';
import { StockAnalysis } from '../models/stock-analysis.model';

export const SPOT: StockAnalysis = {
  logo: '',
  name: { English: 'Spotify Technology S.A.' },
  description: [],
  ticker: 'SPOT',

  // Earnings Report:
  earnings: {
    website: 'https://investors.spotify.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://s22.q4cdn.com/540910603/files/doc_financials/2021/q2/0473c6fe-728a-4bb5-a7c2-36556a5bbf09.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 47.37 * 1e9,
        revenue: 2331 * 1e6 * euroToDollar,
        operatingIncome: 8 * 1e6 * euroToDollar,
      },
    },
    2020: {
      2: {
        revenue: 1889 * 1e6 * euroToDollar,
        operatingIncome: -455 * 1e6 * euroToDollar,
      },
    },
  },
};
