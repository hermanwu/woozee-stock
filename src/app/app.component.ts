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
      name: '持仓一览',
      route: 'stocks',
    },
    {
      name: '组合推荐',
      route: 'industries',
    },
    {
      name: '放心投资',
      route: 'forever-own',
    },
    {
      name: '风口',
      route: 'trend',
    },
    {
      name: '10倍成长',
      route: '10-x',
    },
  ];
}
