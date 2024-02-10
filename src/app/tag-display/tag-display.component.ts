import { Component, Input, OnInit } from '@angular/core';
import { getTagByUuid, Tag } from '../shared/data/tag.model';
import { NavigationServices } from '../shared/services/navgiation.services';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.scss'],
})
export class TagDisplayComponent implements OnInit {
  @Input() tagUuid: string;

  tag: Tag;

  constructor(private navigationServices: NavigationServices) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.tagUuid) {
      this.tag = getTagByUuid(this.tagUuid);
    }
  }

  navigate(tagUuid: string) {
    // if (environment.production) {
    //   return;
    // }

    this.navigationServices.navigate('tag', tagUuid);
  }

  getTagColor(tag) {
    return 'bg-' + (tag?.color || 'blue') + '-500';
  }
}
