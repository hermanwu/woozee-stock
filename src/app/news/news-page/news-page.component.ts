import { Component, OnInit } from '@angular/core';
import { riskService } from 'src/app/risks/services/subjective-data.service';
import { Market } from 'src/app/stock/models/market.models';
import { NewsWithDetails } from 'src/app/stock/models/news.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  showTools: boolean = false;
  news: NewsWithDetails[];
  stocks: StockAnalysis[];
  markets: Market[];

  constructor(private risksDataService: riskService) {
    this.news = risksDataService.getNewsDetails();

    this.news = this.news.slice(0, 5);
  }

  ngOnInit(): void {}
}
