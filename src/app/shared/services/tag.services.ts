import { Injectable } from '@angular/core';
import { userInteractions } from 'src/app/mock-data/interactions.mock';
import { getTagByUuid, Tag, TagType } from '../data/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagServices {
  interactions = [];
  tags = new Map<string, Tag>();

  constructor() {
    this.interactions = userInteractions;
    for (let interaction of this.interactions) {
      if (interaction.listUuids) {
        for (let listUuid of interaction.listUuids) {
          let tag = this.tags.get(listUuid);

          if (tag) {
            tag.totalVotes++;
          } else {
            tag = getTagByUuid(listUuid);
            if (tag) {
              tag.totalVotes = 1;
              this.tags.set(listUuid, tag);
            }
          }
        }
      }
    }
  }

  getTopTags() {
    return Array.from(this.tags.values())
      .filter((tag) => tag.type !== TagType.Portfolio)
      .sort((a, b) => b?.totalVotes - a?.totalVotes);
  }

  formatTags(tags: string[]): string[] {
    return tags.map((tag) =>
      tag.length > 4
        ? `#${this.capitalizeFirstCharacter(tag.trim())}`
        : `#${tag.trim().toUpperCase()}`
    );
  }

  capitalizeFirstCharacter(str) {
    if (str) {
      return str
        .split(' ')
        .map((word) => word.trim()?.[0]?.toUpperCase() + word.slice(1))
        .join('');
    }
  }

  getImagesByTags(tags: string[]): any[] {
    return [];
  }
}
