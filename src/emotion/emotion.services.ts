import { Injectable } from '@angular/core';
import { Note } from 'src/app/shared/data/note.interface';

export interface Emotion {
  uuid: string;
  userUuid: string;
  saved?: boolean;
  bullish?: number;
  bearish?: number;
  thumbUp?: number;
  noteUuid: string;
}

export interface Sentiment {
  score: number;
}

export const mockEmotions: Emotion[] = [
  {
    uuid: '1',
    userUuid: 'hwu1106@gmail.com',
    noteUuid: 'dafe59d4-d694-4981-affb-e777745940aa',
    saved: true,
  },
  {
    uuid: '2',
    userUuid: 'hwu1106@gmail.com',
    noteUuid: 'f3314d82-b904-40a8-9fb3-c245d9edfbb5',
    saved: true,
    bullish: 1,
  },
  {
    uuid: '4',
    userUuid: 'hwu1106@gmail.com',
    noteUuid: '700e6257-0182-449f-a567-9ad44f4d7761',
    bullish: 1,
  },
  {
    uuid: '5',
    userUuid: 'hwu1106@gmail.com',
    noteUuid: '79783991-d90b-44f2-8268-5af4efbbe264',
    bearish: 1,
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
  getSentimentFromNotes(notes: Note[]): Sentiment {
    const result = {
      score: 0,
    };

    for (let note of notes) {
      if (note.emotion) {
        result.score += note.emotion.bullish || 0;
        result.score -= note.emotion.bearish || 0;
      }
    }

    return result;
  }
}
