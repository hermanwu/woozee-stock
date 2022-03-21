import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ttwo: StockAnalysis = {
  marketCap: 18.26 * BILLION,
  risks: [],
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 903.25 * 1e6,
      operatingIncome: 154.11 * 1e6,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 858.2 * 1e6,
      operatingIncome: 20.15 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 813.35 * 1e6,
      operatingIncome: 170.47 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 839.43 * 1e6,
      operatingIncome: 255.82 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 860.89 * 1e6,
      operatingIncome: 176.06 * 1e6,
    },
  ],
  logo: '',
  name: 'Take Two',
  description: [],
  ticker: 'ttwo',
  irAddress: 'https://investors.datadoghq.com/',
  secFilings:
    'https://investors.datadoghq.com/financial-information/sec-filings',

  business: {
    markets: [
      {
        type: MarketType.dataAnalytics,
      },
    ],
    overview: [
      'Datadog is the monitoring and analytics platform for developers, IT operations teams and business users in the cloud age.',
    ],
  },
  competitors: ['pltr', 'snow'],
};
