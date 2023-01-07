import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from 'src/app/accounts/services/user.services';
import { ImageServices } from 'src/app/images/services/images.services';
import { InstagramNewsDisplayDialogInput } from 'src/app/news/components/news-display-dialog/news-display-dialog-input.interface';
import { InstagramNewsDisplayDialogComponent } from 'src/app/news/components/news-display-dialog/news-display-dialog.component';
import { stockTagsMock } from 'src/app/shared/data/const/tag.mock';
import { industryEmojiMap } from 'src/app/shared/data/enum/emoji.enum';
import { TwitterDisplayDialogComponent } from 'src/app/twitter-display-dialog/twitter-display-dialog.component';
import { environment } from 'src/environments/environment';
import { StockMetric } from '../../components/stock-metric-display/stock-metric.enum';
import { EventType } from '../../models/news.model';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockServices } from '../../services/objective-data.service';
import { NewsDisplay } from './news-display.interface';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnChanges {
  @Input() shortVersion: boolean;
  @Input() news: NewsDisplay;
  @Input() expanded: boolean;

  readonly industryEmojiMap = industryEmojiMap;
  readonly eventType = EventType;
  environment = environment;

  imageLink: string;
  stock: StockAnalysis;
  showDetails = false;

  constructor(
    private imageServices: ImageServices,
    private stockServices: StockServices,
    private dialogService: MatDialog,
    private userService: UserServices
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
          links: this.stock?.earningsReports?.[0]?.links,
          sourceLink: this.news.sourceLink,
          stockMetrics: [
            StockMetric.quarterlyRevenue,
            StockMetric.forecastQuarterlyRevenue,
            StockMetric.operatingExpense,
            StockMetric.operatingMargin,
          ],
          tags: [...(this.news?.tags ? this.news.tags : []), ...stockTagsMock],
          content: this.news.content,
          takeAway: this.news.takeAway,
          stats: this.news.stats,
        },
        panelClass: 'medium-modal-panel',
      }
    );
  }

  openInstagramDialog() {
    const data: InstagramNewsDisplayDialogInput = {
      title: this.news.title,
      links: this.stock?.earningsReports?.[0]?.links,
      eventType: this.news.eventType,
      tags: [...this.news.tags, ...stockTagsMock],
      content: this.news.content,
      stats: this.news.stats,
      date: this.news.date,
      imageLinks: this.news.imageLinks,
    };

    this.dialogService.open<InstagramNewsDisplayDialogComponent>(
      InstagramNewsDisplayDialogComponent,
      {
        data: data,
        panelClass: 'medium-modal-panel',
      }
    );
  }
}
