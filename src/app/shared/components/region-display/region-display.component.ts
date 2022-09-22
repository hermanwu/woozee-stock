import { Component, Input, OnChanges } from '@angular/core';
import { Region, RegionCode } from '../../data/enum/region.enum';

@Component({
  selector: 'app-region-display',
  templateUrl: './region-display.component.html',
  styleUrls: ['./region-display.component.scss'],
})
export class RegionDisplayComponent implements OnChanges {
  @Input() region: string;

  readonly regionCode = RegionCode;
  readonly regionMap = Region;

  flag;

  constructor() {}

  ngOnChanges(): void {
    this.flag = this.regionMap?.[this.region]?.flag;
  }
}
