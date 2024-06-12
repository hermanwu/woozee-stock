import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EarningsKeyWord } from '../../../mock-data/earnings-key-word.enum';
import { Earnings } from '../../../mock-data/earnings.mock';
import { cloneDeep } from '../../../shared/functions/clone-deep';
import { underscoreToCamelCase } from '../../../shared/functions/data-transformation.function';

@Component({
  selector: 'app-earnings-display',
  templateUrl: './earnings-display.component.html',
  styleUrls: ['./earnings-display.component.scss'],
})
export class EarningsDisplayComponent implements OnInit {
  @Input() earnings: Earnings;

  endDate: Date;
  revenue: number;
  grossProfit: number;
  operatingIncome: number;
  netIncome: number;

  grossMargin: number;
  operatingMargin: number;
  netMargin: number;

  otherData = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['earnings'] && this.earnings) {
      this.otherData = [];
      const camelCaseData = underscoreToCamelCase(cloneDeep(this.earnings));
      const numbersData = camelCaseData.data;

      this.endDate = new Date(this.earnings.endDate);

      for (const key of Object.keys(numbersData)) {
        if (key === EarningsKeyWord.revenue) {
          this.revenue = numbersData[key].value;
        } else if (key === EarningsKeyWord.grossProfit) {
          this.grossProfit = numbersData[key].value;
        } else if (key === EarningsKeyWord.operatingIncome) {
          this.operatingIncome = numbersData[key].value;
        } else if (key === EarningsKeyWord.netIncome) {
          this.netIncome = numbersData[key].value;
        }

        this.otherData.push(numbersData[key]);
      }

      this.grossMargin = this.calculateGrossMargin();
      this.operatingMargin = this.calculateOperatingMargin();
      this.netMargin = this.calculateNetMargin();
    }
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
