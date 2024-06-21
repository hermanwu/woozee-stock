import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { CreateTagDialogComponent } from 'src/app/tag/create-tag-dialog/create-tag-dialog.component';
import { UserServices } from '../../../accounts/services/user.services';

@Component({
  selector: 'app-tag-list-page',
  templateUrl: './tag-list-page.component.html',
  styleUrls: ['./tag-list-page.component.scss'],
})
export class TagListPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  tags = [];
  emojiUnicode = EmojiUnicode;

  constructor(
    private dialog: MatDialog,
    private userServices: UserServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userServices
      .getTags()
      .pipe(
        filter((tags) => !!tags),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((tags) => {
        this.tags = Object.values(tags).sort(
          (a, b) => (b.votes || 0) - (a.votes || 0)
        );
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
  }
}
