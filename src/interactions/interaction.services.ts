import { Injectable } from '@angular/core';
import { userInteractions } from 'src/app/mock-data/interactions.mock';
import { getTradableItemsByUuids } from 'src/app/mock-data/mocks/tradables.mock';
import { getOrganizationsByUuids } from 'src/app/mock-data/organization.mock';
import { getPeopleByPersonUuids } from 'src/app/mock-data/person.mock';
import {
  getProductsByProductUuids,
  Product,
} from 'src/app/mock-data/product.mock';
import {
  Organization,
  Person,
} from 'src/app/people/components/investor-display/investor-display.component';

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
    | 'earnings';

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

  getInteractionTargets(
    interactions: UserInteractions[]
  ): [any[], Organization[], Product[], Person[]] {
    let tradableItems = [];
    let organizations = [];
    let products = [];
    let people = [];

    for (let interaction of interactions) {
      if (interaction.type === 'tradableItem') {
        tradableItems.push(
          ...getTradableItemsByUuids([interaction.targetUuid])
        );
      } else if (interaction.type === 'stock') {
        organizations.push(
          ...getOrganizationsByUuids([interaction.targetUuid])
        );
      } else if (interaction.type === 'product') {
        products.push(...getProductsByProductUuids([interaction.targetUuid]));
      } else if (interaction.type === 'person') {
        people.push(...getPeopleByPersonUuids([interaction.targetUuid]));
      }
    }

    return [tradableItems, organizations, products, people];
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
