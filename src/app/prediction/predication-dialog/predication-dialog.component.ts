import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { UserServices } from '../../accounts/services/user.services';
import { UndefinedPipeModule } from '../../shared/pipes/undefined-pipe/undefined-pipe.module';
import { PricesServices } from '../../shared/services/prices.services';
import { PredictionDisplayComponent } from '../prediction-display/predication-display.component';

// Enum representing the different types of predication
export enum PredictionType {
  Bullish = 'bullish',
  Bearish = 'bearish',
  Neutral = 'neutral',
}

@Component({
  selector: 'app-predication-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    CommonModule,
    UndefinedPipeModule,
    PredictionDisplayComponent,
  ],
  templateUrl: './predication-dialog.component.html',
  styleUrl: './predication-dialog.component.scss',
})
export class PredicationDialogComponent {
  PredictionType = PredictionType;
  predictionControl = new FormControl('', Validators.required);
  predictionString;
  stockTicker: string;
  price: number;
  predictionHistory: Prediction[] = [];

  constructor(
    private userServices: UserServices,
    private pricesServices: PricesServices,
    private dialogRef: MatDialogRef<PredicationDialogComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      predictionString: string;
      stockTicker: string;
    }
  ) {
    this.predictionString = data.predictionString || '';
    this.stockTicker = data.stockTicker;
  }

  ngOnInit() {
    this.predictionHistory = generatePredicationHistory(this.predictionString);
  }

  onConfirm() {
    const existingPrediction =
      this.predictionHistory[this.predictionHistory.length - 1];

    if (
      existingPrediction &&
      existingPrediction.prediction === this.predictionControl.value
    ) {
      this.dialogRef.close();
      return;
    }

    this.pricesServices
      .getPriceByTicker(this.data.stockTicker.toLowerCase())
      .subscribe((data) => {
        if (data) {
          if (data.currentPrice) {
            this.price = data.currentPrice.c;
          } else if (data.closedPrice) {
            this.price = data.closedPrice.c;
          }

          const stockTicker = this.stockTicker;
          const predication = this.predictionControl.value;
          const timestamp = Date.now();
          const price = this.price;

          const predicationUnitString = `${stockTicker}:${timestamp}:${predication}:${price}#`;
          const updatedPredicationString =
            this.predictionString + predicationUnitString;

          const mergeObj = {
            predictions: {
              [stockTicker.toLowerCase() + ':stock']: updatedPredicationString,
            },
          };

          this.userServices
            .setUserData(mergeObj as any)
            .then(() => {
              this.dialogRef.close(updatedPredicationString);
            })
            .catch((error) =>
              console.error('Error saving predication:', error)
            );
        } else {
          console.log('Data is not available yet');
        }
      });
  }
}

export function generatePredicationHistory(
  predictionString: string
): Prediction[] {
  if (predictionString) {
    const predictionUnits = predictionString.split('#');
    const predictionMap: { [date: string]: Prediction } = {};

    predictionUnits
      .filter((unit) => unit.trim() !== '')
      .forEach((unit) => {
        const [ticker, timestamp, prediction, price] = unit.split(':');
        const date = new Date(parseInt(timestamp)).toDateString();

        if (
          !predictionMap[date] ||
          predictionMap[date].timestamp < parseInt(timestamp)
        ) {
          predictionMap[date] = {
            ticker,
            timestamp: parseInt(timestamp),
            prediction,
            price: parseFloat(price),
          };
        }
      });

    return Object.values(predictionMap);
  }
  return [];
}

export interface Prediction {
  ticker: string;
  timestamp: number;
  prediction: string;
  price: number;
}
