import { StockAnalysis } from '../models/stock-analysis.model';

export const MSFT: StockAnalysis = {
  logo: '',
  name: { English: 'MICROSOFT CORPORATION' },
  description: [],
  ticker: 'MSFT',

  // Earnings Report:
  earnings: {
    website: 'https://www.microsoft.com/en-us/investor',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://view.officeapps.live.com/op/view.aspx?src=https://c.s-microsoft.com/en-us/CMSFiles/MSFT_FY21Q4_10K.docx?version=01062c71-0508-22e2-9fb8-9ecf51bb6378',
        presentation: null,
        press:
          'https://view.officeapps.live.com/op/view.aspx?src=https://c.s-microsoft.com/en-us/CMSFiles/PressReleaseFY21Q4.docx?version=9b030b7b-e98c-6098-249c-b985a4164421',
        webcast: null,
        marketCap: 2.22 * 1e12,
        revenue: 46152 * 1e6,
        operatingIncome: 19095 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 38033 * 1e6,
        operatingIncome: 13407 * 1e6,
      },
    },
  },
};