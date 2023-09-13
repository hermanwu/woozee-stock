import { BILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const okta: StockAnalysis = {
  logoLink: 'https://i.ibb.co/hFPG1rG/OKTA.png',
  largeLogoLink: 'https://i.ibb.co/RTC7vFJ/OKTA-BIG.png',
  name: 'Okta',
  description: [],
  ticker: 'OKTA',
  irAddress: 'https://investor.okta.com/',
  industries: [IndustryType.saas],
  displayName: 'Okta',
  marketCap: 8.1 * BILLION,
};
