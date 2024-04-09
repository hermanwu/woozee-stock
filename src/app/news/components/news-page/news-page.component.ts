import { Component, OnInit } from '@angular/core';
import { earnings } from 'src/app/mock-data/earnings.mock';
import { events } from 'src/app/mock-data/events.mock';
import { getTradableItemsByUuids } from 'src/app/mock-data/mocks/tradables.mock';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
import { TagServices } from 'src/app/shared/services/tag.services';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType } from 'src/app/stock/models/news.model';
import { environment } from 'src/environments/environment';
import { InteractionServices } from 'src/interactions/interaction.services';
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
  notes: Note[] = [];
  savedNoteUuids = new Set();
  showAddNotesSection = false;
  showTools: boolean = false;
  selectedNote: Note;
  tags = [];
  earningsDisplays = earnings
    .sort((a, b) => {
      // Convert date strings to Date objects
      const dateA = new Date(a.releasedDate);
      const dateB = new Date(b.releasedDate);

      // Compare the dates
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 10)
    .map((e) => {
      return {
        earnings: e,
        targets: getTradableItemsByUuids(e.targetUuids),
      };
    });
  selectedNoteIndex = 0;
  selectedEarningsIndex = 0;
  dailyEvents = [];
  tradables = [];

  constructor(
    private newsService: NotesServices,
    private tagServices: TagServices,
    private interactionServices: InteractionServices
  ) {}

  ngOnInit(): void {
    // this.notes = this.newsService.getAllNews().slice(0, 10);
    this.tags = this.tagServices.getTrendTags();
    const interactions = this.interactionServices.getTopTradableInteractions();
    this.tradables = getTradableItemsByUuids(
      interactions.map((i) => i.targetUuid)
    );

    this.populateEarnings();
  }

  populateEarnings() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
    sevenDaysLater.setHours(0, 0, 0, 0);

    const nextSevenDaysEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= sevenDaysLater;
    });

    const dailyEventMap = new Map();

    for (let event of nextSevenDaysEvents) {
      const date = new Date(event.date);
      const key = date.toDateString();
      if (!dailyEventMap.has(key)) {
        dailyEventMap.set(key, {
          date: event.date,
          beforeMarketOpen: [],
          afterMarketClose: [],
        });
      }

      const tradables = getTradableItemsByUuids(event.targetUuids);
      if (tradables && tradables.length > 0 && event.beforeMarketOpen) {
        dailyEventMap.get(key)['beforeMarketOpen'].push(...tradables);
      } else if (tradables && tradables.length > 0) {
        dailyEventMap.get(key)['afterMarketClose'].push(...tradables);
      }
    }
    this.dailyEvents = Array.from(dailyEventMap.values()).sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
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
}
