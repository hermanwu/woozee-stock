import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailyMediumReportDisplayDialogComponent } from 'src/app/news/components/daily-medium-report-display-dialog/daily-medium-report-display-dialog.component';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType, NewsWithDetails } from 'src/app/stock/models/news.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { environment } from 'src/environments/environment';
import { NewsService } from '../../services/news.services';

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
  markets: Industry[];
  showAddNotesSection = false;

  constructor(
    private newsService: NewsService,
    private dialogService: MatDialog
  ) {
    this.news = newsService.getAllNews();

    this.news = this.news.slice(0, 15);
  }

  openDailyReportDialog() {
    this.dialogService.open<DailyMediumReportDisplayDialogComponent>(
      DailyMediumReportDisplayDialogComponent,
      {
        maxHeight: '90vh', //you can adjust the value as per your view
        data: {},
        panelClass: 'medium-modal-panel',
      }
    );
  }

  ngOnInit(): void {}

  openAddNewsDialog() {
    this.showAddNotesSection = true;
    // this.dialogService.open<AddNoteComponent>(AddNoteComponent, {
    //   maxHeight: '90vh', //you can adjust the value as per your view
    //   data: {},
    //   panelClass: 'medium-modal-panel',
    // });
  }
}
