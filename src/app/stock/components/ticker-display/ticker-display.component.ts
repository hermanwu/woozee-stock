import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker-display',
  templateUrl: './ticker-display.component.html',
  styleUrls: ['./ticker-display.component.scss'],
})
export class TickerDisplayComponent implements OnInit {
  @Input() ticker: string;

  constructor() {}

  ngOnInit(): void {}
}
