import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, filter, shareReplay, take } from 'rxjs';
import { ChangeDisplayNameDialogComponent } from 'src/app/accounts/components/change-display-name-dialog/change-display-name-dialog.component';
import { UserServices } from 'src/app/accounts/services/user.services';
import { AddNoteFormComponent } from 'src/app/notes/components/add-note-form/add-note-form.component';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.services';
import { SearchService } from '../../services/search.services/search.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
})
export class AppContainerComponent implements OnInit {
  environment = environment;
  aboutPage = 'https://mailchi.mp/5377c7dfbe07/about';

  metaDataObjectLoaded$ = this.searchServices.metaDataObjectLoaded$;
  showSearchBar: boolean;
  showDisclaimer;
  language: string;
  user$: Observable<any>;

  showBackToTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showBackToTopButton = scrollPosition > 100; // Adjust the threshold value as needed
  }

  constructor(
    private authService: AuthService,
    private userServices: UserServices,
    private dialog: MatDialog,
    private searchServices: SearchService,
    private router: Router
  ) {
    this.showDisclaimer = localStorage.getItem('showDisclaimer');
    this.user$ = this.userServices.getUser().pipe(shareReplay(1));
  }

  ngOnInit(): void {}

  searchIconClicked(): void {
    this.showSearchBar = true;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateLanguage(): void {
    // if (this.language === 'en') {
    //   this.userServices.setLanguage('cn');
    //   this.language = 'cn';
    // } else {
    //   this.userServices.setLanguage('en');
    //   this.language = 'en';
    // }

    window.location.reload();
  }

  logout(): void {
    this.authService.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  agreeAndClose(): void {
    this.showDisclaimer = 'false';
    localStorage.setItem('showDisclaimer', 'false');
  }

  addNote() {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    const url = this.router.url;
    const urlParts = url.split('/').filter((part) => part !== '');
    const lastTwoParts = urlParts.slice(-2);

    let dialogData: { stockTicker?: string; tagUuid?: string } = {};

    if (lastTwoParts.length === 2) {
      const [possibleType, possibleUuid] = lastTwoParts;

      if (possibleType === 'quotes') {
        dialogData.stockTicker = possibleUuid;
      } else if (possibleType === 'tags') {
        dialogData.tagUuid = possibleUuid;
      }
    }

    this.dialog.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: dialogData,
      width: '600px',
      disableClose: true,
    });
  }

  changeDisplayName(): void {
    // open a dialog to change the display name
    this.userServices
      .getUser()
      .pipe(
        filter((user) => !!user),
        take(1)
      )
      .subscribe((user) => {
        const dialogRef = this.dialog.open(ChangeDisplayNameDialogComponent, {
          width: '400px',
          data: { currentDisplayName: user.displayName },
        });
      });
  }
}
