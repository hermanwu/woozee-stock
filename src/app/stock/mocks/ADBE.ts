import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const adbe: StockAnalysis = {
  marketCap: 216.55 * BILLION,
  predications: [
    {
      start: new Date('2022-3-5'),
      days: 120,
      price: 250,
    },
  ],
  irAddress: 'https://www.adobe.com/investor-relations.html',
  logo: '',
  name: 'Adobe',
  description: [],
  ticker: 'adbe',

  business: {
    markets: [
      {
        type: MarketType.saas,
      },
    ],
  },

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 4110.0 * MILLION,
      operatingIncome: 1501.0 * MILLION,
      netIncome: 1233.0 * MILLION,
      pressReleaseLink:
        'https://www.adobe.com/pdf-page.html?pdfTarget=aHR0cHM6Ly93d3cuYWRvYmUuY29tL2NvbnRlbnQvZGFtL2NjL2VuL2ludmVzdG9yLXJlbGF0aW9ucy9wZGZzLzYxMjExMjAyL2E4N2hpdSg2NTc2LnBkZg==',
      reportLink:
        'https://www.adobe.com/investor-relations/financial-documents.html#2021',
      isAnnual: true,
      transcript:
        'https://abc.xyz/investor/static/pdf/2021_Q4_Earnings_Transcript.pdf?cache=0118641',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 3935.0 * MILLION,
      operatingIncome: 21031 * MILLION,
      netIncome: 1441.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 3835.0 * MILLION,
      operatingIncome: 1406.0 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 3905.0 * MILLION,
      operatingIncome: 1454.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 3424.0 * MILLION,
      operatingIncome: 1215.0 * MILLION,
    },
  ],
};
