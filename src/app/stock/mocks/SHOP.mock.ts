import { StockAnalysis } from '../models/stock-analysis.model';

export const SHOP: StockAnalysis = {
  logo: '',
  name: { English: 'Shopify' },
  description: [],
  ticker: 'SHOP',

  // Demand
  painPoint: [''],

  // Earnings Report:
  earnings: {
    website: 'https://investors.shopify.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001594805/9a396d67-9faa-43f1-a425-80333d9d746a.pdf',
        presentation:
          'https://s27.q4cdn.com/572064924/files/doc_presentations/2021/07/Shopify-Investor-Deck-Q2-2021.pdf',
        marketCap: 188.26 * 1e9,
        revenue: 1119445 * 1e3,
        operatingIncome: 139441 * 1e3,
      },
    },
    2020: {
      2: {
        revenue: 714341 * 1e3,
        operatingIncome: 284 * 1e3,
      },
    },
  },
};
