import { StockAnalysis } from '../models/stock-analysis.model';

export const Z: StockAnalysis = {
  logo: '',
  name: 'Zillow',
  ticker: 'Z',
  ceoQuote: [],
  advantage: [],
  risk: [],
  marketCap: 25.33 * 1e9,
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    2021: {
      2: {
        revenue: 1309980e3,
        operatingIncome: 61725e3,
        '10q':
          'https://abc.xyz/investor/static/pdf/20210728_alphabet_10Q.pdf?cache=28df405',
        transcript:
          'https://abc.xyz/investor/static/pdf/2021_Q2_Earnings_Transcript.pdf?cache=1fcb27b',
        record: 'https://www.youtube.com/watch?v=4ku-6h3vuNw',
      },
    },
    2020: {
      2: {
        revenue: 768352e3,
        operatingIncome: -62685e3,
        unit: 1e3,
      },
    },
  },
};
