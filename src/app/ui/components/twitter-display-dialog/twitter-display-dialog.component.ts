import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageServices } from '../../../images/services/images.services';
import { StockMetric } from '../../../stock/components/stock-metric-display/stock-metric.enum';
import { StockAnalysis } from '../../../stock/models/stock-analysis.model';
import { TwitterDisplayDialogInput } from './twitter-display-dialog-input.interface';

@Component({
  selector: 'app-twitter-display-dialog',
  templateUrl: './twitter-display-dialog.component.html',
  styleUrls: ['./twitter-display-dialog.component.scss'],
})
export class TwitterDisplayDialogComponent implements OnInit {
  stock: StockAnalysis;
  links: any[];
  imageLink: string;
  displayStockMetrics?: StockMetric[];
  sourceLink?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: TwitterDisplayDialogInput,
    private imageServices: ImageServices
  ) {}

  ngOnInit(): void {
    this.links = this.dialogData.links;
    this.stock = this.dialogData.stock;
  }
}
