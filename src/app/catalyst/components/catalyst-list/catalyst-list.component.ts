import { Component, Input, OnInit } from '@angular/core';
import { Catalyst } from 'src/app/shared/models/booster.interface';

@Component({
  selector: 'app-catalyst-list',
  templateUrl: './catalyst-list.component.html',
  styleUrls: ['./catalyst-list.component.scss'],
})
export class CatalystListComponent implements OnInit {
  @Input() showCategory = false;
  @Input() catalysts: Catalyst[];

  constructor() {}

  ngOnInit(): void {}
}
