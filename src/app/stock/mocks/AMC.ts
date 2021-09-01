import { StockAnalysis } from '../models/stock-analysis.model';

export const AMC: StockAnalysis = {
  logo: 'AMC',
  name: { English: 'AMC ENTERTAINMENT HOLDINGS, INC.' },
  description: [],
  ticker: 'AMC',

  // Earnings Report:
  earnings: {
    website: 'https://investor.amctheatres.com/corporate-overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001411579/50f0292e-e586-4e2a-82ae-4fb14dcda240.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 23.88 * 1e9,
        revenue: 444.7 * 1e6,
        operatingIncome: -296.6 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 18.9 * 1e6,
        operatingIncome: -471.6 * 1e6,
      },
    },
  },
};
