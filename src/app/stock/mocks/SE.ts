import { StockAnalysis } from '../models/stock-analysis.model';

export const SE: StockAnalysis = {
  logo: '',
  name: { English: 'Sea Limited' },
  description: [],
  ticker: 'SE',

  // Earnings Report:
  earnings: {
    website: 'https://www.sea.com/investor',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'http://cdn.sea.com/webmain/static/resource/seagroup/website/investornews/2Q2021/47wCdeAwhAgboSEWXvRo/2021.08.17%20Sea%20Second%20Quarter%202021%20Results.pdf',
        presentation: null,
        press: null,
        webcast: null,
        marketCap: 184.93 * 1e9,
        revenue: 2280.548 * 1e6,
        operatingIncome: -334.016 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 882.034 * 1e6,
        operatingIncome: -372.808 * 1e6,
      },
    },
  },
};
