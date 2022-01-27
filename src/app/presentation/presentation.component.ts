import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  iframeSource =
    'https://docs.google.com/presentation/d/1Tc5_tR3u30ePL_ZZ9LuAfhUYg2UeFwEmS-EHZBAudeg/edit?usp=sharing';
  showApp = false;

  constructor() {}

  ngOnInit(): void {}

  updateShowApp() {
    this.showApp = !this.showApp;
  }
}
