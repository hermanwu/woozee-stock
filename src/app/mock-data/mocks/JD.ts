import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const jd: StockAnalysis = {
  logo: '',
  name: 'JD.com',
  description: [],
  ticker: 'JD',
  irAddress: 'https://ir.jd.com/',
  industries: [IndustryType.ecommerce],

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
