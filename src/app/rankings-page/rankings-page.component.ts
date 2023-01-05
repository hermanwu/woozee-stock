import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rankings-page',
  templateUrl: './rankings-page.component.html',
  styleUrls: ['./rankings-page.component.scss'],
})
export class RankingsPageComponent implements OnInit {
  readonly stocksRoute = 'stocks';
  readonly industriesRoute = 'industries';
  readonly regionsRoute = 'markets';
  readonly assetsRoute = 'assets';
  activeRoute: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.activeRoute = this.getLastSegmentOfUrl(this.router.url);
    }, 0);
  }

  /**
   * Get the target href of anchor link
   *  and set the activeRoute property accordingly.
   * @param target Anchor link's target.
   */
  onAnchorLinkClicked(target: HTMLAnchorElement): void {
    const href = target.href;

    this.activeRoute = this.getLastSegmentOfUrl(href);
  }

  /**
   * Get the url segment after last '/'.
   * @param url Url string.
   */
  private getLastSegmentOfUrl(url: string): string {
    return url.substr(url.lastIndexOf('/') + 1);
  }
}
