import { Injectable } from '@angular/core';

export enum TagType {
  Investor = 'Investor',
  Stock = 'Stock',
  Market = 'Market',
  Industry = 'Industry',
}

@Injectable({
  providedIn: 'root',
})
export class TagServices {
  constructor() {}

  getAllTags(): { type: TagType; url: string; keyword: string }[] {
    return [];
  }
}
