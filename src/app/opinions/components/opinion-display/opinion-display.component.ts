import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Term } from '../../../risks/models/risk-level.model';
import { Rating } from '../../../stock/models/rating.model';
import { Opinion } from './opinion.interface';

@Component({
  selector: 'app-opinion-display',
  templateUrl: './opinion-display.component.html',
  styleUrls: ['./opinion-display.component.scss'],
})
export class OpinionDisplayComponent implements OnInit, OnChanges {
  @Input() opinion: Opinion;
  @Input() shortVersion: boolean;

  readonly ratingEnum = Rating;
  readonly termEnum = Term;
  expanded: boolean;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.opinion.parentUuid) {
      // get parent info.
    }
  }
}
