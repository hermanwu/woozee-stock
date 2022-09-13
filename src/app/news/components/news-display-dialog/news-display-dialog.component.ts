import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockMetric } from 'src/app/stock/components/stock-metric-display/stock-metric.enum';
import { ImageServices } from '../../../images/services/images.services';
import { StockAnalysis } from '../../../stock/models/stock-analysis.model';
import { NewsDisplayDialogInput } from './news-display-dialog-input.interface';

@Component({
  selector: 'app-news-display-dialog',
  templateUrl: './news-display-dialog.component.html',
  styleUrls: ['./news-display-dialog.component.scss'],
})
export class NewsDisplayDialogComponent implements OnInit {
  stock: StockAnalysis;
  links: any[];
  imageLink: string;
  displayStockMetrics?: StockMetric[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: NewsDisplayDialogInput,
    private imageServices: ImageServices
  ) {}

  ngOnInit(): void {
    this.links = this.dialogData.links;
    this.stock = this.dialogData.stock;
    this.displayStockMetrics = this.dialogData.stockMetrics;
  }
}
