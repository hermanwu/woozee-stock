import { StockAnalysis } from '../models/stock-analysis.model';

export const vmw: StockAnalysis = {
  logo: '',
  name: { English: 'VMware, Inc.' },
  description: [],
  ticker: 'VMW',

  // Earnings Report:
  earnings: {
    website: 'https://ir.vmware.com/websites/vmware/English/1/overview.html',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://ir.vmware.com/websites/vmware/English/5010/us-sec-filing.html?shortDesc=Quarterly%20Report&format=html&secFilingId=b845851a-5bc8-417f-b048-9d6ccf236f4a',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 63.61 * 1e9,
        revenue: 3138 * 1e6,
        operatingIncome: 525 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 2875 * 1e6,
        operatingIncome: 534 * 1e6,
      },
    },
  },
};
