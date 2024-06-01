import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// Enum representing the different types of predication
enum PredictionType {
  Bullish = 'bullish',
  Bearish = 'bearish',
  Neutral = 'neutral',
}

@Component({
  selector: 'app-prediction-display',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatIconModule, MatChipsModule],
  templateUrl: './predication-display.component.html',
  styleUrl: './predication-display.component.scss',
})
export class PredictionDisplayComponent implements OnChanges {
  @Input() predictionString: string = '';

  lastPrediction: {
    stockTicker: string;
    predication: PredictionType;
    timestamp: number;
    price: number;
  } | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['predictionString']) {
      this.lastPrediction = this.getLastPredication();
    }
  }

  getLastPredication(): {
    stockTicker: string;
    predication: PredictionType;
    timestamp: number;
    price: number;
  } | null {
    if (this.predictionString) {
      const predicationUnits = this.predictionString.split('#');
      if (predicationUnits.length > 0) {
        const lastPredictionUnit =
          predicationUnits[predicationUnits.length - 2];
        const [stockTicker, timestamp, predication, price] =
          lastPredictionUnit.split(':');
        return {
          stockTicker,
          predication: predication as PredictionType,
          timestamp: Number(timestamp),
          price: Number(price),
        };
      }
    }
    return null;
  }
}
