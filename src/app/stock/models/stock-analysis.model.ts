import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Business } from '../components/business-overview/business.model';
import { EarningsReport } from './earnings.model';
import { MyScore } from './herman-score.model';
import { News } from './news.model';
import { OpinionEnum } from './opinion-type.model';
import { Trend } from './trend.enum';

export interface Product {
  name?: string;
  markets?: IndustryType[];
  description?: string;
  imageLink?: string;
  url?: string;
}
export interface StockAnalysis {
  uuid?: string;
  logoLink?: string;
  largeLogoLink?: string;
  logo?: string;
  name?: any;
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
  propertiesPageEnabled?: boolean;
  irAddress?: string;
  secFilings?: string;
  business?: Business;
  products?: Product[];
  lists?: string[];

  foundedYear?: number;

  // Demand:
  vision?: string[];
  value?: string[];
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
  earnings?: {}; // TODO: retire this.
  earningsReports?: EarningsReport[];
  forcast?: {};

  score?: MyScore;
  lastUpdated?: Date;
  source?: any;
  companyOfficialDocs?: any[];
  usefulVideos?: any[];
  news?: News[] | any[];
  myRating?: OpinionEnum;
  note?: any;
}
