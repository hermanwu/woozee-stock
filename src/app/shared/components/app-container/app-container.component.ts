import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
})
export class AppContainerComponent implements OnInit {
  showSearchBar: boolean;

  constructor() {}

  ngOnInit(): void {}

  searchIconClicked(): void {
    this.showSearchBar = true;
  }
}
