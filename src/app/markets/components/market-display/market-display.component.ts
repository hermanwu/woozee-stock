import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IndustryType } from '../../../stock/components/facts/data/area.enum';

@Component({
  selector: 'app-market-display',
  templateUrl: './market-display.component.html',
  styleUrls: ['./market-display.component.scss'],
})
export class MarketDisplayComponent implements OnInit {
  @Input() marketType: IndustryType;
  environment = environment;

  constructor() {}

  ngOnInit(): void {}
}
