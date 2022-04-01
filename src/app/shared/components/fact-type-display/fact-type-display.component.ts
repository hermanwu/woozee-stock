import { Component, Input, OnInit } from '@angular/core';
import { FactType } from 'src/app/risks/models/fact-type.enum';

@Component({
  selector: 'app-fact-type-display',
  templateUrl: './fact-type-display.component.html',
  styleUrls: ['./fact-type-display.component.scss'],
})
export class FactTypeDisplayComponent implements OnInit {
  @Input() factType: FactType;

  readonly factTypeEnum = FactType;

  constructor() {}

  ngOnInit(): void {}
}
