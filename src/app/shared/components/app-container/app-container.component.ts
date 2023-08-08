import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from 'src/app/accounts/services/user.services';
import { LandingComponent } from 'src/app/landing/landing.component';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
})
export class AppContainerComponent implements OnInit {
  environment = environment;
  aboutPage = 'https://mailchi.mp/5377c7dfbe07/about';

  showSearchBar: boolean;
  showDisclaimer;
  language: string;
  username: string | null;

  constructor(
    private userServices: UserServices,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.language = this.userServices.getLanguage();
    this.showDisclaimer = localStorage.getItem('showDisclaimer');
  }

  ngOnInit(): void {
    this.authService.getLoggedInDisplayName().subscribe((name) => {
      this.username = name;
      if (!name && localStorage.getItem('showDisclaimer') !== 'false') {
        const dialogRef = this.dialog.open(LandingComponent, {
          width: '500px',
          disableClose: true, // Disable dialog close on Esc or click outside
        });
      }
    });
  }

  searchIconClicked(): void {
    this.showSearchBar = true;
  }

  updateLanguage(): void {
    if (this.language === 'en') {
      this.userServices.setLanguage('cn');
      this.language = 'cn';
    } else {
      this.userServices.setLanguage('en');
      this.language = 'en';
    }

    window.location.reload();
  }

  logout(): void {
    this.authService.signOut();
  }

  agreeAndClose(): void {
    this.showDisclaimer = 'false';
    localStorage.setItem('showDisclaimer', 'false');
  }
}
