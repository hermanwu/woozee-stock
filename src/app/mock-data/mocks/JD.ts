import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const jd: StockAnalysis = {
  logo: '',
  name: 'JD.com',
  description: [],
  ticker: 'JD',
  irAddress: 'https://ir.jd.com/',
  industries: [IndustryType.ecommerce],
  logoLink:
    'https://pbs.twimg.com/profile_images/1283623975201865728/vqGmQsoQ_400x400.jpg',

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      pressReleaseLink:
        'https://ir.jd.com/static-files/8af445d6-53a1-4452-89ab-0aac50ea8cb4',
    },
  ],
};
