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
      name: '科技成长',
      route: 'industries',
    },
    {
      name: '长持复利',
      route: 'forever-own',
    },
    {
      name: '风口',
      route: 'trend',
    },
  ];
}
