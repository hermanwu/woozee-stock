import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-header',
  templateUrl: './presentation-header.component.html',
  styleUrls: ['./presentation-header.component.scss'],
})
export class PresentationHeaderComponent implements OnInit {
  recordingDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
