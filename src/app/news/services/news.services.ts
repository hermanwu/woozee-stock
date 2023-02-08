import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Note } from 'src/app/shared/data/note.interface';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { allNews } from '../../mock-data/news.const';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news: Note[] = allNews;

  constructor(private userServices: UserServices) {}

  getNewsByLanguage(language: string) {
    if (language === 'cn') {
      return this.news.filter((item) => item.title.match(/[\u3400-\u9FBF]/));
    }

    return this.news.filter((item) => !item.title.match(/[\u3400-\u9FBF]/));
  }

  getAllNews(): Note[] {
    const language = this.userServices.getLanguage();
    return this.getNewsByLanguage(language);
  }

  getNewsByDate(date: Date): Note[] {
    return this.news.filter((item) => item.date >= convertDateToUTC(date));
  }

  getNewsByTags(tags: string[]) {
    return this.news.filter((item) => item.tags?.some((t) => tags.includes(t)));
  }
}
