import { Component, OnInit } from '@angular/core';

export enum keyDataType {
  quarter_revenue_growth = 'quarterRevenueGrowth',
  quarter_operating_margin = 'quarterOperatingMargin',
}

export enum sentimentRate {
  verySatisfied = 5,
  satisfied = 4,
  okay = 3,
  unsatisfied = 2,
  veryUnsatisfied = 1,
}

export interface userSentiment {
  userId: string;
  stockId: string;
  sentimentMap: Map<keyDataType, sentimentRate>;
}

@Component({
  selector: 'app-sentiment-display',
  templateUrl: './sentiment-display.component.html',
  styleUrls: ['./sentiment-display.component.scss'],
})
export class SentimentDisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
