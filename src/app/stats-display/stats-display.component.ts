import { Component, Input, OnInit } from '@angular/core';
import { StatsDisplay, TimeFrame } from './stats-display.interface';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.scss'],
})
export class StatsDisplayComponent implements OnInit {
  @Input() statsDisplay: StatsDisplay;

  readonly TimeFrameEnum = TimeFrame;

  constructor() {}

  ngOnInit(): void {}
}
