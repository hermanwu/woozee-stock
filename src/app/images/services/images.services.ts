import { Injectable } from '@angular/core';
import { images } from '../data/images-mock';

@Injectable({
  providedIn: 'root',
})
export class ImageServices {
  getImage(tag: string) {
    if (tag) {
      return images.get(tag.toLowerCase())?.[0];
    }
  }
}
