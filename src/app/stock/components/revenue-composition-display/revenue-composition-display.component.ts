import { Component, Input, OnChanges } from '@angular/core';
import { Revenue } from '../business-overview/business.model';

@Component({
  selector: 'app-revenue-composition-display',
  templateUrl: './revenue-composition-display.component.html',
  styleUrls: ['./revenue-composition-display.component.scss'],
})
export class RevenueCompositionDisplayComponent implements OnChanges {
  @Input() revenues: Revenue[];
  @Input() total: number;

  constructor() {}

  ngOnChanges(): void {
    this.total = this.revenues?.reduce((prev, cur) => prev + cur.size, 0);
  }
}
