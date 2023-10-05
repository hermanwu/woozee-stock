import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartData } from 'chart.js';
import { DisplayType, Stats, TimeFrame } from './stats-display.interface';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.scss'],
  encapsulation: ViewEncapsulation.None, // Add this line
})
export class StatsDisplayComponent implements OnInit {
  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };

  @Input() statsDisplay: Stats;

  readonly DisplayType = DisplayType;
  readonly TimeFrameEnum = TimeFrame;

  constructor() {}

  ngOnInit(): void {}
}
