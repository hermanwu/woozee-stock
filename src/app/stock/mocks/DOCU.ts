import { StockAnalysis } from '../models/stock-analysis.model';

export const DOCU: StockAnalysis = {
  logo: '',
  name: { English: 'DOCUSIGN, INC.' },
  description: [],
  ticker: 'DOCU',

  // Earnings Report:
  earnings: {
    website: 'https://investor.docusign.com/investors/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001261333/f488efae-41c0-422a-8c71-22f903c4b67f.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 59.28 * 1e9,
        revenue: 511.844 * 1e6,
        operatingIncome: -22.611 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 342.209 * 1e6,
        operatingIncome: -58.635 * 1e6,
      },
    },
  },
};
