import { BusinessArea } from 'src/app/facts/data/area.enum';
import { RevenueModel } from 'src/app/facts/data/revenue-model.enum';
import { Strategy } from 'src/app/facts/data/stratgies.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const abnb: StockAnalysis = {
  logo: '',
  name: 'Airbnb',
  description: [
    {
      content: 'Airbnb is a community based on connection and belonging',
    },
    {
      content:
        'Airbnb’s hosts are the foundation of our community and business',
    },
    {
      content:
        'Airbnb enables hosts to provide guests access to a vast world of unique homes and experiences that were previously inaccessible, or even undiscovered. The role of the host is about more than opening their door. A great host enables guests to find a deeper connection to the places they visit and the people who live there.',
    },
    {
      content:
        'Guest arrivals represent an individual and all co-travelers included on a reservation for a stay for completed check-ins during a given period. Our guests are not transactions — they are engaged, contributing members of our community. ',
    },
  ],
  ticker: 'abnb',
  irAddress: 'https://airbnb2020ipo.q4web.com/home/default.aspx',
  marketCap: 114.41 * 1e9,
  competitors: ['abnb', 'uber', 'bkng'],
  business: {
    areas: [BusinessArea.shared_economy, BusinessArea.travel],
    revenues: [RevenueModel.salesCommission],
    strategies: [Strategy.platform, Strategy.userData, Strategy.feature],
  },
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 1445 * 1e6,
      isForecast: true,
    },
    {
      slidesLink:
        'https://s26.q4cdn.com/656283129/files/doc_financials/2021/q4/Airbnb_Q4-2021-Shareholder-Letter_Final.pdf',
      year: 2021,
      quarter: 4,
      revenue: 1532 * 1e6,
      operatingIncome: 75.567 * 1e6,
    },
    {
      revenue: 2237 * 1e6,
      year: 2021,
      quarter: 3,
    },
    {
      revenue: 1335 * 1e6,
      year: 2021,
      quarter: 2,
    },
    {
      revenue: 887 * 1e6,
      year: 2021,
      quarter: 1,
    },
    {
      revenue: 859.264 * 1e6,
      operatingIncome: -3100.18 * 1e6,
      year: 2020,
      quarter: 4,
    },
    {
      revenue: 334774 * 1e3,
      operatingIncome: -51278 * 1e3,
      year: 2020,
      quarter: 2,
    },
  ],
  risks: [
    {
      name: 'Has not fully recovered to pre-pandemic level',
      notes: [
        {
          content: 'Q4 2021 Nights and experiences booked -3% Y/2Y',
        },
      ],
    },
  ],
};
