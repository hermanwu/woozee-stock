import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageServices } from 'src/app/images/services/images.services';
import { NewsDisplayDialogInput } from 'src/app/news-display-dialog/news-display-dialog-input.interface';
import { NewsDisplayDialogComponent } from 'src/app/news-display-dialog/news-display-dialog.component';
import { industryEmojiMap } from 'src/app/shared/data/enum/emoji.enum';
import { StockMetric } from 'src/app/stock-metric-display/stock-metric.enum';
import { TwitterDisplayDialogComponent } from 'src/app/twitter-display-dialog/twitter-display-dialog.component';
import { environment } from 'src/environments/environment';
import { EventType } from '../../models/news.model';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockService } from '../../services/stock.service';
import { NewsDisplay } from './news-display.interface';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnChanges {
  @Input() expanded: boolean;
  @Input() news: NewsDisplay;

  readonly industryEmojiMap = industryEmojiMap;
  readonly eventType = EventType;
  environment = environment;

  imageLink: string;
  stock: StockAnalysis;
  showDetails = false;

  constructor(
    private imageServices: ImageServices,
    private stockServices: StockService,
    private dialogService: MatDialog
  ) {}

  ngOnChanges(): void {
    if (this.news?.tickers?.length) {
      const ticker = this.news.tickers[0];
      this.imageLink = this.imageServices.getImage(ticker);
      this.stock = this.stockServices.getStockByTicker(ticker);
    }
  }

  openDialog() {
    this.dialogService.open<TwitterDisplayDialogComponent>(
      TwitterDisplayDialogComponent,
      {
        data: {
          stock: this.stock,
          type: EventType.earnings,
          title: this.news.title,
          links: this.stock?.earningsReports[0]?.links,
          showTags: true,
          stockMetrics: [
            StockMetric.quarterlyRevenue,
            StockMetric.forecastQuarterlyRevenue,
            StockMetric.operatingExpense,
            StockMetric.operatingMargin,
          ],
        },
        panelClass: 'medium-modal-panel',
      }
    );
  }

  openInstagramDialog() {
    const data: NewsDisplayDialogInput = {
      stock: this.stock,
      type: EventType.earnings,
      showImage: true,
      title: this.news.title,
      showTags: true,

      stockMetrics: [
        StockMetric.quarterlyRevenue,
        StockMetric.forecastQuarterlyRevenue,
        StockMetric.operatingExpense,
        StockMetric.operatingMargin,
      ],
    };

    this.dialogService.open<NewsDisplayDialogComponent>(
      NewsDisplayDialogComponent,
      {
        data: data,
        panelClass: 'medium-modal-panel',
      }
    );
  }
}
