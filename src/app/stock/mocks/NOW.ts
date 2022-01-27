import { StockAnalysis } from '../models/stock-analysis.model';

export const NOW: StockAnalysis = {
  logo: '',
  name: { English: 'ServiceNow' },
  description: [],
  ticker: 'NOW',

  // Earnings Report:
  earnings: {
    website: 'https://www.servicenow.com/company/investor-relations.html',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://servicenow.gcs-web.com/static-files/4aeb11bc-1575-4bbf-84b2-21bbe5bd0d42',
        presentation:
          'https://www.servicenow.com/content/dam/servicenow/other-documents/investor-relations/investor-presentations/servicenow-q2-2021-investor-presentation.pdf',
        press: null,
        webcast: null,
        marketCap: 125.28 * 1e9,
        revenue: 1409 * 1e6,
        operatingIncome: 51 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 1071 * 1e6,
        operatingIncome: 63 * 1e6,
      },
    },
  },
  risks: [
    {
      name: 'PE is high (482)',
    },
  ],
};
