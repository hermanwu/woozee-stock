import { Component, Input, OnChanges } from '@angular/core';
import { Fact } from 'src/app/risks/models/fact.model';
import { industryEmojiMap } from 'src/app/shared/data/enum/emoji.enum';
import { environment } from 'src/environments/environment';
import { EventType } from '../../models/news.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnChanges {
  @Input() shortVersion: boolean;
  @Input() news: Fact;
  @Input() expanded: boolean;

  readonly industryEmojiMap = industryEmojiMap;
  readonly eventType = EventType;
  environment = environment;

  imageLinks = [];
  stock: StockAnalysis;
  showDetails = false;

  constructor() {}

  ngOnChanges(): void {}
}
