import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss'],
})
export class ImageDisplayComponent implements OnInit {
  @Input() imageLink: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (!this.imageLink) {
      this.imageLink =
        'https://i.ibb.co/BTr3F4C/Screen-Shot-2023-01-07-at-11-16-38-AM.png';
    }
  }
}
