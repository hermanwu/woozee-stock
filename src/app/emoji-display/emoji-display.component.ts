import { Component, Input, OnInit } from '@angular/core';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { OpinionEnum } from '../stock/models/opinion-type.model';

@Component({
  selector: 'app-emoji-display',
  templateUrl: './emoji-display.component.html',
  styleUrls: ['./emoji-display.component.scss'],
})
export class EmojiDisplayComponent implements OnInit {
  @Input() emotion: OpinionEnum;

  emotionEnum = OpinionEnum;
  emojiUnicode = EmojiUnicode;

  constructor() {}

  ngOnInit(): void {}
}
