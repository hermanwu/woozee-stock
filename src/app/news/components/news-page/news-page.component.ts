import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from 'src/app/accounts/services/user.services';
import { DailyMediumReportDisplayDialogComponent } from 'src/app/news/components/daily-medium-report-display-dialog/daily-medium-report-display-dialog.component';
import { OpinionServices } from 'src/app/notes/services/opinion.services';
import { Note } from 'src/app/shared/data/note.interface';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType } from 'src/app/stock/models/news.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { environment } from 'src/environments/environment';
import { NewsService } from '../../services/news.services';
import { InstagramNewsDisplayDialogComponent } from '../news-display-dialog/news-display-dialog.component';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  environment = environment;
  readonly eventType = EventType;
  showTools: boolean = false;
  news: Note[];
  stocks: StockAnalysis[];
  notes: Note[];
  markets: Industry[];
  showAddNotesSection = false;

  savedNoteUuids = new Set();

  constructor(
    private newsService: NewsService,
    private opinionService: OpinionServices,
    private dialogService: MatDialog,
    private userServices: UserServices
  ) {
    const opinions = opinionService
      .getAllOpinions()
      .map((opinion) => ({ ...opinion, noteType: 'opinion' }));
    const news = newsService.getAllNews();
    this.news = [...opinions, ...news]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 15);

    this.userServices
      .getSavedNotes()
      .map((uuid) => this.savedNoteUuids.add(uuid));
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

  openInstagramDialog(note: Note) {
    this.dialogService.open<InstagramNewsDisplayDialogComponent>(
      InstagramNewsDisplayDialogComponent,
      {
        data: note,
        panelClass: 'medium-modal-panel',
      }
    );
  }
}
