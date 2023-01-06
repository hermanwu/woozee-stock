import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
})
export class AppContainerComponent implements OnInit {
  environment = environment;
  aboutPage = 'https://mailchi.mp/5377c7dfbe07/about';

  showSearchBar: boolean;
  language: string;

  constructor(private userServices: UserServices) {
    this.language = this.userServices.getLanguage();
  }

  ngOnInit(): void {}

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
}
