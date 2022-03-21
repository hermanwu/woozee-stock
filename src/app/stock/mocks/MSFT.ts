import { StockAnalysis } from '../models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const msft: StockAnalysis = {
  marketCap: capMock.msft,
  logo: '',
  name: 'MICROSOFT CORPORATION',
  description: [],
  ticker: 'msft',
  irAddress: 'https://www.microsoft.com/en-us/investor',
  shortName: 'Microsoft',
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 51.728 * 1e9,
      operatingIncome: 22242 * 1e6,
      pressReleaseLink:
        'https://www.microsoft.com/en-us/investor/earnings/fy-2022-q2/press-release-webcast',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 45317 * 1e6,
      operatingIncome: 20235 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 46152 * 1e6,
      operatingIncome: 19100 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 41706 * 1e6,
      operatingIncome: 17038 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 43076 * 1e6,
      operatingIncome: 17895 * 1e6,
    },
  ],

  risks: [
    {
      name: 'Cloud services decelerate',
    },
  ],
  business: {
    markets: [],
  },
};
