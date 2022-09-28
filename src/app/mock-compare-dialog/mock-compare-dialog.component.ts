import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mock-compare-dialog',
  templateUrl: './mock-compare-dialog.component.html',
  styleUrls: ['./mock-compare-dialog.component.scss'],
})
export class MockCompareDialogComponent implements OnInit {
  pickedToCompare;
  selected;
  stock;
  toCompareList;
  sortedPortfolio: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {
      stock: string;
      portfolio: string[];
    },
    private dialogRef: MatDialogRef<MockCompareDialogComponent>
  ) {
    this.stock = dialogData.stock;
    this.sortedPortfolio = [...dialogData.portfolio];
    this.toCompareList = this.generateToCompareList(
      dialogData.stock,
      dialogData.portfolio
    );

    console.log(this.toCompareList);
    this.pickedToCompare = this.toCompareList.shift();
  }

  ngOnInit(): void {}

  next() {
    this.shuffle();
    this.selected = null;
    this.pickedToCompare = this.toCompareList.shift();
  }

  shuffle() {
    if (this.selected === this.stock) {
      this.sortedPortfolio = this.insertStock(
        this.pickedToCompare,
        this.stock,
        this.sortedPortfolio,
        false
      );
    } else {
      this.sortedPortfolio = this.insertStock(
        this.pickedToCompare,
        this.stock,
        this.sortedPortfolio,
        true
      );
    }
  }

  save() {
    this.shuffle();
    this.dialogRef.close(this.sortedPortfolio);
  }

  private generateToCompareList(stock, portfolio) {
    console.log(stock);
    const stack = [];
    const queue = [];
    const result = [];

    let found = false;

    for (let i = 0; i < portfolio.length; i++) {
      if (portfolio[i] === stock) {
        found = true;
      } else if (found) {
        queue.push(portfolio[i]);
      } else {
        stack.push(portfolio[i]);
      }
    }

    let i = 0;
    let j = stack.length - 1;

    while (i < queue.length || j >= 0) {
      if (j >= 0) {
        result.push(stack[j]);
        j--;
      }

      if (i < queue.length) {
        result.push(queue[i]);
        i++;
      }
    }

    return result;
  }

  // 0 index is considered to be high rank.
  private insertStock(
    stockToShuffle,
    stock,
    portfolio,
    shuffleToFront
  ): string[] {
    const temp = [...portfolio];
    let stockToShuffleIndex = temp.indexOf(stockToShuffle);
    let stockIndex = temp.indexOf(stock);

    // return if no change is needed;
    if (
      (stockToShuffleIndex < stockIndex && shuffleToFront) ||
      (stockToShuffleIndex > stockIndex && !shuffleToFront)
    ) {
      return temp;
    }

    temp.splice(stockToShuffleIndex, 1);

    const indexToInsert = shuffleToFront
      ? temp.indexOf(stock)
      : temp.indexOf(stock) + 1;
    temp.splice(indexToInsert, 0, stockToShuffle);

    return temp;
  }
}
