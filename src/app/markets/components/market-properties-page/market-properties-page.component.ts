import { Component, OnInit } from '@angular/core';
import { MacroServices } from 'src/app/macro/macro.services';
import { Rating } from 'src/app/stock/models/rating.model';

@Component({
  selector: 'app-market-properties-page',
  templateUrl: './market-properties-page.component.html',
  styleUrls: ['./market-properties-page.component.scss'],
})
export class MarketPropertiesPageComponent implements OnInit {
  readonly rating = Rating;
  macros: any[];
  regions: any[];

  constructor(private macroServices: MacroServices) {
    this.macros = this.macroServices.getMacros();
  }

  ngOnInit(): void {}
}
