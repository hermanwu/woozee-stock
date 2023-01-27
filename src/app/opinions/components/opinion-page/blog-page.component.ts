import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opinion-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class MePageComponent implements OnInit {
  readonly notesRoute = 'notes';
  readonly actionsRoute = 'actions';
  readonly listRoute = 'lists';
  activeRoute: string = this.notesRoute;

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
