import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Organization } from 'src/app/people/components/investor-display/investor-display.component';
import { Fact } from 'src/app/risks/models/fact.model';
import { Tag } from 'src/app/shared/data/tag.model';
import { EntityServices } from 'src/app/shared/services/entity.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-opinion-item-display',
  templateUrl: './opinion-item-display.component.html',
  styleUrls: ['./opinion-item-display.component.scss'],
})
export class OpinionItemDisplayComponent implements OnInit, OnChanges {
  @Input() opinion: Opinion;
  @Input() expanded: boolean;

  author: Tag;
  organization: Organization;
  imageLinks = [];
  parentExpanded = false;
  childrenNotes: (Fact | Opinion)[];
  targetUuids: Tag[] = [];
  authorName;

  constructor(private entityServices: EntityServices) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.opinion?.authorUuid) {
      this.author = this.entityServices.getEntityByUuid(
        this.opinion?.authorUuid
      );

      this.authorName = this.author?.displayName || this.opinion.authorUuid;
    }
  }

  showParent() {
    this.parentExpanded = !this.parentExpanded;
    // this.childrenNotes = this.notesServices.getNotesByUuids(
    //   this.opinion.childrenUuids
    // );
  }
}
