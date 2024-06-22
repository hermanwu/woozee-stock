import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
})
export class RankingPageComponent implements OnInit {
  @ViewChild('tabPanel') tabPanel: any;

  readonly stocksRoute = 'stocks';
  readonly tagsRoute = 'tags';
  activeRoute: string = this.stocksRoute;

  navLinks = [
    { path: this.stocksRoute, label: $localize`Stocks` },
    { path: this.tagsRoute, label: $localize`Tags` },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.getLastSegmentOfUrl(this.router.url);
      });
  }

  private getLastSegmentOfUrl(url: string): string {
    return url.substr(url.lastIndexOf('/') + 1);
  }
}
