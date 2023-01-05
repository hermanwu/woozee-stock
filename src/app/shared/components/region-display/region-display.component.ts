import { Component, Input, OnChanges } from '@angular/core';
import { RegionCode, RegionMap } from '../../data/enum/region.enum';

@Component({
  selector: 'app-region-display',
  templateUrl: './region-display.component.html',
  styleUrls: ['./region-display.component.scss'],
})
export class RegionDisplayComponent implements OnChanges {
  @Input() region: RegionCode;

  readonly regionCode = RegionCode;
  readonly regionMap = RegionMap;

  flag;

  constructor() {}

  ngOnChanges(): void {
    this.flag = this.regionMap?.[this.region]?.flag;
  }
}
