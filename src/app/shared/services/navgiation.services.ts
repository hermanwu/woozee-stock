import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationServices {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  navigate(type: string, routeWord: string) {
    type = type.toLowerCase();
    switch (type) {
      case 'tradable':
      case 'stocks and etfs':
        return this.router.navigate([`/woozee/quotes/${routeWord}`]);
      case 'company':
        return this.router.navigate([`/woozee/companies/${routeWord}`]);
      case 'organization':
        return this.router.navigate([`/woozee/stocks/${routeWord}`]);
      case 'industry':
        return this.router.navigate([`/woozee/industries/${routeWord}`]);
      case 'product':
        return this.router.navigate([`/woozee/products/${routeWord}`]);
      case 'person':
        return this.router.navigate([`/woozee/people/${routeWord}`]);
      case 'tag':
        return this.router.navigate([`/woozee/tags/${routeWord}`]);
      default:
        return;
    }
  }
}
