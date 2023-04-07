import { Component, OnInit } from '@angular/core';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import {
  rankHigher,
  rankLower,
} from 'src/app/shared/functions/ranking.function';
import { Rating } from 'src/app/stock/models/rating.model';

export const opinionMock: Opinion = {
  uuid: 'test-uuid',
  noteType: 'test-note-type',
  rating: Rating.Bearish,
  emojis: [EmojiUnicode.thumbDown],
};
@Component({
  selector: 'app-ui-molecules',
  templateUrl: './ui-molecules.component.html',
  styleUrls: ['./ui-molecules.component.scss'],
})
export class UiMoleculesComponent implements OnInit {
  sourceLink = 'https://www.bloomberg.com';

  mockRanks = ['tsla', 'aapl', 'meta', 'amzn'];
  mockItem = 'aapl';
  higherItem = 'meta';
  lowerItem = 'amzn';
  mockResult;
  opinionMock = opinionMock;

  mockImages = [
    {
      link: 'https://i.ibb.co/zhWrySv/Screenshot-2023-02-23-at-8-38-05-PM.png',
      title: 'Nvidia',
    },
    {
      link: 'https://i.ibb.co/wRSMW2S/Screenshot-2023-04-05-at-3-59-27-PM.png',
      title: 'Nvidia',
    },
    {
      link: 'https://i.ibb.co/JqzwMhY/Screenshot-2023-04-05-at-4-35-44-PM.png',
      title: 'Goldman Sachs',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  mockRankHigher() {
    this.mockResult = rankHigher(
      this.higherItem,
      this.mockItem,
      this.mockRanks
    );
  }

  mockRankLower() {
    this.mockResult = rankLower(this.lowerItem, this.mockItem, this.mockRanks);
  }
}
