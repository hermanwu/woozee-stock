import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import {
  InteractionServices,
  UserInteractions,
} from 'src/app/interactions/interaction.services';
import { AddNoteFormComponent } from 'src/app/notes/components/add-note-form/add-note-form.component';
import { Tag } from 'src/app/shared/data/tag.model';
import { SearchService } from 'src/app/shared/services/search.services/search.service';
import { UserServices } from '../../accounts/services/user.services';
import { Product } from '../../mock-data/product.mock';
import {
  Organization,
  Person,
} from '../../people/components/investor-display/investor-display.component';
import { Note } from '../../shared/data/note.interface';

@Component({
  selector: 'app-tag-properties-page',
  templateUrl: './tag-properties-page.component.html',
  styleUrls: ['./tag-properties-page.component.scss'],
})
export class TagPropertiesPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  routeSub: Subscription;
  tagUuid: string;
  tag: Tag;
  notes: Note[];
  organizations: Organization[];
  products: Product[];
  people: Person[];
  uuidToInteractionMap;
  stocks = [];
  stockInteractions = [];

  currentUser;

  displayItems: {
    tradableItem: any;
    userInteraction: UserInteractions;
  }[] = [];

  constructor(
    private route: ActivatedRoute,
    private interactionServices: InteractionServices,
    private userServices: UserServices,
    private searchServices: SearchService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.tagUuid = params['tagUuid'].toLowerCase();

      this.userServices
        .getTags()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((tags) => {
          this.tag = tags[this.tagUuid] || null;

          this.userServices.interactions$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((interactions) => {
              this.stockInteractions = [];
              for (const [key, interaction] of Object.entries(interactions)) {
                const [uuid, type] = key.split(':');

                if (type === 'tradable' && this.tag?.stocks?.[uuid]) {
                  this.stockInteractions.push(interaction);
                }
              }

              this.stockInteractions.sort((a, b) => b?.vote - a?.vote);
            });
        });

      this.userServices
        .getUserNotes()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((notes) => {
          this.notes = notes
            .filter((note) => note?.tagUuids?.includes(this.tagUuid))
            .sort((a, b) => b.createdTimestamp - a.createdTimestamp);
        });
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addNote() {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    const url = this.router.url;
    const urlParts = url.split('/').filter((part) => part !== '');
    const lastTwoParts = urlParts.slice(-2);

    let dialogData: { stockTicker?: string; tagUuid?: string } = {};

    if (lastTwoParts.length === 2) {
      const [possibleType, possibleUuid] = lastTwoParts;

      if (possibleType === 'quotes') {
        dialogData.stockTicker = possibleUuid;
      } else if (possibleType === 'tags') {
        dialogData.tagUuid = possibleUuid;
      }
    }

    this.dialog.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: dialogData,
      width: '600px',
      disableClose: true,
    });
  }

  addItemToTag() {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }
  }

  // delete note and once successful remove from the notes array
  deleteNote(note: { attributeId: string; content: string }) {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    this.userServices.deleteUserNotes(note.attributeId);
  }
}
