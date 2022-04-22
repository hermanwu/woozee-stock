import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarketType } from 'src/app/facts/data/area.enum';

@Component({
  selector: 'app-market-properties-page',
  templateUrl: './market-properties-page.component.html',
  styleUrls: ['./market-properties-page.component.scss'],
})
export class MarketPropertiesPageComponent implements OnInit {
  private readonly marketTypeParamName = 'marketType';
  routeSub: Subscription;

  marketType: MarketType;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.marketType = params[this.marketTypeParamName];
      this.titleService.setTitle(this.marketType);
    });
  }
}
