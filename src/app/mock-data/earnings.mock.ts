import { Stats } from '../shared/components/stats-display/stats-display.interface';

export class Earnings {
  releasedDate?: Date;
  endDate?: string;
  revenue?: Stats;
  pressReleaseLink?: string;
  presentationLink?: string;
  financialTableLink?: string;
  tenQ?: string;
  operatingExpenses?: Stats;
  netIncome?: Stats;
  data?: { [key: string]: Stats };
  quotes?: any[];
  targetUuids?: string[];
  documents?: any[];
  imageLinks?: string[];
  beforeMarketOpen?: boolean;
}
