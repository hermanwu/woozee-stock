import { Injectable } from '@angular/core';
import { news } from 'src/app/media/news/news.const';
import { News } from 'src/app/stock/models/news.model';

@Injectable({
  providedIn: 'root',
})
export class MarketsService {
  allNews: News[] = news;

  constructor() {}
}
