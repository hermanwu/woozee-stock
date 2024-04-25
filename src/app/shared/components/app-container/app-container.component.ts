import { Component, OnInit } from '@angular/core';
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

  showSearchBar: boolean;
  showDisclaimer;
  language: string;
  username$: Observable<string | null>;

  constructor(
    private authService: AuthService,
    private userServices: UserServices,
    private dialog: MatDialog,
    private searchServices: SearchService,
    private router: Router
  ) {
    this.showDisclaimer = localStorage.getItem('showDisclaimer');
    this.username$ = this.userServices.getUsername();
  }

  ngOnInit(): void {
    // this.authService.getLoggedInDisplayName().subscribe((name) => {
    //   if (!name && localStorage.getItem('showDisclaimer') !== 'false') {
    //     const dialogRef = this.dialog.open(LandingComponent, {
    //       width: '500px',
    //       disableClose: true, // Disable dialog close on Esc or click outside
    //     });
    //   }
    // });
  }

  searchIconClicked(): void {
    this.showSearchBar = true;
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
    this.dialog.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {},
      panelClass: '600px',
      disableClose: true,
    });
  }
}
