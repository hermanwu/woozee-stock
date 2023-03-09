import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
