import { Component, Input, OnInit } from '@angular/core';
import { EarningsKeyWord } from '../mock-data/earnings-key-word.enum';
import { Earnings } from '../mock-data/earnings.mock';

@Component({
  selector: 'app-earnings-display',
  templateUrl: './earnings-display.component.html',
  styleUrls: ['./earnings-display.component.scss'],
})
export class EarningsDisplayComponent implements OnInit {
  @Input() earnings: Earnings;

  revenue: number;
  grossProfit: number;
  operatingIncome: number;
  netIncome: number;

  grossMargin: number;
  operatingMargin: number;
  netMargin: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    for (let item of this.earnings?.data || []) {
      // remove trailing spaces and to lower case
      if (item?.name?.trim().toLowerCase() === 'revenue') {
        this.revenue = item.value;
      } else if (item?.name?.trim().toLowerCase() === 'gross profit') {
        this.grossProfit = item.value;
      } else if (item?.name?.trim().toLowerCase() === 'operating income') {
        this.operatingIncome = item.value;
      } else if (item?.name === EarningsKeyWord.netIncome) {
        this.netIncome = item.value;
      }
    }

    this.grossMargin = this.calculateGrossMargin();
    this.operatingMargin = this.calculateOperatingMargin();
    this.netMargin = this.calculateNetMargin();
  }

  calculateOperatingMargin(): number {
    if (this.operatingIncome && this.revenue) {
      return this.operatingIncome / this.revenue;
    }
  }

  calculateGrossMargin(): number {
    if (this.grossProfit && this.revenue) {
      return this.grossProfit / this.revenue;
    }
  }

  calculateNetMargin(): number {
    if (this.netIncome && this.revenue) {
      return this.netIncome / this.revenue;
    }
  }
}
