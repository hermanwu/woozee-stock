import { Component, Input, OnInit } from '@angular/core';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-opinion-item-display',
  templateUrl: './opinion-item-display.component.html',
  styleUrls: ['./opinion-item-display.component.scss'],
})
export class OpinionItemDisplayComponent implements OnInit {
  @Input() opinion: Opinion;
  @Input() expanded: boolean;

  authorNameImageLink: string;
  organizationImageLink: string;

  constructor() {}

  ngOnInit(): void {}
}
