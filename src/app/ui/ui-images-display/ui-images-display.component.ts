import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-images-display',
  templateUrl: './ui-images-display.component.html',
  styleUrls: ['./ui-images-display.component.scss'],
})
export class UiImagesDisplayComponent implements OnInit {
  @Input() images: { link: string; title: string }[];

  constructor() {}

  ngOnInit(): void {}
}
