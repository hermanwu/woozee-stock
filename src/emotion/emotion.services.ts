import { Injectable } from '@angular/core';

export interface Emotion {
  uuid: string;
  userUuid: string;
  saved?: boolean;
  bullish?: number;
  thumbUp?: number;
}

export const mockEmotions: Emotion[] = [];

@Injectable({
  providedIn: 'root',
})
export class EmotionServices {
  topics = new Map();

  constructor() {}

  getEmotionsByUserId(userId: string): Emotion[] {
    return mockEmotions.filter((emotion) => emotion.userUuid === userId);
  }
}
