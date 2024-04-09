import { Injectable } from '@angular/core';
import { userInteractions } from 'src/app/mock-data/interactions.mock';
import { getTradableItemsByUuids } from 'src/app/mock-data/mocks/tradables.mock';
import { getOrganizationsByUuids } from 'src/app/mock-data/organization.mock';
import { getPeopleByPersonUuids } from 'src/app/mock-data/person.mock';
import { getProductsByProductUuids } from 'src/app/mock-data/product.mock';

export interface UserInteractions {
  uuid: string;
  userUuid: string;
  targetUuid: string;
  type:
    | 'tradableItem'
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
  constructor() {}

  getTopTradableInteractions() {
    return userInteractions
      .filter((interaction) => interaction.type === 'tradableItem')
      .sort((a, b) => (b.vote || 0) - (a.vote || 0))
      .slice(0, 20);
  }

  getInteractionTarget(interaction: UserInteractions): any {
    if (interaction.type === 'tradableItem') {
      return getTradableItemsByUuids([interaction.targetUuid])?.[0];
    } else if (interaction.type === 'stock') {
      return getOrganizationsByUuids([interaction.targetUuid])?.[0];
    } else if (interaction.type === 'product') {
      return getProductsByProductUuids([interaction.targetUuid])?.[0];
    } else if (interaction.type === 'person') {
      return getPeopleByPersonUuids([interaction.targetUuid])?.[0];
    }
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
