import { Component, Input, OnInit } from '@angular/core';
import { PriceRange } from '../../../shared/components/stats-display/stats-display.interface';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss'],
})
export class PriceDisplayComponent implements OnInit {
  @Input() priceRange: PriceRange;

  constructor() {}

  ngOnInit(): void {}
}
