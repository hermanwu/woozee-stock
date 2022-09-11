import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.scss'],
})
export class DateDisplayComponent implements OnChanges {
  @Input() date: Date;

  constructor() {
    let timeZone;
    if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
      timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log({ timeZone });
    }
  }

  ngOnChanges() {
    // console.log(this.date.getTimezoneOffset());
  }
}
