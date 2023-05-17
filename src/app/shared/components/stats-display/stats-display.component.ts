import { Component, Input, OnInit } from '@angular/core';
import { DisplayType, Stats, TimeFrame } from './stats-display.interface';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.scss'],
})
export class StatsDisplayComponent implements OnInit {
  @Input() statsDisplay: Stats;

  readonly DisplayType = DisplayType;
  readonly TimeFrameEnum = TimeFrame;

  constructor() {}

  ngOnInit(): void {}
}
