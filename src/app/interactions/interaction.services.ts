import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';

export interface UserInteractions {
  uuid?: string;
  userUuid: string;
  targetUuid: string;
  type:
    | 'tradable'
    | 'stock'
    | 'product'
    | 'person'
    | 'quote'
    | 'opinion'
    | 'event'
    | 'earnings'
    | 'etf'
    | 'organization'
    | 'tag';

  saved?: boolean;
  bullish?: number;
  bearish?: number;
  thumbUp?: number;
  vote?: number;
  hearted?: number;
  used?: number;
  using?: number;
  targetPrice?: number;
}

export interface Sentiment {
  score: number;
}

@Injectable({
  providedIn: 'root',
})
export class InteractionServices {
  constructor(private userServices: UserServices) {}

  /**
   * Get Sentiment from a list of notes
   */
  getSentimentFromNotes(notes: UserInteractions[]): Sentiment {
    const result = {
      score: 0,
    };

    return result;
  }

  // interaction array: ['id:type:1:time:price#id:type:0:time:price']
}

export class Predication {
  id: string;
  type: string;
  time: number;
  price: number;
  isBullish: boolean;
}
