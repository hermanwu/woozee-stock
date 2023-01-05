import { Injectable } from '@angular/core';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { News } from 'src/app/stock/models/news.model';
import { allNews } from '../data/news.const';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news: News[] = allNews;

  constructor() {}

  getNewsByDate(date: Date): News[] {
    return this.news.filter((item) => item.date >= convertDateToUTC(date));
  }

  getNewsByTags(tags: string[]) {
    return this.news.filter((item) => item.tags?.some((t) => tags.includes(t)));
  }
}
