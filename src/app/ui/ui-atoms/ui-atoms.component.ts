import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-atoms',
  templateUrl: './ui-atoms.component.html',
  styleUrls: ['./ui-atoms.component.scss'],
})
export class UiAtomsComponent implements OnInit {
  tagsMock = ['tsla', 'tesla', 'elon musk'];

  constructor() {}

  ngOnInit(): void {}
}
