import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { updateUuidToTags } from 'src/app/accounts/services/update-uuid-to-tags.function';
import { AddToTagDialogComponent } from 'src/app/add-to-tag-dialog/add-to-tag-dialog.component';
import { InteractionServices } from 'src/app/interactions/interaction.services';
import { AddNoteFormComponent } from 'src/app/notes/components/add-note-form/add-note-form.component';
import { Tag } from 'src/app/shared/data/tag.model';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
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
  stockTickers: string[];
  interactions;

  constructor(
    private route: ActivatedRoute,
    private interactionServices: InteractionServices,
    private userServices: UserServices,
    private searchServices: SearchService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
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
              this.interactions = interactions;

              this.stockTickers = this.tag?.stocks
                ? Object.keys(cloneDeep(this.tag.stocks))
                : [];
              this.stockTickers.sort((a, b) => {
                return (
                  (this.interactions?.[`${b}:tradable`]?.vote || 0) -
                  (this.interactions?.[`${a}:tradable`]?.vote || 0)
                );
              });
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

  addStock() {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    this.dialog.open<AddToTagDialogComponent>(AddToTagDialogComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {
        tagUuid: this.tagUuid,
      },
      width: '600px',
      disableClose: true,
    });
  }

  // delete note and once successful remove from the notes array
  deleteNote(note: { attributeId: string; content: string }) {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    this.userServices.deleteUserNotes(note.attributeId);
  }

  removeStock(stockTicker) {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    let toMerge = updateUuidToTags([this.tagUuid], [], stockTicker, 'stock');

    // If there are no changes to the tags, close the dialog.
    // Make sure nested objects are not empty.
    if (!toMerge || !Object.keys(toMerge).length) {
      return;
    }

    this.userServices
      .setUserData({ tags: toMerge } as any)
      .then(() => {
        const snackBarRef = this.snackBar.open(
          'Removed tag from stock',
          'Dismiss',
          {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          }
        );
      })
      .catch((error) => console.error('Error saving note:', error));
  }
}
