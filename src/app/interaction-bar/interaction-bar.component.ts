import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInteractions } from 'src/interactions/interaction.services';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { getTagsByUuids, Tag } from '../shared/data/tag.model';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.component.html',
  styleUrls: ['./interaction-bar.component.scss'],
})
export class InteractionBarComponent implements OnInit {
  @Input() interactions: UserInteractions;
  tags: Tag[];
  displayOnly = true;
  editing = false;
  environment = environment;

  emojiUnicode = EmojiUnicode;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.interactions && this.interactions.listUuids) {
      this.tags = getTagsByUuids(this.interactions.listUuids).sort(
        (a, b) => (b.votes || 0) - (a.votes || 0)
      );
    }
  }
}
