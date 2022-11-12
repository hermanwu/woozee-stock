import { Component, Input, OnInit } from '@angular/core';
import { UnicodeCharacters } from 'src/app/shared/data/enum/unicode-characters.enum';
import { Industry } from 'src/app/stock/models/industry.model';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
})
export class MarketListComponent implements OnInit {
  readonly multiplySign = UnicodeCharacters.Multiply;

  @Input() markets: Industry[];

  constructor() {}

  ngOnInit(): void {}
}
