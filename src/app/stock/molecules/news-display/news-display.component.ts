import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageServices } from 'src/app/images/services/images.services';
import { NewsDisplay } from './news-display.interface';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnInit, OnChanges {
  @Input() expanded: boolean;
  @Input() news: NewsDisplay;

  imageLink: string;

  constructor(private imageServices: ImageServices) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.news?.tickers?.length) {
      const ticker = this.news.tickers[0];
      this.imageLink = this.imageServices.getImage(ticker);
    }
  }
}
