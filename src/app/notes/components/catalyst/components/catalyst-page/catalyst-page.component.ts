import { Component, OnInit } from '@angular/core';
import { catalysts } from '../../data/catalyst.mock';

@Component({
  selector: 'app-catalyst-page',
  templateUrl: './catalyst-page.component.html',
  styleUrls: ['./catalyst-page.component.scss'],
})
export class CatalystPageComponent implements OnInit {
  catalysts = catalysts;

  constructor() {}

  ngOnInit(): void {}
}
