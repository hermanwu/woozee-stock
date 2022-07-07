import { Component, Input, OnInit } from '@angular/core';
import { Revenue } from '../business-overview/business.model';

@Component({
  selector: 'app-revenue-display',
  templateUrl: './revenue-display.component.html',
  styleUrls: ['./revenue-display.component.scss'],
})
export class RevenueDisplayComponent implements OnInit {
  @Input() revenue: Revenue;
  @Input() total: number;

  constructor() {}

  ngOnInit(): void {}
}
