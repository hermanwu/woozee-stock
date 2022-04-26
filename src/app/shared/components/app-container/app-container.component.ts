import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  searchIconClicked(): void {
    this.showSearchBar = true;
  }
}
