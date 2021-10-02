import { StockAnalysis } from '../models/stock-analysis.model';

export const wix: StockAnalysis = {
  logo: '',
  name: { English: 'Wix.Com Ltd' },
  description: [],
  ticker: 'WIX',

  // Earnings Report:
  earnings: {
    website: 'https://investors.wix.com/',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k': null,
        presentation: null,
        press:
          'https://cdc1653f-9d28-4ea2-83b5-049c855920e4.usrfiles.com/ugd/cdc165_208a6df3d47c4f0ca5a92ea6a4ef0fe5.pdf',
        webcast: null,
        marketCap: 11.05 * 1e9,
        revenue: 316.406 * 1e6,
        operatingIncome: -43.751 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 236.059 * 1e6,
        operatingIncome: -71.644 * 1e6,
      },
    },
  },
};
