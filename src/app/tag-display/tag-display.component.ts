import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../shared/data/tag.model';
import { NavigationServices } from '../shared/services/navgiation.services';
import { TagServices } from '../shared/services/tag.services';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.scss'],
})
export class TagDisplayComponent implements OnInit {
  @Input() tagUuid: string;

  item: Tag;

  constructor(
    private tagServices: TagServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.tagUuid) {
      this.item = this.tagServices.getTagRelatedDataByUuid(this.tagUuid);
      console.log(this.tagUuid);
    }
  }

  navigate(tag: Tag) {
    if (environment.production) {
      return;
    }

    this.navigationServices.navigate(tag.type, tag.uuid);
  }
}
