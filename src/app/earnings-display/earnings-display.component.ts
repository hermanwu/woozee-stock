import { Component, Input, OnInit } from '@angular/core';
import { Earnings } from '../mock-data/earnings.mock';

@Component({
  selector: 'app-earnings-display',
  templateUrl: './earnings-display.component.html',
  styleUrls: ['./earnings-display.component.scss'],
})
export class EarningsDisplayComponent implements OnInit {
  @Input() earnings: Earnings;

  constructor() {}

  ngOnInit(): void {}
}
