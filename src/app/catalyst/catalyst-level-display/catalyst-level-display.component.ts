import { Component, Input, OnInit } from '@angular/core';
import { CatalystLevel } from './catalyst-level.enum';

@Component({
  selector: 'app-catalyst-level-display',
  templateUrl: './catalyst-level-display.component.html',
  styleUrls: ['./catalyst-level-display.component.scss'],
})
export class CatalystLevelDisplayComponent implements OnInit {
  @Input() catalystLevel: CatalystLevel;

  readonly catalystLevelEnum = CatalystLevel;

  constructor() {}

  ngOnInit(): void {}
}
