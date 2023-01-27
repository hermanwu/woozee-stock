import { Injectable } from '@angular/core';
import { images } from '../data/images-mock';

@Injectable({
  providedIn: 'root',
})
export class ImageServices {
  getImage(tag: string) {
    if (tag) {
      const imageArray = images.get(tag.toLowerCase());
      return imageArray?.[Math.floor(Math.random() * imageArray.length)];
    }
  }

  getAutherImageLink(authorName: string) {}

  getOrganizationImageLink(organizationName: string) {}
}
