import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ticker-display',
  templateUrl: './ticker-display.component.html',
  styleUrls: ['./ticker-display.component.scss'],
})
export class TickerDisplayComponent implements OnInit {
  @Input() ticker: string;

  environment = environment;

  constructor() {}

  ngOnInit(): void {}
}
