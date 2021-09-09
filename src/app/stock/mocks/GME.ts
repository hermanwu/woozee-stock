import { StockAnalysis } from '../models/stock-analysis.model';

export const GME: StockAnalysis = {
  logo: '',
  name: { English: 'GameStop Corp.' },
  description: [],
  ticker: 'GME',

  // Earnings Report:
  earnings: {
    website: 'https://investor.gamestop.com/home',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'docs.google.com/presentation/d/1Tc5_tR3u30ePL_ZZ9LuAfhUYg2UeFwEmS-EHZBAudeg/edit#slide=id.gdd8abde420_0_0',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 14.29 * 1e9,
        revenue: 1183.4 * 1e6,
        operatingIncome: -58.8 * 1e6,
      },
      1: {
        '10q10k': null,
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 15.29 * 1e9,
        revenue: 1276.8 * 1e6,
        operatingIncome: -40.8 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 942 * 1e6,
        operatingIncome: -85.6 * 1e6,
      },
      1: {
        revenue: 1021 * 1e6,
        operatingIncome: -108 * 1e6,
      },
    },
  },
};
