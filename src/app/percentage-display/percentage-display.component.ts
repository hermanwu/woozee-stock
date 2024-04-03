import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-display',
  templateUrl: './percentage-display.component.html',
  styleUrls: ['./percentage-display.component.scss'],
})
export class PercentageDisplayComponent implements OnInit {
  @Input() percentageDiff: number;

  constructor() {}

  ngOnInit(): void {}
}
