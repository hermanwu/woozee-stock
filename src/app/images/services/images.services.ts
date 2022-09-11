import { Injectable } from '@angular/core';
import { images } from '../data/images-mock';

@Injectable({
  providedIn: 'root',
})
export class ImageServices {
  getImage(ticker: string) {
    if (ticker) {
      return images.get(ticker.toUpperCase())?.[0];
    }
  }
}
