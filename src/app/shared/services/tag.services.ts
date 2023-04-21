import { Injectable } from '@angular/core';
import { TopicServices } from 'src/app/industries/services/topic.services';
import { PeopleServices } from 'src/app/people/services/people.services';
import { StockServices } from 'src/app/stock/services/objective-data.service';
import { Tag, TagType } from '../data/tag.model';

const tags = {
  谷歌: 'Google',
  亚马逊: 'Amazon',
  元: 'Meta',
  科技: 'technology',
  互联网: 'internet',
  美联储: 'fed',
  小鹏汽车: 'xpeng',
};
const tagSet = new Set([
  ...Object.values(tags).map((value) => value.toLowerCase()),
  ...Object.keys(tags),
]);

@Injectable({
  providedIn: 'root',
})
export class TagServices {
  constructor(
    private stockServices: StockServices,
    private peopleServices: PeopleServices,
    private topicServices: TopicServices
  ) {}

  getAllTags(): { type: TagType; url: string; keyword: string }[] {
    return [];
  }

  getTags(content: string): string[] {
    const tagsCount = {};

    const tags = content
      ?.split(' ')
      .filter((word) => tagSet.has(word.trim()?.toLowerCase()))
      .map((word) => word.trim()?.toLowerCase());
    // Count tags
    if (tags) {
      tags.forEach((tag) => {
        if (tagsCount[tag]) {
          tagsCount[tag] += 1;
        } else {
          tagsCount[tag] = 1;
        }
      });

      // Sort tags by count
      const sortedArray = [];
      for (let key in tagsCount) {
        sortedArray.push([key, tagsCount[key]]);
      }
      sortedArray.sort((a, b) => b[1] - a[1]);

      return tags;
    }
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

  getTagRelatedDataByUuid(tagUuid: string): Tag {
    let cleanedTagUuid = tagUuid.trim()?.toLowerCase();

    let stock = this.stockServices.getStockByUuid(cleanedTagUuid);

    if (stock) {
      return {
        uuid: tagUuid,
        displayName: stock.displayName,
        imageLink: stock.logoLink,
        type: TagType.Stock,
      };
    }

    let person = this.peopleServices.getPersonByUuid(cleanedTagUuid);

    if (person) {
      return {
        uuid: tagUuid,
        displayName: person.displayName,
        imageLink: person.imageLink,
        type: TagType.People,
      };
    }

    let topic = this.topicServices.getTopicByUuid(cleanedTagUuid);

    if (topic) {
      return {
        uuid: tagUuid,
        displayName: topic.displayName,
        imageLink: topic.imageLink,
        type: TagType.Group,
      };
    }
  }
}
