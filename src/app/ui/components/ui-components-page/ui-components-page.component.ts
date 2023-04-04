import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../../../accounts/services/user.services';
import { opinionMock } from '../../ui-molecules/ui-molecules.component';
@Component({
  selector: 'app-ui-components-page',
  templateUrl: './ui-components-page.component.html',
  styleUrls: ['./ui-components-page.component.scss'],
})
export class UiComponentsPageComponent implements OnInit {
  readonly noteFormRoute = 'note-form';
  readonly addPersonRoute = 'add-person';
  readonly uiAtomsRoute = 'ui-atoms';
  readonly uiMoleculesRoute = 'ui-molecules';
  readonly uiOrganismsRoute = 'ui-organisms';
  readonly uiTemplatesRoute = 'ui-templates';

  activeRoute: string = this.noteFormRoute;

  newsUuid: string;
  opinionMock = opinionMock;
  mockPortfolio;
  rankedStocks;
  globalRanking = this.userServices.getGlobalRanking();

  constructor(private router: Router, private userServices: UserServices) {}

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
