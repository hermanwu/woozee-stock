import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const roku: StockAnalysis = {
  marketCap: 13 * BILLION,
  competitors: ['docu'],
  logo: '',
  name: 'roku, INC.',
  description: [],
  ticker: 'roku',
  shortName: 'Roku',
  irAddress: 'https://www.roku.com/investor',

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 865.33 * MILLION,
      operatingIncome: 21.36 * MILLION,
      isAnnual: true,
      activeUserCount: 60.1 * MILLION,
      pressReleaseLink:
        'https://image.roku.com/c3VwcG9ydC1B/4Q21ShareholderFinal.pdf',
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001428439/11c5daec-ccaf-4308-8159-59dc6efcd8cc.pdf',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 679.95 * MILLION,
      operatingIncome: 68.85 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 645.12 * MILLION,
      operatingIncome: 69.08 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 574.18 * MILLION,
      operatingIncome: 75.81 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 649.89 * MILLION,
      operatingIncome: 65.15 * MILLION,
    },
  ],
};
