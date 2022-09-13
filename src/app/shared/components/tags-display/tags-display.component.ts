import { Component, Input, OnInit } from '@angular/core';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';
import { tags } from '../../data/const/tag.mock';

@Component({
  selector: 'app-tags-display',
  templateUrl: './tags-display.component.html',
  styleUrls: ['./tags-display.component.scss'],
})
export class TagsDisplayComponent implements OnInit {
  @Input() stock: StockAnalysis;
  @Input() tags: string[];

  investTrend = 'investTrends';
  defaultTags = tags;

  constructor() {}

  ngOnInit(): void {}
}
