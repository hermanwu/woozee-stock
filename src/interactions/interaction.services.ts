import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { userInteractions } from 'src/app/mock-data/interactions.mock';

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
  listUuids?: string[];
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

  getTopTradableInteractions() {
    return userInteractions
      .filter((interaction) => interaction.type === 'tradable')
      .sort((a, b) => (b.vote || 0) - (a.vote || 0))
      .slice(0, 20);
  }

  getUserInteractionsByUserId(userId: string): UserInteractions[] {
    return userInteractions.filter((emotion) => emotion.userUuid === userId);
  }

  getAllUserInteractions(): UserInteractions[] {
    return userInteractions;
  }

  getInteractionByUuid(uuid: string): UserInteractions {
    return userInteractions.find((interaction) => interaction.uuid === uuid);
  }

  /**
   * Get Sentiment from a list of notes
   */
  getSentimentFromNotes(notes: UserInteractions[]): Sentiment {
    const result = {
      score: 0,
    };

    return result;
  }
}
