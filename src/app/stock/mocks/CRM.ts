import { BusinessArea } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const crm: StockAnalysis = {
  marketCap: 194 * BILLION,
  earningsReports: [
    {
      year: 2021,
      quarter: 3,
      revenue: 6863 * 1e6,
      operatingIncome: 27 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 6340 * 1e6,
      operatingIncome: 312 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 5963 * 1e6,
      operatingIncome: 340 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 5817 * 1e6,
      operatingIncome: 193 * 1e6,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 5419 * 1e6,
      operatingIncome: 224 * 1e6,
    },
  ],

  logo: '',
  name: 'Salesforce',
  description: [],
  ticker: 'crm',
  lastUpdated: new Date('2021-08-25'),
  irAddress: 'https://investor.salesforce.com/overview/default.aspx',
  secFilings: 'https://investor.salesforce.com/financials/default.aspx',
  business: {
    areas: [BusinessArea.customerOperatingManagement],
    overview: [
      'customer relationship management (“CRM”) technology that brings companies and their customers together.',
      'connect with their customers through digital channels.',
    ],
  },
};
