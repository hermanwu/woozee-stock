import { Component, OnInit } from '@angular/core';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import {
  rankHigher,
  rankLower,
} from 'src/app/shared/functions/ranking.function';
import { OpinionEnum } from 'src/app/stock/models/opinion-type.model';
import { StockServices } from 'src/app/stock/services/stock.service';

export const opinionMock: Opinion = {
  uuid: 'test-uuid',
  noteType: 'test-note-type',
  rating: OpinionEnum.Bearish,
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

  mockImages = ['googl', 'msft', 'meta', 'snap', 'spot'];
  imageLinks = [];

  constructor(private stockServices: StockServices) {}

  ngOnInit(): void {
    for (let ticker of this.mockImages) {
      const stock = this.stockServices.getOrganizationByUuid(ticker);
      if (stock) {
        this.imageLinks.push(stock.logoLink);
      }
    }
  }

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
