import { Component, Input, OnInit } from '@angular/core';
import { MarketType } from '../../../facts/data/area.enum';

@Component({
  selector: 'app-market-display',
  templateUrl: './market-display.component.html',
  styleUrls: ['./market-display.component.scss'],
})
export class MarketDisplayComponent implements OnInit {
  @Input() marketType: MarketType;

  constructor() {}

  ngOnInit(): void {}
}
