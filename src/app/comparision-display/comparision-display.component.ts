import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { cloneDeep } from '../shared/functions/clone-deep';
import { Stock } from '../stock/models/stock.model';

@Component({
  selector: 'app-comparision-display',
  templateUrl: './comparision-display.component.html',
  styleUrls: ['./comparision-display.component.scss'],
})
export class ComparisionDisplayComponent implements OnChanges {
  rankedItems = [];

  @Input() items: Stock[];
  @Output() selectAction = new EventEmitter<Stock[]>();

  constructor() {}

  ngOnChanges() {
    // Reset ranked item when input changes.
    this.rankedItems = [];
  }

  select(index) {
    // handle when there are only two items.
    if (this.items.length === 2) {
      this.rankedItems =
        index === 0
          ? [this.items[0], this.items[1]]
          : [this.items[1], this.items[0]];
    } else {
      const rankedIndex = this.rankedItems.indexOf(this.items[index]);

      if (rankedIndex >= 0) {
        this.rankedItems.splice(rankedIndex, 1);
      } else {
        this.rankedItems.push(this.items[index]);
      }
    }

    this.selectAction.emit(cloneDeep(this.rankedItems));
  }
}
