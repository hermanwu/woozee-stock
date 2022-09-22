import { Component, Input, OnInit } from '@angular/core';
import { Term } from '../risks/models/risk-level.model';
import { Rating } from '../stock/models/rating.model';
import { Opinion } from './opinion.interface';

@Component({
  selector: 'app-opinion-display',
  templateUrl: './opinion-display.component.html',
  styleUrls: ['./opinion-display.component.scss'],
})
export class OpinionDisplayComponent implements OnInit {
  @Input() opinion: Opinion;

  readonly ratingEnum = Rating;
  readonly termEnum = Term;

  constructor() {}

  ngOnInit(): void {}
}
