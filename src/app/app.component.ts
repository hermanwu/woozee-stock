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
      name: '7大领域',
      route: 'industries',
    },
    {
      name: '永久好生意',
      route: 'forever-own',
    },
    {
      name: '风口投资',
      route: 'trend',
    },
    {
      name: '10倍投资',
      route: '10-x',
    },
    {
      name: 'FOMO投资',
      route: 'fomo',
    },
  ];
}
