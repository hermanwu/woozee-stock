import { StockAnalysis } from '../models/stock-analysis.model';

export const shop: StockAnalysis = {
  logo: '',
  name: 'Shopify',
  description: [],
  ticker: 'shop',
  irAddress: 'https://investors.shopify.com/home/default.aspx',
  marketCap: 89.45 * 1e9,
  // Demand
  painPoint: [''],

  // Earnings Report:
  earningsReports: [
    { year: 2022, quarter: 1, isForecast: true, revenue: 1300 * 1e6 },
    {
      year: 2021,
      quarter: 4,
      revenue: 1380.024 * 1e6,
      operatingIncome: 14.404 * 1e6,
      pressReleaseLink:
        'https://news.shopify.com/shopify-announces-fourth-quarter-and-full-year-2021-financial-results',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 1123.74 * 1e6,
      operatingIncome: -4.1 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 1119.44 * 1e6,
      operatingIncome: 139.44 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 988.66 * 1e6,
      operatingIncome: 118.9 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 977.744 * 1e6,
      operatingIncome: 112.541 * 1e6,
    },
  ],

  // note: {

  // },
};
