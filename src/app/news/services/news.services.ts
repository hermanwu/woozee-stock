import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { News } from 'src/app/stock/models/news.model';
import { allNews } from '../data/news.const';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news: News[] = allNews;

  constructor(private userServices: UserServices) {}

  getNewsByLanguage(language: string) {
    if (language === 'cn') {
      return this.news.filter((item) => item.title.match(/[\u3400-\u9FBF]/));
    }

    return this.news.filter((item) => !item.title.match(/[\u3400-\u9FBF]/));
  }

  getAllNews(): News[] {
    const language = this.userServices.getLanguage();
    return this.getNewsByLanguage(language);
  }

  getNewsByDate(date: Date): News[] {
    return this.news.filter((item) => item.date >= convertDateToUTC(date));
  }

  getNewsByTags(tags: string[]) {
    return this.news.filter((item) => item.tags?.some((t) => tags.includes(t)));
  }
}
