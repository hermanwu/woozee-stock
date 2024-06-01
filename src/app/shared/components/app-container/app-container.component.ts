import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.user$ = this.userServices.getUser();
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
    const url = this.router.url;
    const lastPart = url.substring(url.lastIndexOf('/') + 1);

    this.dialog.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {
        stock: lastPart,
      },
      panelClass: '600px',
      disableClose: true,
    });
  }
}
