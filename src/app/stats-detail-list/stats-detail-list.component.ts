import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-detail-list',
  templateUrl: './stats-detail-list.component.html',
  styleUrls: ['./stats-detail-list.component.scss'],
})
export class StatsDetailListComponent implements OnInit {
  @Input() statsDetails: any;
  @Input() previousStatsDetails: any;

  constructor() {}

  ngOnInit(): void {}
}
