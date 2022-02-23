import { Business } from 'src/app/business-overview/business.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
import { News } from '../mocks/news.model';
import { EarningsReport } from './earnings.model';
import { MyScore } from './herman-score.model';
import { Predication } from './predication.model';
import { Rating } from './rating.model';
import { StockStats } from './stock-stats.model';
import { Trend } from './trend.enum';

export interface StockAnalysis {
  logo?: string;
  name?: any;
  shortName?: string;
  description?: Note[];
  ticker?: string;
  ceoQuote?: string[];
  advantage?: string[];
  risks?: Risk[];
  marketCap?: any;
  // POTENTIALS:
  revenueGrowth?: number;
  PS?: any;
  predications?: Predication[];
  stats?: StockStats;
  propertiesPageEnabled?: boolean;
  irAddress?: string;
  secFilings?: string;
  tenK?: string;
  business?: Business;
  foundedYear?: number;

  // Demand:
  vision?: string[];
  value?: string[];
  products?: any[];
  painPoint?: string[]; // for market.
  customers?: string[];
  market?: string[]; // China, US, ETC
  trends?: string[] | Trend[];

  // Supply:
  competitors?: string[];
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

  score?: MyScore;
  lastUpdated?: Date;
  source?: any;
  companyOfficialDocs?: Note[];
  usefulVideos?: Note[];
  news?: News[] | Note[];
  myRating?: Rating;
  note?: Note;
}
