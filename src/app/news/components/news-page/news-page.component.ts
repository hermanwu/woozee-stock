import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailyMediumReportDisplayDialogComponent } from 'src/app/news/components/daily-medium-report-display-dialog/daily-medium-report-display-dialog.component';
import { riskService } from 'src/app/risks/services/subjective-data.service';
import { Market } from 'src/app/stock/models/market.models';
import { EventType, NewsWithDetails } from 'src/app/stock/models/news.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  environment = environment;
  readonly eventType = EventType;
  showTools: boolean = false;
  news: NewsWithDetails[];
  stocks: StockAnalysis[];
  markets: Market[];

  constructor(
    private risksDataService: riskService,
    private dialogService: MatDialog
  ) {
    this.news = risksDataService.getNewsDetails();

    this.news = this.news.slice(0, 20);
  }

  openDailyReportDialog() {
    this.dialogService.open<DailyMediumReportDisplayDialogComponent>(
      DailyMediumReportDisplayDialogComponent,
      {
        data: {},
        panelClass: 'medium-modal-panel',
      }
    );
  }

  ngOnInit(): void {}
}
