import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Fact } from 'src/app/risks/models/fact.model';
import { industryEmojiMap } from 'src/app/shared/data/enum/emoji.enum';
import { TagServices } from 'src/app/shared/services/tag.services';
import { TwitterDisplayDialogComponent } from 'src/app/ui/components/twitter-display-dialog/twitter-display-dialog.component';
import { environment } from 'src/environments/environment';
import { StockMetric } from '../../components/stock-metric-display/stock-metric.enum';
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

  constructor(
    private dialogService: MatDialog,
    private tagService: TagServices
  ) {}

  ngOnChanges(): void {
    if (this.news?.tagUuids?.length) {
      for (let tag of this.news.tagUuids) {
        const tagData = this.tagService.getTagRelatedDataByUuid(tag);
        if (tagData?.imageLink) {
          this.imageLinks.push(tagData);
        }
      }
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
        },
        panelClass: 'medium-modal-panel',
      }
    );
  }
}
