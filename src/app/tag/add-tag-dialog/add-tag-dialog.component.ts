import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Observable, Subject, map, startWith, takeUntil } from 'rxjs';
import { updateUuidToTags } from 'src/app/accounts/services/update-uuid-to-tags.function';
import { UserServices } from '../../accounts/services/user.services';
import { Tag } from '../../shared/data/tag.model';
import { CreateTagDialogComponent } from '../create-tag-dialog/create-tag-dialog.component';

@Component({
  selector: 'app-add-tag-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './add-tag-dialog.component.html',
  styleUrl: './add-tag-dialog.component.scss',
})
export class AddTagDialogComponent implements OnInit, OnDestroy {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags: Observable<Tag[]>;

  selectedTags: Tag[] = [];
  allTags: Tag[] = [];

  private destroy$ = new Subject<void>();

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor(
    private dialog: MatDialog,
    private userServices: UserServices,
    private dialogRef: MatDialogRef<AddTagDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      type: 'note' | 'stock';
      targetUuid: string;
      tagUuids: string[];
    }
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | Tag | null) => {
        // Only filter if user enters a string.
        if (tag && typeof tag === 'string') {
          const filterValue = tag.toLowerCase();
          return this.allTags.filter((t) =>
            t?.name?.toLowerCase()?.includes(filterValue)
          );
        } else {
          return this.allTags.slice();
        }
      }),
      takeUntil(this.destroy$)
    );
  }

  ngOnInit() {
    this.userServices
      .getTags()
      .pipe(takeUntil(this.destroy$))
      .subscribe((tags) => {
        this.allTags = Object.values(tags);

        const selectedTags = this.data.tagUuids
          .map((uuid) => tags[uuid])
          .filter((tag) => tag);

        this.selectedTags = selectedTags;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim().toLowerCase();
    const existingTag = this.allTags.find(
      (tag) => tag.name.toLowerCase() === value
    );

    if (
      existingTag &&
      !this.selectedTags.some((tag) => tag.uuid === existingTag.uuid)
    ) {
      this.selectedTags.push(existingTag);
      event.chipInput!.clear();
      this.tagCtrl.setValue(null);
    }
  }

  remove(tag: Tag): void {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedTag: Tag = event.option.value;

    if (!this.selectedTags.some((tag) => tag.uuid === selectedTag.uuid)) {
      this.selectedTags.push(selectedTag);
      this.tagInput.nativeElement.value = '';
      this.tagCtrl.setValue(null);
    }
  }

  private _filter(value: string): Tag[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter((tag) =>
      tag.name.toLowerCase().includes(filterValue)
    );
  }

  openCreateNewTagDialog() {
    const createTagDialogRef = this.dialog.open<CreateTagDialogComponent>(
      CreateTagDialogComponent,
      {
        maxHeight: '90vh', //you can adjust the value as per your view
        data: {},
        panelClass: '600px',
        disableClose: true,
      }
    );

    createTagDialogRef.afterClosed().subscribe((newTag: any) => {
      if (newTag) {
        this.selectedTags.push(newTag);
      }
    });
  }

  onConfirm() {
    const updatedTagUuids: string[] = this.selectedTags.map((tag) => tag.uuid);
    let toMerge = updateUuidToTags(
      this.data.tagUuids,
      updatedTagUuids,
      this.data.targetUuid,
      this.data.type
    );

    // If there are no changes to the tags, close the dialog.
    // Make sure nested objects are not empty.
    if (!toMerge || !Object.keys(toMerge).length) {
      this.dialogRef.close();
      return;
    }

    this.userServices
      .setUserData({ tags: toMerge } as any)
      .then(() => {
        this.dialogRef.close(updateUuidToTags);
      })
      .catch((error) => console.error('Error saving note:', error));
  }
}
