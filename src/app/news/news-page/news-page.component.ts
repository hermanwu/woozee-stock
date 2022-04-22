import { Component, OnInit } from '@angular/core';
import { SubjectiveDataService } from 'src/app/risks/services/risks-data.service';
import { NewsWithDetails } from 'src/app/stock/models/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news: NewsWithDetails[];

  constructor(private risksDataService: SubjectiveDataService) {
    this.news = risksDataService.getNewsDetails();
  }

  ngOnInit(): void {}
}
