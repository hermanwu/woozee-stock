import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const nvax: StockAnalysis = {
  logo: '',
  name: { English: 'Novavax, Inc.' },
  description: [],
  ticker: 'NVAX',

  // Earnings Report:
  earnings: {
    website: 'https://ir.novavax.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://app.quotemedia.com/data/downloadFiling?webmasterId=101533&ref=116042444&type=PDF&symbol=NVAX&companyName=Novavax+Inc.&formType=10-Q&dateFiled=2021-08-05&CK=1000694',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 18.48 * 1e9,
        totalRevenue: 298.017 * 1e6,
        operatingIncome: -345.829 * 1e6,
      },
    },
    2020: {
      2: {
        totalRevenue: 35.538 * 1e6,
        operatingIncome: -17.027 * 1e6,
      },
    },
  },
};
