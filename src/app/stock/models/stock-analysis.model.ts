import { BusinessArea } from 'src/app/facts/data/area.enum';
import { RevenueModel } from 'src/app/facts/data/revenue-model.enum';
import { Strategy } from 'src/app/facts/data/stratgies.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
import { News } from '../mocks/news.model';
import { EarningsReport } from './earnings.model';
import { MyScore } from './herman-score.model';
import { Rating } from './rating.model';
import { StockStats } from './stock-stats.model';
import { Trend } from './trend.enum';

export interface StockAnalysis {
  logo?: string;
  name?: any;
  description?: Note[];
  ticker?: string;
  ceoQuote?: string[];
  advantage?: string[];
  risks?: Risk[];
  marketCap?: any;
  // POTENTIALS:
  revenueGrowth?: number;
  PS?: any;
  predication?: {
    marketCap: [string, string];
  };
  stats?: StockStats;
  propertiesPageEnabled?: boolean;
  irAddress?: string;
  links?: any[];
  business?: {
    notes?: any[];
    areas?: BusinessArea[];
    revenues?: RevenueModel[];
    strategies?: Strategy[];
  };

  // Demand:
  vision?: string[];
  value?: string[];
  products?: any[];
  painPoint?: string[]; // for market.
  customers?: string[];
  market?: string[]; // China, US, ETC
  trends?: string[] | Trend[];

  // Supply:
  competitor?: string[];
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
