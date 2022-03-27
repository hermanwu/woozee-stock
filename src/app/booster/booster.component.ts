import { Component, Input, OnInit } from '@angular/core';
import { Booster } from '../shared/models/booster.interface';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.scss'],
})
export class BoosterComponent implements OnInit {
  @Input() catalysts: Booster[];

  constructor() {}

  ngOnInit(): void {}
}
