import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from 'src/app/accounts/services/user.services';
import { earnings } from 'src/app/mock-data/earnings.mock';
import { events } from 'src/app/mock-data/event.mock';
import { quotes } from 'src/app/mock-data/quote.mock';
import { DailyMediumReportDisplayDialogComponent } from 'src/app/news/components/daily-medium-report-display-dialog/daily-medium-report-display-dialog.component';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType } from 'src/app/stock/models/news.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { StockServices } from 'src/app/stock/services/stock.service';
import { environment } from 'src/environments/environment';
import { NotesServices } from '../../services/notes.services';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  readonly NoteType = NoteType;
  readonly eventType = EventType;
  chips = new Set();
  environment = environment;
  markets: Industry[];
  notes: Note[];
  savedNoteUuids = new Set();
  showAddNotesSection = false;
  showTools: boolean = false;
  stocks: StockAnalysis[];
  quotes: any[];
  earnings: any[];
  events: any[];

  selectedType: string;
  selectedObject: any;

  constructor(
    private newsService: NotesServices,
    private dialogService: MatDialog,
    private userServices: UserServices,
    private stockServices: StockServices
  ) {}

  ngOnInit(): void {
    this.quotes = quotes;
    this.earnings = earnings;
    this.notes = this.newsService.getAllNews();
    this.events = events;

    this.pickRandomNews();
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

  toggleChip = (chip: any) => {
    const addChip = () => {
      this.chips.add(chip);
    };
    const removeChip = () => {
      this.chips.delete(chip);
    };

    this.chips.has(chip) ? removeChip() : addChip();
  };

  pickRandomNews = () => {
    const types = ['quotes', 'earnings', 'opinions', 'events'];

    this.selectedType = types[Math.floor(Math.random() * types.length)];

    switch (this.selectedType) {
      case 'quotes':
        this.selectedObject =
          this.quotes[Math.floor(Math.random() * this.quotes.length)];
        break;
      case 'earnings':
        this.selectedObject =
          this.earnings[Math.floor(Math.random() * this.earnings.length)];
        break;
      case 'opinions':
        this.selectedObject = this.notes[Math.floor(Math.random() * 10)];
        break;
      case 'events':
        this.selectedObject = this.events[Math.floor(Math.random() * 10)];
    }
  };
}
