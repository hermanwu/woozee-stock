import { Component, Input, OnInit } from '@angular/core';
import { Opinion } from '../opinions/components/opinion-display/opinion.interface';

@Component({
  selector: 'app-opinion-item-display',
  templateUrl: './opinion-item-display.component.html',
  styleUrls: ['./opinion-item-display.component.scss'],
})
export class OpinionItemDisplayComponent implements OnInit {
  @Input() opinion: Opinion;

  constructor() {}

  ngOnInit(): void {}
}
