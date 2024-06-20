import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../shared/data/tag.model';
import { NavigationServices } from '../../shared/services/navgiation.services';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.scss'],
})
export class TagDisplayComponent implements OnInit {
  @Input() displayNameOnly: boolean;
  @Input() tag: Tag;

  constructor(private navigationServices: NavigationServices) {}

  ngOnInit(): void {}

  navigate(tagUuid: string) {
    // if (environment.production) {
    //   return;
    // }

    this.navigationServices.navigate('tag', tagUuid);
  }

  getTagColor(tag) {
    return (
      'bg-' +
      (tag?.sentiment > 0 ? 'green' : tag?.sentiment < 0 ? 'red' : 'gray') +
      '-500'
    );
  }
}
