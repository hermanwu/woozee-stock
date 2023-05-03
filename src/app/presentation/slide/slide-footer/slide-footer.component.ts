import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-footer',
  templateUrl: './slide-footer.component.html',
  styleUrls: ['./slide-footer.component.scss'],
})
export class SlideFooterComponent implements OnInit {
  showDisclaimer;

  constructor() {
    this.showDisclaimer = localStorage.getItem('showDisclaimer');
  }

  ngOnInit(): void {}

  click(): void {
    this.showDisclaimer = 'false';
    localStorage.setItem('showDisclaimer', 'false');
  }
}
