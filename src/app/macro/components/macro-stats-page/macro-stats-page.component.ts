import { Component, OnInit } from '@angular/core';
import { MacroServices, Rating } from '../../macro.services';

@Component({
  selector: 'app-macro-stats-page',
  templateUrl: './macro-stats-page.component.html',
  styleUrls: ['./macro-stats-page.component.scss'],
})
export class MacroStatsPageComponent implements OnInit {
  readonly rating = Rating;
  macros: any[];
  regions: any[];

  constructor(private macroServices: MacroServices) {
    this.macros = this.macroServices.getMacros();
  }

  ngOnInit(): void {}
}
