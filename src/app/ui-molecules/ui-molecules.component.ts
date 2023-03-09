import { Component, OnInit } from '@angular/core';
import { Opinion } from '../notes/components/opinion-display/opinion.interface';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Rating } from '../stock/models/rating.model';

@Component({
  selector: 'app-ui-molecules',
  templateUrl: './ui-molecules.component.html',
  styleUrls: ['./ui-molecules.component.scss'],
})
export class UiMoleculesComponent implements OnInit {
  sourceLink = 'https://www.bloomberg.com';

  opinionMock: Opinion = {
    rating: Rating.Bearish,
    emojis: [EmojiUnicode.thumbDown],
  };

  constructor() {}

  ngOnInit(): void {}
}
