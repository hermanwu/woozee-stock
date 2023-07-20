import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from 'src/app/accounts/services/user.services';
import { DailyMediumReportDisplayDialogComponent } from 'src/app/news/components/daily-medium-report-display-dialog/daily-medium-report-display-dialog.component';
import { AddNoteFormComponent } from 'src/app/notes/components/add-note-form/add-note-form.component';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
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
  filteredNotes: Note[];
  savedNoteUuids = new Set();
  showAddNotesSection = false;
  showTools: boolean = false;
  stocks: StockAnalysis[];

  constructor(
    private newsService: NotesServices,
    private dialogService: MatDialog,
    private userServices: UserServices
  ) {
    this.notes = newsService.getAllNews();
    this.filteredNotes = this.filteredNotesByTypes(
      [NoteType.Opinion, NoteType.Fact, NoteType.Action, NoteType.Stats],
      [...this.notes]
    );
    // this.userServices
    //   .getSavedNotes()
    //   .map((uuid) => this.savedNoteUuids.add(uuid));
  }

  ngOnInit(): void {}

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

    this.filteredNotes = this.filteredNotesByTypes(
      Array.from(this.chips.keys()) as NoteType[],
      this.notes
    );
  };

  filteredNotesByTypes = (types: (NoteType | string)[], notes: Note[]) => {
    let filteredNotes = [...notes];
    if (types?.length > 0) {
      filteredNotes = notes.filter((note) => types.includes(note.noteType));
    }
    return filteredNotes
      .sort(
        (a, b) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      )
      .slice(0, 40);
  };

  addNote() {
    this.dialogService.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {},
      panelClass: 'medium-modal-panel',
      disableClose: true,
    });
  }
}
