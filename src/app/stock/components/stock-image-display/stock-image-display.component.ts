import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageServices } from '../../../images/services/images.services';

@Component({
  selector: 'app-stock-image-display',
  templateUrl: './stock-image-display.component.html',
  styleUrls: ['./stock-image-display.component.scss'],
})
export class StockImageDisplayComponent implements OnInit, OnChanges {
  @Input() tag;

  @Input() imageLinks;
  imageLink;
  constructor(private imageServices: ImageServices) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.imageLinks) {
      this.imageLink = this.imageLinks[0];
    } else {
      this.imageLink =
        this.imageServices.getImage(this.tag) ||
        'https://i.ibb.co/BTr3F4C/Screen-Shot-2023-01-07-at-11-16-38-AM.png';
    }
  }
}
