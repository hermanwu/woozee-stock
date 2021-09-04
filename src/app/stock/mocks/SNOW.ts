import { StockAnalysis } from '../models/stock-analysis.model';

export const SNOW: StockAnalysis = {
  logo: '',
  name: { English: 'Snowflake' },
  description: [],
  ticker: 'SNOW',

  // Earnings Report:
  earnings: {
    website: 'https://investors.snowflake.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': '',
        presentation:
          'https://s26.q4cdn.com/463892824/files/doc_financials/2022/q2/Q2-FY22-Snowflake-Investor-Presentation_Final-(2).pdf',
        press: '',
        webcast: '',
        marketCap: 88.06 * 1e9,
        revenue: 272198 * 1e3,
        operatingIncome: -200141 * 1e3,
        date: new Date('2021-08-25'),
      },
    },
    2020: {
      2: {
        revenue: 133145 * 1e3,
        operatingIncome: -77683 * 1e3,
      },
    },
  },
};
