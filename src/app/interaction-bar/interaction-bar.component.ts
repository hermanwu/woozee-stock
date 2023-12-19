import { Component, Input, OnInit } from '@angular/core';
import { UserInteractions } from 'src/emotion/emotion.services';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.component.html',
  styleUrls: ['./interaction-bar.component.scss'],
})
export class InteractionBarComponent implements OnInit {
  @Input() interactions: UserInteractions;
  displayOnly = true;
  editing = false;

  emojiUnicode = EmojiUnicode;

  constructor() {}

  ngOnInit(): void {}
}
