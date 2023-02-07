import { Injectable } from '@angular/core';

export enum TagType {
  Investor = 'Investor',
  Stock = 'Stock',
  Market = 'Market',
  Industry = 'Industry',
}
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
  constructor() {}

  getAllTags(): { type: TagType; url: string; keyword: string }[] {
    return [];
  }

  getTags(content: string): string[] {
    console.log(content);
    const tagsCount = {};

    const tags = content
      ?.split(' ')
      .filter((word) => tagSet.has(word.trim()?.toLowerCase()))
      .map((word) => word.trim()?.toLowerCase());
    console.log(tags);
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
}
