import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MarketType } from 'src/app/facts/data/area.enum';
import { riskService } from 'src/app/risks/services/subjective-data.service';
import { NewsDisplay } from './news-display.interface';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnInit, OnChanges {
  @Input() expanded: boolean;
  @Input() news: NewsDisplay;

  tickers: string[];
  marketTypes: MarketType[];

  constructor(private riskService: riskService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    const opinions = [];

    if (this.news?.risks?.length > 0) {
      opinions.push(...this.news.risks);
    }

    if (this.news?.catalysts?.length > 0) {
      opinions.push(...this.news.catalysts);
    }
  }
}
