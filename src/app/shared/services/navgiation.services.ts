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
    if (!type) {
      return this.router.navigate([`/quotes/${routeWord}`]);
    }

    type = type.toLowerCase();
    switch (type) {
      case 'tradable':
      case 'stocks and etfs':
        return this.router.navigate([`/quotes/${routeWord}`]);
      case 'company':
        return this.router.navigate([`/companies/${routeWord}`]);
      case 'organization':
        return this.router.navigate([`/stocks/${routeWord}`]);
      case 'industry':
        return this.router.navigate([`/industries/${routeWord}`]);
      case 'product':
        return this.router.navigate([`/products/${routeWord}`]);
      case 'person':
        return this.router.navigate([`/people/${routeWord}`]);
      case 'tags':
        return this.router.navigate([`/tags/${routeWord}`]);
      default:
        return;
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
