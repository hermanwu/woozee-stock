import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from '../accounts/services/user.services';
import { Tag } from '../shared/data/tag.model';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  @Input() tags: Tag[];

  constructor(private userServices: UserServices, private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges() {}
}
