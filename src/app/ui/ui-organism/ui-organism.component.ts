import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';

@Component({
  selector: 'app-ui-organism',
  templateUrl: './ui-organism.component.html',
  styleUrls: ['./ui-organism.component.scss'],
})
export class UiOrganismComponent implements OnInit {
  listData = [
    ['aapl', 'tsla', 'meta', 'amzn'],
    ['tsla', 'aapl', 'meta', 'amzn'],
  ];

  mockStocks = [
    {
      name: 'Stock A',
      ticker: 'TSLA',
      revenue: 100,
      profit: 50,
    },

    {
      name: 'Stock B',
      ticker: 'AAPL',
      revenue: 50,
      profit: 25,
    },
  ];
  rankedStocks;
  selectedPortfolio;
  mockPortfolio;

  constructor(private userServices: UserServices) {}

  ngOnInit(): void {}

  changePortfolio(portfolio: string) {
    this.selectedPortfolio = portfolio;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.mockPortfolio,
      event.previousIndex,
      event.currentIndex
    );
  }
}
