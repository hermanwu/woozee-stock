import { Injectable } from '@angular/core';
import { userInteractions } from 'src/app/mock-data/opinion.mock';

export interface UserInteractions {
  uuid: string;
  userUuid: string;
  targetUuid: string;
  type: 'stock' | 'product' | 'people' | 'quote' | 'opinion' | 'event';
  saved?: boolean;
  bullish?: number;
  bearish?: number;
  thumbUp?: number;
}

export interface Sentiment {
  score: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmotionServices {
  topics = new Map();

  constructor() {}

  getUserInteractionsByUserId(userId: string): UserInteractions[] {
    return userInteractions.filter((emotion) => emotion.userUuid === userId);
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
