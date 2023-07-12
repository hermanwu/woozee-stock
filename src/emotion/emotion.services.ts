import { Injectable } from '@angular/core';
import { Note } from 'src/app/shared/data/note.interface';

export interface Emotion {
  uuid: string;
  userUuid: string;
  saved?: boolean;
  bullish?: number;
  thumbUp?: number;
  noteUuid: string;
}

export interface Sentiment {
  score: number;
}

export const mockEmotions: Emotion[] = [
  {
    uuid: '1',
    userUuid: 'herman.wrt@gmail.com',
    noteUuid: 'dafe59d4-d694-4981-affb-e777745940aa',
    saved: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class EmotionServices {
  topics = new Map();

  constructor() {}

  getEmotionsByUserId(userId: string): Emotion[] {
    return mockEmotions.filter((emotion) => emotion.userUuid === userId);
  }

  /**
   * Get Sentiment from a list of notes
   */
  getSentimentFromNotes(note: Note[]): Sentiment {
    const result = {
      score: 0,
    };

    return result;
  }
}
