import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Business } from '../components/business-overview/business.model';
import { EarningsReport } from './earnings.model';
import { MyScore } from './herman-score.model';
import { News } from './news.model';
import { Predication } from './predication.model';
import { Rating } from './rating.model';
import { StockStats } from './stock-stats.model';
import { Trend } from './trend.enum';

export interface Product {
  name?: string;
  size?: number;
  markets?: IndustryType[];
  description?: string;
  imageLink?: string;
  url?: string;
}
export interface StockAnalysis {
  uuid?: string;
  logo?: string;
  name?: any;
  shortName?: string;
  displayName?: string;
  description?: any[];
  ticker: string;
  ceoQuote?: string[];
  advantage?: string[];
  riskUuids?: string[];
  catalystUuids?: string[];
  marketCap?: any;
  price?: number;
  // POTENTIALS:
  revenueGrowth?: number;
  PS?: any;
  predications?: Predication[];
  stats?: StockStats;
  propertiesPageEnabled?: boolean;
  irAddress?: string;
  secFilings?: string;
  business?: Business;
  products?: Product[];
  revenues?: any[];
  foundedYear?: number;

  // Demand:
  vision?: string[];
  value?: string[];
  painPoint?: string[]; // for market.
  market?: string[]; // China, US, ETC
  trends?: string[] | Trend[];
  industries?: IndustryType[];

  // Supply:
  moat?: string[]; // As company grows, what moat
  differentiator?: string[];
  companyCulture?: {
    isCeoLed: boolean;
  };

  // Other Reports:

  thoughts?: {
    hermanScore: number;
  };
  earnings?: {}; // TODO: retire this.
  earningsReports?: EarningsReport[];
  forcast?: {};

  score?: MyScore;
  lastUpdated?: Date;
  source?: any;
  companyOfficialDocs?: any[];
  usefulVideos?: any[];
  news?: News[] | any[];
  myRating?: Rating;
  note?: any;
}
