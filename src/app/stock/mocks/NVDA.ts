import { BusinessArea } from 'src/app/facts/data/area.enum';
import { RevenueModel } from 'src/app/facts/data/revenue-model.enum';
import { Strategy } from 'src/app/facts/data/stratgies.enum';
import { StockAnalysis } from '../models/stock-analysis.model';

export const nvda: StockAnalysis = {
  logo: '',
  name: 'Nvidia',
  description: [],
  business: {
    areas: [
      BusinessArea.datacenter,
      BusinessArea.gaming,
      BusinessArea.virtualSpace,
      BusinessArea.autoRobotics,
    ],
    revenues: [
      RevenueModel.hardwareSelling,
      RevenueModel.softwareSelling,
      RevenueModel.b2b,
    ],
    strategies: [Strategy.platform, Strategy.tool, Strategy.technology],
  },
  ticker: 'nvda',
  irAddress: 'https://investor.nvidia.com/home/default.aspx',
  marketCap: 662.38 * 1e9,
  competitors: ['amd', 'msft', 'tsla'],
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 8.1 * 1e9,
      operatingIncome: 2970 * 1e6,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      revenue: 7.64 * 1e9,
      operatingIncome: 2970 * 1e6,
      pressReleaseLink:
        'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2022',
      notes: [
        { content: 'Gaming: 3.42B +37%' },
        { content: 'Professional Visualization: 3.26B +71%' },
        { content: 'Virtual: 643M +109%' },
        { content: 'Automotive and Robotics: 125M -14%' },
      ],
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 7103 * 1e6,
      operatingIncome: 2671 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 6507 * 1e6,
      operatingIncome: 2444 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 5661 * 1e6,
      operatingIncome: 1956 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 5003 * 1e6,
      operatingIncome: 1507 * 1e6,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 4726 * 1e6,
      operatingIncome: 1398 * 1e6,
    },
  ],
};
