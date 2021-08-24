import { StockAnalysis } from '../models/stock-analysis.model';

export const CRM: StockAnalysis = {
  logo: '',
  name: { English: 'Salesforce' },
  description: [],
  ticker: 'CRM',
  lastUpdated: new Date('2021-08-23'),

  // Earnings Report:
  earnings: {
    website: 'https://investor.salesforce.com/overview/default.aspx',
    latestReportQuarter: ['2021', '1'],
    2021: {
      1: {
        '10q':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001108524/75070e05-dc5e-4b40-99dc-7602eb560ce5.pdf',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 241.24 * 1e9,
        revenue: 5963 * 1e6,
        operatingIncome: 354 * 1e6,
      },
    },
    2020: {
      1: {
        revenue: 4865 * 1e6,
        operatingIncome: -140 * 1e6,
      },
    },
  },
};
