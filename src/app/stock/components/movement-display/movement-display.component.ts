import { Component, Input, OnChanges } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';

@Component({
  selector: 'app-movement-display',
  templateUrl: './movement-display.component.html',
  styleUrls: ['./movement-display.component.scss'],
})
export class MovementDisplayComponent implements OnChanges {
  @Input() previousData: number;
  @Input() currentData: number;
  @Input() changePercent: number;
  @Input() hideMovement: boolean;

  readonly emojiUnicode = EmojiUnicode;

  isUp: boolean;

  constructor() {}

  ngOnChanges(): void {
    if (this.currentData && this.previousData) {
      if (this.currentData > this.previousData) {
        this.isUp = true;
      }

      this.changePercent = Math.abs(
        (this.currentData - this.previousData) / this.previousData
      );
    }
  }
}
