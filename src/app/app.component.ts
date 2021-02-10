import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '投资品';

  routes = [
    {
      name: '自选股排名',
      route: 'stocks',
    },
    {
      name: '产业',
      route: '/industries',
    },
  ];
}
