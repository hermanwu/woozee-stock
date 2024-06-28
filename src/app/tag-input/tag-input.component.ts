import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
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
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Observable, Subject, map, startWith, takeUntil } from 'rxjs';
import { UserServices } from '../accounts/services/user.services';
import { Tag } from '../shared/data/tag.model';
import { CreateTagDialogComponent } from '../tag/create-tag-dialog/create-tag-dialog.component';

@Component({
  selector: 'app-tag-input',
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
  templateUrl: './tag-input.component.html',
  styleUrl: './tag-input.component.scss',
})
export class TagInputComponent implements OnInit, OnChanges, OnDestroy {
  @Input() allTagsMap: { [uuid: string]: Tag } = {};
  @Input() selectedTagUuids: string[];
  @Output() updatedTagUuids = new EventEmitter<string[]>();

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags: Observable<Tag[]>;
  allTags: Tag[] = [];
  selectedTags: Tag[] = [];

  private destroy$ = new Subject<void>();

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor(
    private dialog: MatDialog,
    private userServices: UserServices,
    private dialogRef: MatDialogRef<TagInputComponent>
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

  ngOnChanges() {
    this.allTags = Object.values(this.allTagsMap);

    const selectedTags = this.selectedTagUuids
      .map((uuid) => this.allTagsMap[uuid])
      .filter((tag) => tag);

    this.selectedTags = selectedTags;
  }

  ngOnInit() {}

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

      this.updatedTagUuids.emit(this.selectedTags.map((tag) => tag.uuid));
    }
  }

  remove(tag: Tag): void {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);

      this.updatedTagUuids.emit(this.selectedTags.map((tag) => tag.uuid));
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedTag: Tag = event.option.value;

    if (!this.selectedTags.some((tag) => tag.uuid === selectedTag.uuid)) {
      this.selectedTags.push(selectedTag);
      this.tagInput.nativeElement.value = '';
      this.tagCtrl.setValue(null);

      this.updatedTagUuids.emit(this.selectedTags.map((tag) => tag.uuid));
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

    createTagDialogRef.close();
  }
}
