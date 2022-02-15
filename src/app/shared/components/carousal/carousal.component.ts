import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
})
export class CarousalComponent implements OnInit, OnChanges {
  @Input() items: any[];

  @Output() indexOfSelected = new EventEmitter<number>();

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.indexOfSelected.emit(this.currentIndex);
  }

  emitNext(next: number) {
    this.currentIndex += next;

    if (this.currentIndex >= this.items.length) {
      this.currentIndex = this.items.length - 1;
    }

    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }

    this.indexOfSelected.emit(this.currentIndex);
  }
}
