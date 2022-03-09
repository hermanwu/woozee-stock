import { FactType } from 'src/app/risks/models/fact-type.enum';
import { RiskLevel } from 'src/app/risks/models/risk-level.model';
import { MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const aapl: StockAnalysis = {
  marketCap: capMock.aapl,
  name: 'Apple',
  description: [],
  trends: [],
  logo: '',
  ticker: 'aapl',
  ceoQuote: [],
  irAddress: 'https://investor.apple.com/investor-relations/default.aspx',
  risks: [
    {
      name: 'iPad sales decreases',
      level: RiskLevel.low,
      type: FactType.growth,
      notes: [
        {
          content:
            'iPad sales decreased by 14% year over year in the first quarter of 2021. Apple says that the drop in sales performance is due to supply constraints',
        },
        {
          content:
            'could be related to demand decreases (like Microsoft surface',
        },
        {
          content: '~5% of total sale',
        },
      ],
    },
    {
      name: 'Supply chain constraint',
      level: RiskLevel.low,
      type: FactType.business,
      notes: [
        {
          content:
            'Based on the earning result, apple was not affected severely',
        },
        {
          content: 'Hard to predict',
        },
      ],
    },
    {
      name: 'High valuation with slow down revenue growth',
      level: RiskLevel.medium,
      type: FactType.valuation,
      notes: [
        {
          content: 'PEG ratio: 3.35',
        },
        {
          content: 'Microsoft: 2.53, Google: 0.65, Amazon: 1.65',
        },
      ],
    },
  ],

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 123945 * MILLION,
      operatingIncome: 41488 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 83360 * MILLION,
      operatingIncome: 24126 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 81434 * MILLION,
      operatingIncome: 24126 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 89584 * MILLION,
      operatingIncome: 27503 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 111439 * MILLION,
      operatingIncome: 33534 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 64698 * MILLION,
      operatingIncome: 14775 * MILLION,
    },
  ],
};
