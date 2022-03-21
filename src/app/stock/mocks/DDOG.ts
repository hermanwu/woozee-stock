import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const ddog: StockAnalysis = {
  marketCap: 39 * BILLION,
  risks: [
    {
      name: 'Market size might be too small',
    },
  ],
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 326.2 * 1e6,
      operatingIncome: 8.46 * 1e6,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 270.49 * 1e6,
      operatingIncome: -4.89 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 233.55 * 1e6,
      operatingIncome: -9.89 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 198.55 * 1e6,
      operatingIncome: -12.83 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 177.53 * 1e6,
      operatingIncome: -8.94 * 1e6,
    },
  ],
  logo: '',
  name: 'Datadog',
  description: [],
  ticker: 'ddog',
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
