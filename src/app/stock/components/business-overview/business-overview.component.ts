import { Component, Input, OnInit } from '@angular/core';
import { Business } from './business.model';

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.component.html',
  styleUrls: ['./business-overview.component.scss'],
})
export class BusinessOverviewComponent implements OnInit {
  @Input() business: Business;
  constructor() {}

  ngOnInit(): void {}
}
