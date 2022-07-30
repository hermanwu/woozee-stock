import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-growth-detail-list',
  templateUrl: './growth-detail-list.component.html',
  styleUrls: ['./growth-detail-list.component.scss'],
})
export class GrowthDetailListComponent implements OnInit {
  @Input() statsDetails: any;
  @Input() previousStatsDetails: any;

  constructor() {}

  ngOnInit(): void {}
}
