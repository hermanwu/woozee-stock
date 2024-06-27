import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from '../accounts/services/user.services';
import { Tag } from '../shared/data/tag.model';
import { AddTagDialogComponent } from '../tag/add-tag-dialog/add-tag-dialog.component';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  @Input() tags: Tag[];
  @Input() targetUuid: string;
  @Input() targetType: 'stock' | 'note';

  constructor(private userServices: UserServices, private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges() {}

  openAddTagDialog() {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    const dialogRef = this.dialog.open(AddTagDialogComponent, {
      data: {
        type: this.targetType,
        targetUuid: this.targetUuid,
        tagUuids: this.tags.map((tag) => tag.uuid),
      },
      width: '800px',
    });
  }
}
