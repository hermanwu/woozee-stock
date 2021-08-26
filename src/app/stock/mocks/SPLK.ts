import { StockAnalysis } from '../models/stock-analysis.model';

export const SPLK: StockAnalysis = {
  logo: '',
  name: { English: 'Splunk' },
  description: [],
  ticker: 'SPLK',

  // Earnings Report:
  earnings: {
    website: 'https://investors.splunk.com/',
    latestReportQuarter: ['2021', '1'],
    2021: {
      1: {
        '10q':
          'https://investors.datadoghq.com/static-files/69c6fd93-3308-491b-be81-9b642728a091',
        presentation: '',
        press: '',
        webcast: '',
        marketCap: 24.87 * 1e9,
        revenue: 502051 * 1e3,
        operatingIncome: -435347 * 1e3,
        date: new Date('2021-08-06'),
      },
    },
    2020: {
      1: {
        revenue: 434077 * 1e3,
        operatingIncome: -288612 * 1e3,
      },
    },
  },
};
