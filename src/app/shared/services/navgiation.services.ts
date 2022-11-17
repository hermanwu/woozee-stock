import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationServices {
  constructor(private router: Router) {}

  navigate(type: string, routeWord: string) {
    if (type === 'Stock') {
      return this.router.navigate([`/woozee/stocks/${routeWord}`]);
    }

    if (type === 'Industry') {
      return this.router.navigate([`/woozee/industries/${routeWord}`]);
    }
  }
}
