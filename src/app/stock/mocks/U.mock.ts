import { StockAnalysis } from '../models/stock-analysis.model';

export const U: StockAnalysis = {
  logo: '',
  name: 'Unity',
  ticker: 'u',
  ceoQuote: [],
  advantage: [],
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    latestReportQuarter: ['2021', '2'],
    website: 'https://investors.unity.com/overview/default.aspx',
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001810806/48c182aa-c0b5-47dc-b99d-0378bc3db67b.pdf',
        transcript:
          'https://s26.q4cdn.com/977690160/files/doc_financials/2021/q2/Unity-Software-Inc.,-Q2-2021-Earnings-Call,-Aug-10,-2021.pdf',
        record:
          'https://s26.q4cdn.com/977690160/files/doc_multimedia/2021/GMT20210810-210014_Recording_480P.mp4',
        marketCap: 36.4 * 1e9,
        revenue: 273562e3,
        operatingIncome: -149184e3,
      },
    },
    2020: {
      2: {
        revenue: 184331e3,
        operatingIncome: -24845e3,
      },
    },
  },
};
