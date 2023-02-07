import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Quote } from '../opinions/data/mock-opinions.data';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.scss'],
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote: Quote;
  lines: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.quote) {
      this.lines = this.quote.content
        ?.split('\n')
        .filter((line) => line.length > 0);
    }
  }

  ngOnInit(): void {}
}
