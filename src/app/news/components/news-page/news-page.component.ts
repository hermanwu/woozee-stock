import { Component, OnInit } from '@angular/core';
import { earnings } from 'src/app/mock-data/earnings.mock';
import { events } from 'src/app/mock-data/events.mock';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
import { TagServices } from 'src/app/shared/services/tag.services';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType } from 'src/app/stock/models/news.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
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
  selectedNote: Note;
  tags = [];
  earnings = earnings
    .sort((a, b) => {
      // Convert date strings to Date objects
      const dateA = new Date(a.releasedDate);
      const dateB = new Date(b.releasedDate);

      // Compare the dates
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 10);
  selectedNoteIndex = 0;
  selectedEarningsIndex = 0;
  events = events.reverse();

  constructor(
    private newsService: NotesServices,
    private tagServices: TagServices
  ) {}

  ngOnInit(): void {
    this.notes = this.newsService.getAllNews().slice(0, 10);
    this.tags = this.tagServices.getTopTags();
  }

  openDailyReportDialog() {
    // this.dialogService.open<DailyMediumReportDisplayDialogComponent>(
    //   DailyMediumReportDisplayDialogComponent,
    //   {
    //     maxHeight: '90vh', //you can adjust the value as per your view
    //     data: {},
    //     panelClass: 'medium-modal-panel',
    //   }
    // );
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
}
