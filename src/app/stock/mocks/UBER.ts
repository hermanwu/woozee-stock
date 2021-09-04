import { StockAnalysis } from '../models/stock-analysis.model';

export const UBER: StockAnalysis = {
  logo: '',
  name: { English: 'Uber' },
  description: [],
  ticker: 'UBER',

  // Earnings Report:
  earnings: {
    website: 'https://investor.uber.com/home/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001543151/bdaa01ec-4802-424c-87d6-17ab51d3fec9.pdf',
        presentation: '',
        press:
          'https://investor.uber.com/news-events/news/press-release-details/2021/Uber-Announces-Results-for-Second-Quarter-2021/',
        webcast: '',
        marketCap: 76.67 * 1e9,
        revenue: 3929 * 1e6,
        operatingIncome: 640 * 1e6,
      },
    },
    2020: {
      2: {
        revenue: 1913 * 1e6,
        operatingIncome: -1761 * 1e6,
      },
    },
  },
};
