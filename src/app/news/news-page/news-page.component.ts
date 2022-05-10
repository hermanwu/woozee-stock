import { Component, OnInit } from '@angular/core';
import { riskService } from 'src/app/risks/services/subjective-data.service';
import { NewsWithDetails } from 'src/app/stock/models/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news: NewsWithDetails[];

  constructor(private risksDataService: riskService) {
    this.news = risksDataService.getNewsDetails().slice(0, 3);
  }

  ngOnInit(): void {}
}
